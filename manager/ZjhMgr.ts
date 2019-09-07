/**
* name 
*/
module gamezjh.manager {
	const enum CARD_TYPE {
		CARDS_TYPE_SINGLE = 0,		//单张
		CARDS_TYPE_DOUBLE = 1,		//对子
		CARDS_TYPE_STRAIGHT = 2,		//顺子
		CARDS_TYPE_SAMECOLOR = 3,	//金花
		CARDS_TYPE_FLUSH = 4, 		//同花顺
		CARDS_TYPE_LEOPARD = 5, 		//豹子
		CARDS_TYPE_SPECIAL = 6, 		//特殊牌 235
	}
	export class ZjhMgr extends gamecomponent.managers.PlayingCardMgrBase<ZjhData>{
		public isReLogin: boolean = false;	//是否断线重连

		private static MIN_CHECKTIME: number = 1000;//最小检测时间间隔(毫秒)
		private _offsetTime: number//剩余检测时间(毫秒)
		private _unitOffline: UnitOffline;//假精灵信息
		private _cardIndex: number = 0;	//发牌监听用

		static readonly EVENT_CHECK: string = "ZjhMgr.ZjhMgr.EVENT_CHECK";
		static readonly MAPINFO_OFFLINE: string = "ZjhMgr.MAPINFO_OFFLINE";//假精灵
		static readonly XIQIAN_END: string = "ZjhMgr.XIQIAN_END";	//喜钱播放结束

		constructor(game: Game) {
			super(game);
		}

		get unitOffline() {
			return this._unitOffline;
		}

		set unitOffline(v) {
			this._unitOffline = v;
			this.event(ZjhMgr.MAPINFO_OFFLINE)
		}

		set cardIndex(v) {
			this._cardIndex = v;
		}

		//心跳更新
		update(diff: number) {
			if (this._offsetTime > 0) {
				this._offsetTime -= diff;
				return;
			}
			this._offsetTime = ZjhMgr.MIN_CHECKTIME;

		}

		private getCardValue(card): number {
			let cardValue = 0;
			card = card - 1;
			cardValue = card % 13;
			if (cardValue == 0)
				cardValue = 13;
			return cardValue;
		}

		// 看下是什么牌
		public checkCardsType(cards): number {
			let cardtype = CARD_TYPE.CARDS_TYPE_SINGLE;
			cards.sort((a, b) => {
				this.getCardValue(cards[b]) > this.getCardValue(cards[a]);
			})
			if (this.isSameColor(cards)) {
				if (this.isStraight(cards))
					cardtype = CARD_TYPE.CARDS_TYPE_FLUSH;
				else
					cardtype = CARD_TYPE.CARDS_TYPE_SAMECOLOR;
			} else {
				if (this.isLeopard(cards))
					cardtype = CARD_TYPE.CARDS_TYPE_LEOPARD;
				else if (this.isStraight(cards))
					cardtype = CARD_TYPE.CARDS_TYPE_STRAIGHT;
				else if (this.isDouble(cards))
					cardtype = CARD_TYPE.CARDS_TYPE_DOUBLE;
				else if (this.isSpecialCards(cards))
					cardtype = CARD_TYPE.CARDS_TYPE_SPECIAL;
			}
			return cardtype;
		}
		// 是否对子
		private isDouble(cards): boolean {
			let length = cards.length;
			for (let i = 0; i < length; i++) {
				if (this.getCardValue(cards[0]) == this.getCardValue(cards[2])) {
					return false;
				}
				if (this.getCardValue(cards[0]) != this.getCardValue(cards[1]) && this.getCardValue(cards[1]) != this.getCardValue(cards[2])) {
					return false;
				}
			}
			return true;
		}
		// 是否顺子
		private isStraight(cards): boolean {
			if (this.getCardValue(cards[1]) - this.getCardValue(cards[0]) == 1 && this.getCardValue(cards[2]) - this.getCardValue(cards[1]) == 1) {
				return true;
			}
			else {
				if (this.getCardValue(cards[2]) == 13 && this.getCardValue(cards[1]) == 2 && this.getCardValue(cards[0]) == 1) {
					return true;
				}
			}
			return false;
		}
		// 是否豹子
		private isLeopard(cards): boolean {
			let length = cards.length;
			for (let i = 0; i < length; i++) {
				if (this.getCardValue(cards[0]) != this.getCardValue(cards[length - 1]))
					return false;
			}
			return true;
		}
		// 是否同花
		private isSameColor(cards): boolean {
			let length = cards.length;
			let color1 = Math.floor((cards[0] - 1) / 13);
			for (let i = 1; i < length; i++) {
				let color2 = Math.floor((cards[i] - 1) / 13);
				if (color1 != color2)
					return false;
			}
			return true;
		}
		//是否是235
		private isSpecialCards(cards): boolean {
			if (this.getCardValue(cards[2]) != 4 || this.getCardValue(cards[1]) != 2 || this.getCardValue(cards[0]) != 1)
				return false;
			return true;
		}

		sort() {
			let cards = this._cards;
			let max = 5;
			let mainUnit: Unit = this._game.sceneObjectMgr.mainUnit;
			let idx = mainUnit.GetIndex();
			let count = 0;
			for (let index = 0; index < max; index++) {
				let posIdx = (idx + index) % max == 0 ? max : (idx + index) % max;
				let unit = this._game.sceneObjectMgr.getUnitByIdx(posIdx);
				if (unit) {
					for (let i = 0; i < 3; i++) {
						let card = cards[count * 3 + i] as ZjhData;
						if (card) {
							if (unit == mainUnit) {
								let val = this._game.sceneObjectMgr.mainPlayer.playerInfo.cards;
								card.Init(val[i])
							}
							card.myOwner(unit, mainUnit == unit, idx, posIdx);
							card.index = i;
							card.sortScore = -i;
						}
					}
					count++;
				}
			}
		}

		//发牌
		fapai() {
			let count = 0;
			for (let index = 0; index < 3; index++) {
				for (let i = 0; i < this._cards.length / 3; i++) {
					let card = this._cards[index + i * 3];
					//播音效
					Laya.timer.once(100 * count, this, () => {
						this._game.playSound(PathGameTongyong.music_tongyong + "fapai.mp3", false);
						card.fapai();
						this._cardIndex++;
						if (this._cardIndex == this._cards.length)
							this.event(ZjhMgr.EVENT_CHECK)
					});
					count++;
				}
			}
		}

		//重连发牌
		refapai() {
			for (let i = 0; i < this._cards.length; i++) {
				let card = this._cards[i];
				card.refapai();
			}
		}

		//翻牌
		fanpai() {
			for (let index = 0; index < this._cards.length; index++) {
				let element = this._cards[index];
				element.fanpai();
			}
		}

		//明牌
		showCard(v: any, pos: number): void {
			for (let i = 0; i < this._cards.length; i++) {
				let card = this._cards[i];
				card.sortScore = 3 - i;
				if (card._ownerIdx == pos) {
					let index = i % 3;
					card.Init(v[index]);
					card.fanpaiall();
				}
			}
		}

		//牌置灰
		setDisabled(show: boolean, unit: Unit): void {
			for (let i = 0; i < this._cards.length; i++) {
				let card = this._cards[i];
				if (card.owner == unit) {
					card.disable = show;
				}
			}
		}

		// 清理筹码
		clearCardObject(): void {
			this._game.sceneObjectMgr.ForEachObject((obj: any) => {
				if (obj instanceof data.ZjhChip) {
					this._game.sceneObjectMgr.ReleaseObject(obj);
				}
			})
		}
	}
}