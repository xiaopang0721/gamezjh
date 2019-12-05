/**
* 炸金花
*/
module gamezjh.page {
	export class ZhaJinHuaPage extends game.gui.base.Page {
		private _viewUI: ui.nqp.game_ui.zhajinhua.ZhaJinHua_HUDUI;
		private _player: any;
		private _playerInfo: any;
		private _difenTmep: any = [1, 5, 20, 50];
		private _leastTmep: any = [20, 200, 500, 1000];
		private _clipArr: any[] = [ClipUtil.HUD_FONT0, ClipUtil.HUD_FONT1, ClipUtil.HUD_FONT2, ClipUtil.HUD_FONT3];
		private _difenClipList: ClipUtil[] = [];
		private _leastClipList: ClipUtil[] = [];
		private _zjhMgr: ZjhMgr;

		constructor(v: Game, onOpenFunc?: Function, onCloseFunc?: Function) {
			super(v, onOpenFunc, onCloseFunc);
			this._asset = [
				Path_game_zjh.atlas_game_ui + "zhajinhua.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "general.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "touxiang.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "hud.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "dating.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "logo.atlas",
				Path_game_zjh.ui_zjh_sk + "zjh_0.png",
				Path_game_zjh.ui_zjh_sk + "zjh_1.png",
				Path_game_zjh.ui_zjh_sk + "zjh_2.png",
				Path_game_zjh.ui_zjh_sk + "zjh_3.png",
			];
			this._isNeedDuang = false;
		}

		// 页面初始化函数
		protected init(): void {
			this._viewUI = this.createView('game_ui.zhajinhua.ZhaJinHua_HUDUI', ["game_ui.tongyong.HudUI"]);
			this.addChild(this._viewUI);
			this._game.playMusic(Path.music + "zjh/bgroom.mp3", 0);
			this._zjhMgr = new ZjhMgr(this._game);

			for (let index = 0; index < this._viewUI.box_right.numChildren; index++) {
				this._viewUI.box_right._childs[index].visible = false;
			}
			for (let index = 0; index < 4; index++) {
				if (!this._difenClipList[index]) {
					this._difenClipList[index] = new ClipUtil(this._clipArr[index]);
					this._difenClipList[index].x = this._viewUI["txt_difen" + index].x;
					this._difenClipList[index].y = this._viewUI["txt_difen" + index].y;
					this._viewUI["txt_difen" + index].parent && this._viewUI["txt_difen" + index].parent.addChild(this._difenClipList[index]);
					this._viewUI["txt_difen" + index].removeSelf();
				}
				if (!this._leastClipList[index]) {
					this._leastClipList[index] = new ClipUtil(this._clipArr[index]);
					this._leastClipList[index].x = this._viewUI["txt_least" + index].x;
					this._leastClipList[index].y = this._viewUI["txt_least" + index].y;
					this._leastClipList[index].scale(0.8, 0.8);
					this._viewUI["txt_least" + index].parent && this._viewUI["txt_least" + index].parent.addChild(this._leastClipList[index]);
					this._viewUI["txt_least" + index].removeSelf();
				}
			}
		}

		// 页面打开时执行函数
		protected onOpen(): void {
			super.onOpen();

			this.initPlayerInfo()
			this._viewUI.btn_join.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			(this._viewUI.view_hud as TongyongHudNqpPage).onOpen(this._game, ZjhPageDef.GAME_NAME, false);

			for (let index = 0; index < this._viewUI.box_right.numChildren; index++) {
				this._viewUI.box_right._childs[index].visible = true;
				Laya.Tween.from(this._viewUI.box_right._childs[index], {
					right: -300
				}, this._initialtime + index * this._time, Laya.Ease.linearNone);
			}
			Laya.timer.once(this._initialtime + 4 * this._time, this, this.onComplete)
		}
		
		private _initialtime: number = 200;
		private _time: number = 100;
		private onComplete(){
			this._viewUI.img_room0.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._viewUI.img_room1.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._viewUI.img_room2.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._viewUI.img_room3.on(LEvent.CLICK, this, this.onBtnClickWithTween);
		}

		protected onBtnTweenEnd(e: LEvent, target: any): void {
			this._player = this._game.sceneObjectMgr.mainPlayer;
			if (!this._player) return;
			this._playerInfo = this._player.playerInfo;
			switch (target) {
				case this._viewUI.img_room0:
					if (this._player.playerInfo.money < this._leastTmep[0]) {
						this.showTipsBox(this._leastTmep[0]);
						return;
					}
					this._game.sceneObjectMgr.intoStory(ZjhPageDef.GAME_NAME, Web_operation_fields.GAME_ROOM_CONFIG_ZJH_1.toString());
					break;
				case this._viewUI.img_room1:
					if (this._player.playerInfo.money < this._leastTmep[1]) {
						this.showTipsBox(this._leastTmep[1]);
						return;
					}
					this._game.sceneObjectMgr.intoStory(ZjhPageDef.GAME_NAME, Web_operation_fields.GAME_ROOM_CONFIG_ZJH_2.toString());
					break;
				case this._viewUI.img_room2:
					if (this._player.playerInfo.money < this._leastTmep[2]) {
						this.showTipsBox(this._leastTmep[2]);
						return;
					}
					this._game.sceneObjectMgr.intoStory(ZjhPageDef.GAME_NAME, Web_operation_fields.GAME_ROOM_CONFIG_ZJH_3.toString());
					break;
				case this._viewUI.img_room3:
					if (this._player.playerInfo.money < this._leastTmep[3]) {
						this.showTipsBox(this._leastTmep[3]);
						return;
					}
					this._game.sceneObjectMgr.intoStory(ZjhPageDef.GAME_NAME, Web_operation_fields.GAME_ROOM_CONFIG_ZJH_4.toString());
					break;
				// case this._viewUI.btn_join:
				// 	let maplv = TongyongUtil.getJoinMapLv(ZjhPageDef.GAME_NAME, this._playerInfo.money);
				// 	if (!maplv) {
				// 		this.showTipsBox(this._leastTmep[0]);
				// 		return;
				// 	}
				// 	this._game.sceneObjectMgr.intoStory(ZjhPageDef.GAME_NAME, maplv.toString());
				// 	break;
				default:
					break;
			}
		}

		private initPlayerInfo(): void {
			for (let index = 0; index < this._difenClipList.length; index++) {
				this._difenClipList[index] && this._difenClipList[index].setText(this._difenTmep[index], true);
			}
			for (let index = 0; index < this._leastClipList.length; index++) {
				this._leastClipList[index] && this._leastClipList[index].setText(this._leastTmep[index], true);
			}
		}

		private showTipsBox(limit: number) {
			this._game.alert(StringU.substitute("老板，您的金币少于{0}哦~\n补充点金币去大杀四方吧~", limit), () => {
				this._game.uiRoot.general.open(DatingPageDef.PAGE_CHONGZHI);
			}, () => {
			}, true,Tips.TIPS_SKIN_STR["cz"]);
		}

		public close(): void {
			if (this._viewUI) {
				this._viewUI.img_room0.off(LEvent.CLICK, this, this.onBtnClickWithTween);
				this._viewUI.img_room1.off(LEvent.CLICK, this, this.onBtnClickWithTween);
				this._viewUI.img_room2.off(LEvent.CLICK, this, this.onBtnClickWithTween);
				this._viewUI.img_room3.off(LEvent.CLICK, this, this.onBtnClickWithTween);
				this._viewUI.btn_join.off(LEvent.CLICK, this, this.onBtnClickWithTween);
			}
			this._game.stopMusic();

			super.close();
		}
	}
}