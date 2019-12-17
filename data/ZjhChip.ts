/**
* name 
*/
module gamezjh.data {
	export class ZjhChip extends gamecomponent.object.PlayingChip {
		constructor() {
			super();
		}

		private _chipPos = [[240, 650], [1200, 473], [1200, 276], [80, 276], [80, 473]];  //筹码位置
		private _PlayerIndex: number;
		setData(posId: number, type: number, value: number, index: number) {
			this.size = 0.5;
			this._PlayerIndex = posId;
			this._type = type;
			this.sortScore = -index;
			this._val = value.toString();
			this.rotateAngle = MathU.randomRange(0, 360);
		}

		sendChip() {
			let posX = MathU.randomPointInCicle(new Vector2(640, 320), 0, 210).x;
			let posY = MathU.randomPointInCicle(new Vector2(640, 320), 0, 60).y;
			this.pos = new Vector2(this._chipPos[this._PlayerIndex][0], this._chipPos[this._PlayerIndex][1]);
			if (!this.targe_pos) {
				this.targe_pos = new Vector2();
			}
			this.targe_pos.x = posX;
			this.targe_pos.y = posY;
			if (!this.pos) return;
			this.isUIShow = true;
			this.visible = true;
			Laya.Tween.to(this.pos, { x: this.targe_pos.x, y: this.targe_pos.y }, 300, Laya.Ease.circOut, Handler.create(this, () => {
				this.isUIShow = false;
			}));
		}

		flyChip(index: number) {
			if (!this.targe_pos) {
				this.targe_pos = new Vector2();
			}
			this.targe_pos.x = this._chipPos[index][0];
			this.targe_pos.y = this._chipPos[index][1];
			if (!this.pos) return;
			Laya.Tween.to(this.pos, { x: this.targe_pos.x, y: this.targe_pos.y }, 1000, Laya.Ease.circOut);
		}

		drawChip() {
			let posX = MathU.randomPointInCicle(new Vector2(640, 320), 0, 210).x;
			let posY = MathU.randomPointInCicle(new Vector2(640, 320), 0, 60).y;
			this.pos = new Vector2(this._chipPos[this._PlayerIndex][0], this._chipPos[this._PlayerIndex][1]);
			this.pos.x = posX;
			this.pos.y = posY;
		}
	}
}