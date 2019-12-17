/**
* name 
*/
module gamezjh.page {
	export class ZjhWinPage extends game.gui.base.Page {
		private _viewUI: ui.ajqp.game_ui.tongyong.effect.Effect_nylUI;

		constructor(v: Game, onOpenFunc?: Function, onCloseFunc?: Function) {
			super(v, onOpenFunc, onCloseFunc);
			this._asset = [
				PathGameTongyong.atlas_game_ui_tongyong + "nyl.atlas",
			];
		}

		// 页面初始化函数
		protected init(): void {
			this._viewUI = this.createView('game_ui.tongyong.effect.Effect_nylUI');
			this.addChild(this._viewUI);
		}

		// 页面打开时执行函数
		protected onOpen(): void {
			super.onOpen();
			this._viewUI.ani1.on(LEvent.COMPLETE, this, this.onPlayComplte);
			this._viewUI.ani1.play(0, false);
		}

		private onPlayComplte(): void {
			Laya.timer.once(1000, this, () => {
				this.close();
			})
		}

		public close(): void {
			if (this._viewUI) {
				this._viewUI.ani1.off(LEvent.COMPLETE, this, this.onPlayComplte);
			}
			Laya.timer.clearAll(this);
			super.close();
		}
	}
}