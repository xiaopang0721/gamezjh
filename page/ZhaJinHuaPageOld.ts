/**
* 炸金花
*/
module gamezjh.page {
	export class ZhaJinHuaPageOld extends game.gui.base.Page {
		private _viewUI: ui.nqp.game_ui.zhajinhua.ZhaJinHua_HUDUI;
		private _player: any;
		private _playerInfo: any;
		private _leastTmep: any = [1, 5, 20, 50];
		private _needMoney: any = [20, 200, 500, 1000];
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
		}

		// 页面打开时执行函数
		protected onOpen(): void {
			super.onOpen();

			this.initPlayerInfo()
			this._viewUI.img_room0.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._viewUI.img_room1.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._viewUI.img_room2.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._viewUI.img_room3.on(LEvent.CLICK, this, this.onBtnClickWithTween);

			(this._viewUI.view_hud as TongyongHudPage).onOpen(this._game, ZjhPageDef.GAME_NAME);

			for (let index = 0; index < this._viewUI.box_right.numChildren; index++) {
				this._viewUI.box_right._childs[index].visible = true;
				Laya.Tween.from(this._viewUI.box_right._childs[index], {
					right: -300
				}, 200 + index * 100, Laya.Ease.linearNone);
			}
		}

		protected onBtnTweenEnd(e: LEvent, target: any): void {
			this._player = this._game.sceneObjectMgr.mainPlayer;
			if (!this._player) return;
			if (this.chkPlayerIsGuest()) return;
			this._playerInfo = this._player.playerInfo;
			switch (target) {
				case this._viewUI.img_room0:
					if (this._player.playerInfo.money < this._needMoney[0]) {
						this.showTipsBox(this._needMoney[0]);
						return;
					}
					this._game.sceneObjectMgr.intoStory(ZjhPageDef.GAME_NAME, Web_operation_fields.GAME_ROOM_CONFIG_ZJH_1.toString());
					break;
				case this._viewUI.img_room1:
					if (this._player.playerInfo.money < this._needMoney[1]) {
						this.showTipsBox(this._needMoney[1]);
						return;
					}
					this._game.sceneObjectMgr.intoStory(ZjhPageDef.GAME_NAME, Web_operation_fields.GAME_ROOM_CONFIG_ZJH_2.toString());
					break;
				case this._viewUI.img_room2:
					if (this._player.playerInfo.money < this._needMoney[2]) {
						this.showTipsBox(this._needMoney[2]);
						return;
					}
					this._game.sceneObjectMgr.intoStory(ZjhPageDef.GAME_NAME, Web_operation_fields.GAME_ROOM_CONFIG_ZJH_3.toString());
					break;
				case this._viewUI.img_room3:
					if (this._player.playerInfo.money < this._needMoney[3]) {
						this.showTipsBox(this._needMoney[3]);
						return;
					}
					this._game.sceneObjectMgr.intoStory(ZjhPageDef.GAME_NAME, Web_operation_fields.GAME_ROOM_CONFIG_ZJH_4.toString());
					break;
				default:
					break;
			}
		}

		private initPlayerInfo(): void {
			for (let index = 0; index < 4; index++) {
				this._viewUI["lab_least" + index].text = "底分: " + this._leastTmep[index];
				this._viewUI["lab_money" + index].text = "准入: " + this._needMoney[index];
			}
		}

		private showTipsBox(limit: number) {
			TongyongPageDef.ins.alertRecharge(StringU.substitute("老板，您的金币少于{0}哦~\n补充点金币去大杀四方吧~", limit), () => {
				this._game.uiRoot.general.open(DatingPageDef.PAGE_CHONGZHI);
			}, () => {
			}, false, PathGameTongyong.ui_tongyong_general + "btn_cz.png");
		}

		private chkPlayerIsGuest(): boolean {
			let result: boolean = false;
			if (this._player.playerInfo.isguest) {
				TongyongPageDef.ins.alertRecharge("亲爱的玩家，您正使用游客模式进行游戏，该模式下的游戏数据（包括付费数据）在删除游戏、更换设备后清空！对此造成的损失，本平台将不承担任何责任。为保障您的虚拟财产安全，我们强力建议您绑定手机号升级为正式账号。", () => {
					this._game.uiRoot.general.open(DatingPageDef.PAGE_BINDPHONE);
				}, () => {
				}, false, PathGameTongyong.ui_tongyong_general + "btn_qw.png");
				result = true;
			}
			return result;
		}

		public close(): void {
			if (this._viewUI) {
				this._viewUI.img_room0.off(LEvent.CLICK, this, this.onBtnClickWithTween);
				this._viewUI.img_room1.off(LEvent.CLICK, this, this.onBtnClickWithTween);
				this._viewUI.img_room2.off(LEvent.CLICK, this, this.onBtnClickWithTween);
				this._viewUI.img_room3.off(LEvent.CLICK, this, this.onBtnClickWithTween);
			}
			this._game.stopMusic();

			super.close();
		}
	}
}