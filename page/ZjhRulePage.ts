/**
* 炸金花-规则
*/
module gamezjh.page {
	const enum TYPE_INDEX {
		TYPE_WANFA_JIESHAO = 0,
		TYPE_CARD_TYPE = 1,
		TYPE_SETTLEMENT = 2,
	}

	export class ZjhRulePage extends game.gui.base.Page {
		private _viewUI: ui.ajqp.game_ui.zhajinhua.ZhaJinHua_GuiZeUI;
		constructor(v: Game, onOpenFunc?: Function, onCloseFunc?: Function) {
			super(v, onOpenFunc, onCloseFunc);
			this._isNeedBlack = true;
			this._isClickBlack = true;
			this._asset = [
				Path_game_zjh.atlas_game_ui + "zhajinhua.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "hud.atlas",
				PathGameTongyong.atlas_game_ui_tongyong_general + "anniu.atlas",
			];
		}

		// 页面初始化函数
		protected init(): void {
			this._viewUI = this.createView('game_ui.zhajinhua.ZhaJinHua_GuiZeUI');
			this.addChild(this._viewUI);

		}

		// 页面打开时执行函数
		protected onOpen(): void {
			super.onOpen();

			this._viewUI.lab_wanfa.vScrollBarSkin = "";
			this._viewUI.lab_wanfa.vScrollBar.autoHide = true;
			this._viewUI.lab_wanfa.vScrollBar.elasticDistance = 100;
			this._viewUI.lab_type.vScrollBarSkin = "";
			this._viewUI.lab_type.vScrollBar.autoHide = true;
			this._viewUI.lab_type.vScrollBar.elasticDistance = 100;
			this._viewUI.btn_tab.selectHandler = Handler.create(this, this.selectHandler, null, false);
			if (this.dataSource) {
				this._viewUI.btn_tab.selectedIndex = this.dataSource;
			}
			else {
				this._viewUI.btn_tab.selectedIndex = TYPE_INDEX.TYPE_WANFA_JIESHAO;
			}
		}

		private selectHandler(index: number): void {
			this._viewUI.lab_wanfa.visible = this._viewUI.btn_tab.selectedIndex == TYPE_INDEX.TYPE_WANFA_JIESHAO;
			this._viewUI.lab_type.visible = this._viewUI.btn_tab.selectedIndex == TYPE_INDEX.TYPE_CARD_TYPE;
			this._viewUI.lab_jiesuan.visible = this._viewUI.btn_tab.selectedIndex == TYPE_INDEX.TYPE_SETTLEMENT;
		}

		public close(): void {
			if (this._viewUI) {
				this._viewUI.btn_tab.selectedIndex = -1;
			}
			super.close();
		}
	}
}