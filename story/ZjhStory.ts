/**
* name 炸金花剧情
*/
module gamezjh.story {
	const enum MAP_STATUS {
		MAP_STATE_READY = 0,	//准备
		MAP_STATE_SHUFFLE = 1,	//洗牌中
		MAP_STATE_TIME = 2,		//开始倒计时
		MAP_STATE_CARD = 3,		//发牌
		MAP_STATE_BEGIN = 4,	//开始游戏
		MAP_STATE_COMPARE = 5,  //比牌中
		MAP_STATE_SETTLEMENT = 6,	//结算
		MAP_STATE_SHOW = 7,	    //明牌
	}

	export class ZjhStory extends gamecomponent.story.StoryNormalBase {
		private _zjhMgr: ZjhMgr;
		private _cardsTemp: any = [];
		private _zjhMapInfo: ZjhMapInfo;
		private _isGiveUp: boolean = false;	//是否弃牌

		public isDealCard: boolean = false;	//是否发过牌了
		public checkReconect: boolean = false;	//检查重连

		constructor(v: Game, mapid: string, maplv: number) {
			super(v, mapid, maplv);
			this.init();
		}

		init() {
			super.init();
			if (!this._zjhMgr) {
				this._zjhMgr = new ZjhMgr(this._game);
			}
			this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_LOAD_MAP, this, this.onIntoNewMap);
			this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_MAPINFO_CHANGE, this, this.onMapInfoChange);
			this._game.sceneObjectMgr.on(MapInfo.EVENT_STATUS_CHECK, this, this.onUpdateState);

			this.onIntoNewMap();
		}

		get zjhMgr() {
			return this._zjhMgr;
		}

		set mapLv(lv: number) {
			this.maplv = lv;
		}

		get mapLv() {
			return this.maplv;
		}

		set isGiveUp(v: boolean) {
			this._isGiveUp = v;
		}

		get mapinfo() {
			if (this._mapinfo && this._isGiveUp) return null;
			return this._mapinfo;
		}

		private createObj(u: Unit) {
			let card = this._game.sceneObjectMgr.createOfflineObject(SceneRoot.CARD_MARK, ZjhData) as ZjhData;
			card.pos = new Vector2(850, 200);
			return card;
		}

		private onIntoNewMap(info?: MapAssetInfo): void {
			if (!info) return;


			this.onMapInfoChange();
			this._game.uiRoot.closeAll();
			this._game.uiRoot.HUD.open(ZjhPageDef.PAGE_ZHAJINHUA_MAP);
		}

		private onMapInfoChange(): void {
			let mapinfo = this._game.sceneObjectMgr.mapInfo;
			this._zjhMapInfo = mapinfo as ZjhMapInfo;
			if (mapinfo) {
				if (mapinfo.GetMapState() == MAP_STATUS.MAP_STATE_SHOW) {
					this._game.network.call_zjh_continue();
				}
				this.onUpdateState();
				this.onUpdateCardInfo();
			} else {
				this._zjhMgr.unitOffline = this._offlineUnit;
			}
		}

		private onUpdateState(): void {
			let mapinfo: MapInfo = this._game.sceneObjectMgr.mapInfo;
			let mainUnit: Unit = this._game.sceneObjectMgr.mainUnit;
			if (!mapinfo) return;
			if (!mainUnit) return;
			if (!mainUnit.GetIndex()) return;
			let statue = mapinfo.GetMapState();

			switch (statue) {
				case MAP_STATUS.MAP_STATE_CARD://发牌
					if (this.isDealCard) return;
					this.updateCardsCount();
					let handle = new Handler(this, this.createObj);
					this._zjhMgr.Init(this._cardsTemp, handle);
					this._zjhMgr.sort();
					this._zjhMgr.fapai();
					this.isDealCard = true;
					break;
			}
		}

		//断线重连,重发下牌
		private onUpdateCardInfo(): void {
			let mapinfo: MapInfo = this._game.sceneObjectMgr.mapInfo;
			let mainUnit: Unit = this._game.sceneObjectMgr.mainUnit;
			if (!mapinfo) return;
			if (!mainUnit) return;
			if (!mainUnit.GetIndex()) return;
			if (!this.isReConnected) return;
			let statue = mapinfo.GetMapState();
			if (this.checkReconect) return;
			if (statue > MAP_STATUS.MAP_STATE_READY && statue < MAP_STATUS.MAP_STATE_SHOW) {
				this.updateCardsCount();
				this._zjhMgr.isReLogin = true;
				this.checkReconect = true;
				if (this.isDealCard) return;
				if (statue > MAP_STATUS.MAP_STATE_CARD) {
					let handle = new Handler(this, this.createObj);
					this._zjhMgr.Init(this._cardsTemp, handle);
					this._zjhMgr.sort();
					this._zjhMgr.refapai();
					this.isDealCard = true;
				}
			}
		}

		//算下在场几个人来定牌数
		private updateCardsCount(): void {
			let card = [1, 2, 3];
			this._cardsTemp = [];
			for (let index = 1; index < 6; index++) {
				let unit = this._game.sceneObjectMgr.getUnitByIdx(index)
				if (unit) {
					this._cardsTemp = this._cardsTemp.concat(card);
				}
			}
		}

		createofflineUnit() {
			//创建假的地图和精灵
			let unitOffline = new UnitOffline(this._game.sceneObjectMgr);
			if (this._game.sceneObjectMgr.mainPlayer) {
				unitOffline.SetStr(UnitField.UNIT_STR_NAME, this._game.sceneObjectMgr.mainPlayer.playerInfo.nickname);
				unitOffline.SetStr(UnitField.UNIT_STR_HEAD_IMG, this._game.sceneObjectMgr.mainPlayer.playerInfo.headimg);
				unitOffline.SetDouble(UnitField.UNIT_INT_MONEY, this._game.sceneObjectMgr.mainPlayer.playerInfo.money);
				unitOffline.SetUInt32(UnitField.UNIT_INT_QI_FU_END_TIME, this._game.sceneObjectMgr.mainPlayer.playerInfo.qifu_endtime);
				unitOffline.SetUInt32(UnitField.UNIT_INT_QI_FU_TYPE, this._game.sceneObjectMgr.mainPlayer.playerInfo.qifu_type);
				unitOffline.SetUInt32(UnitField.UNIT_INT_VIP_LEVEL, this._game.sceneObjectMgr.mainPlayer.playerInfo.vip_level);
			}
			unitOffline.SetUInt16(UnitField.UNIT_INT_UINT16, 0, 1);

			this._offlineUnit = unitOffline;
		}

		enterMap() {
			//各种判断
			if (this.mapinfo) return false;
			if (!this.maplv) {
				this.maplv = this._last_maplv;
			}
			this._game.network.call_match_game(this._mapid, this.maplv);
			return true;
		}

		leavelMap() {
			//各种判断
			this._game.network.call_leave_game();
			return true;
		}

		clear() {
			super.clear();
			this._game.sceneObjectMgr.off(ZjhMapInfo.EVENT_STATUS_CHECK, this, this.onUpdateState);
			this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_LOAD_MAP, this, this.onIntoNewMap);
			this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_MAPINFO_CHANGE, this, this.onMapInfoChange);
			if (this._zjhMgr) {
				this._zjhMgr.clear();
				this._zjhMgr = null;
			}
		}
	}
}