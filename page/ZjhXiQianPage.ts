/**
* 炸金花
*/
module gamezjh.page {
    export class ZjhXiQianPage extends ui.ajqp.game_ui.zhajinhua.component.XiQianUI {
        private _zjhMgr: ZjhMgr;
        constructor(val: number, ZjhMgr: ZjhMgr) {
            super();
            this.clip_num0.interval = 50;
            this.clip_num1.interval = 50;
            this.clip_num2.interval = 50;
            this.clip_num0.play();
            this.clip_num1.play();
            this.clip_num2.play();
            this._zjhMgr = ZjhMgr;
            this.updateUI(val);
        }

        //更新
        private updateUI(val: number): void {
            let val0 = Math.floor(val / 100);
            let val1 = Math.floor(val % 100 / 10);
            let val2 = val % 10;
            Laya.timer.once(1000, this, () => {
                this.clip_num0.index = val0;
                this.clip_num0.stop();
            })
            Laya.timer.once(1500, this, () => {
                this.clip_num1.index = val1;
                this.clip_num1.stop();
            });
            Laya.timer.once(2000, this, () => {
                this.clip_num2.index = val2;
                this.clip_num2.stop();
            });
            Laya.timer.once(3000, this, () => {
                this._zjhMgr.event(ZjhMgr.XIQIAN_END)
                this.close();
            })
        }


        public close(): void {
            Laya.timer.clearAll(this);
            this.removeSelf();
            this.destroy();
        }
    }
}