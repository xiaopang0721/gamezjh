/**
* name 
*/
module gamezjh.data {
	//牌型
	const cardType = ['高牌', '对子', '顺子', '金花', '同花顺', '豹子', '高牌']
	export class ZjhMapInfo extends gamecomponent.object.MapInfoT<ZjhData> {
		//地图状态变更
		static EVENT_ZJH_STATUS_CHECK: string = "ZjhMapInfo.EVENT_ZJH_STATUS_CHECK";
		//战斗体更新
		static EVENT_ZJH_BATTLE_CHECK: string = "ZjhMapInfo.EVENT_ZJH_BATTLE_CHECK";
		constructor(v: SceneObjectMgr) {
			super(v, () => { return new ZjhData() });
		}

		onUpdate(flags: number, mask: UpdateMask, strmask: UpdateMask): void {
			super.onUpdate(flags, mask, strmask);
			let isNew = flags & core.obj.OBJ_OPT_NEW;
			if (isNew || mask.GetBit(MapField.MAP_INT_MAP_BYTE)) {
				this._sceneObjectMgr.event(ZjhMapInfo.EVENT_ZJH_STATUS_CHECK);
			}
			if (isNew || mask.GetBit(MapField.MAP_INT_BATTLE_INDEX)) {
				this._battleInfoMgr.OnUpdate();
				this._sceneObjectMgr.event(ZjhMapInfo.EVENT_ZJH_BATTLE_CHECK);
			}
		}

		public getBattleInfoToString(): string {
			let str: string = "";
			for (let i = 0; i < this._battleInfoMgr.info.length; i++) {
				let battleInfo = this._battleInfoMgr.info[i] as gamecomponent.object.BattleInfoBase;
				if (battleInfo.Type == 1) {
					let info = this._battleInfoMgr.info[i] as gamecomponent.object.BattleInfoPass;
					let name = this.GetPlayerNameFromSeat(info.SeatIndex)
					let newString: string = name + "：" + "弃牌";
					if (str == "") {
						str = newString;
					} else {
						str = str + "#" + newString;
					}
				} else if (battleInfo.Type == 2) {
					let info = this._battleInfoMgr.info[i] as gamecomponent.object.BattleInfoBet;
					let name = this.GetPlayerNameFromSeat(info.SeatIndex)
					let newString: string = name + "：" + "跟注，金额是：" + info.BetVal;
					if (str == "") {
						str = newString;
					} else {
						str = str + "#" + newString;
					}
				} else if (battleInfo.Type == 7) {
					let info = this._battleInfoMgr.info[i] as gamecomponent.object.BattleInfoSeeCard;
					let name = this.GetPlayerNameFromSeat(info.SeatIndex)
					let newString: string = name + "：" + "看牌";
					if (str == "") {
						str = newString;
					} else {
						str = str + "#" + newString;
					}
				} else if (battleInfo.Type == 9) {
					let info = this._battleInfoMgr.info[i] as gamecomponent.object.BattleInfoAddChip;
					let name = this.GetPlayerNameFromSeat(info.SeatIndex)
					let newString: string = name + "：" + "加注，金额是：" + info.BetVal;
					if (str == "") {
						str = newString;
					} else {
						str = str + "#" + newString;
					}
				} else if (battleInfo.Type == 4) {
					let info = this._battleInfoMgr.info[i] as gamecomponent.object.BattleInfoCompare;
					let name1 = this.GetPlayerNameFromSeat(info.SeatIndex)
					let name2 = this.GetPlayerNameFromSeat(info.TargetIdx)
					let name3 = this.GetPlayerNameFromSeat(info.WinIdx)
					let newString: string = name1 + " 和 " + name2 + " 比牌，" + "胜方：" + name3;
					if (str == "") {
						str = newString;
					} else {
						str = str + "#" + newString;
					}
				} else if (battleInfo.Type == 8) {
					let info = this._battleInfoMgr.info[i] as gamecomponent.object.BattleInfoGuzhuyizhi;
					let name1 = this.GetPlayerNameFromSeat(info.SeatIndex)
					let name2 = this.GetPlayerNameFromSeat(info.TargetIdx)
					let name3 = this.GetPlayerNameFromSeat(info.WinIdx)
					let newString: string = name1 + " 孤注一掷，和 " + name2 + " 比牌，" + "胜方：" + name3;
					if (str == "") {
						str = newString;
					} else {
						str = str + "#" + newString;
					}
				} else if (battleInfo.Type == 3) {
					let info = this._battleInfoMgr.info[i] as gamecomponent.object.BattleInfoPlayCard<ZjhData>;
					let name = this.GetPlayerNameFromSeat(info.SeatIndex)
					let newString = name + " 的牌型是：" + cardType[info.CardType - 1];
					if (str == "") {
						str = newString;
					} else {
						str = str + "#" + newString;
					}
				} else if (battleInfo.Type == 11) {
					let info = this._battleInfoMgr.info[i] as gamecomponent.object.BattleInfoSettle;
					let name = this.GetPlayerNameFromSeat(info.SeatIndex)
					let newString = name + "盈利：" + info.SettleVal;
					if (str == "") {
						str = newString;
					} else {
						str = str + "#" + newString;
					}
				} else if (battleInfo.Type == 14) {
					let info = this._battleInfoMgr.info[i] as gamecomponent.object.BattleInfoXiQian;
					let name = this.GetPlayerNameFromSeat(info.SeatIndex)
					let newString = name + " 获得喜钱：" + info.BetVal;
					if (str == "") {
						str = newString;
					} else {
						str = str + "#" + newString;
					}
				}
			}
			return str;
		}

		//通过座位取玩家名字
		private GetPlayerNameFromSeat(index: number): string {
			let name: string;
			let users = this._battleInfoMgr.users;
			name = users[index - 1].name;
			return name
		}
	}
}