/**
* 炸金花
*/
module gamezjh.page {
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
    //音效url
    const MUSIC_PATH = {
        bgMusic: "bgroom.mp3",
        win: "biwin.mp3",
        chip: "chouma.mp3",
        shouqian: "shouqian.mp3",
        bipai: "bpl_",
        genzhu: "genzhu_",
        guzhuyizhi: "guzhuyizhi_",
        jiazhu: "jiazhu_",
        kanpai: "kanpai_",
        qipai: "qipai_",
        PKMusic: "PK.mp3",
        bipaishu: "bipaishu.mp3",
    }

    export class ZjhMapPage extends game.gui.base.Page {
        private _viewUI: ui.nqp.game_ui.zhajinhua.ZhaJinHuaUI;
        private _chipTemp: any = [2, 3, 5, 7];  //加注筹码
        private _zjhMgr: ZjhMgr;
        private _isAuto: boolean = false;   //是否自动跟注
        private _isCompare: boolean = false;    //是否比牌
        private _isDeal: boolean = false;   //发牌结束
        private _mapInfo: ZjhMapInfo;
        private _posList: any = [0, 0, 0];  //比牌信息
        private _compareUnits: any = [];
        private _winnerPos: number = 0;     //胜利方
        private _totalTime: number; //操作倒计时总时间
        private _cardType: any = ["高牌", "对子", "顺子", "金花", "金花顺", "豹子", "特殊牌"];
        private _totalChip: any = [];
        private _headPos: any = [[188, 569], [1155, 390], [1159, 191], [18, 191], [18, 390]];
        private _showCards: any = [];   //就明牌用的
        private _battleIndex: number = -1;
        private _valueClip: ZjhClip;
        private _settleGold: number = 0;
        private _xiQian: any = [];    //喜钱
        private _zjhStory: ZjhStory;
        private _guZhuYiZhiTemp: any = [];  //孤注一掷比牌的信息
        private _isPlayGuZhuYiZhi: boolean = false; //是否在播孤注一掷动画
        private _endTime: number;   //倒计时时间
        private _xiQianList: { [key: string]: ZjhXiQianPage } = {};//喜钱动画
        private _xiQianPos: any = [[460, 180], [940, 315], [940, 120], [80, 120], [80, 315]];
        private _clipList: Array<ZjhClip> = [];//喜钱飘字
        private _isGiveUp: boolean = false; //是否弃牌
        private _needChip: any = {
            "1": [1, 20],  //新手
            "2": [5, 200],  //初级
            "3": [20, 500],   //中级
            "4": [50, 1000],  //高级
        };

        constructor(v: Game, onOpenFunc?: Function, onCloseFunc?: Function) {
            super(v, onOpenFunc, onCloseFunc);
            this._isNeedDuang = false;
            this._asset = [
                PathGameTongyong.atlas_game_ui_tongyong + "hud.atlas",
                Path_game_zjh.atlas_game_ui + "zhajinhua.atlas",
                Path_game_zjh.atlas_game_ui + "zhajinhua/effect/yanhua.atlas",
                PathGameTongyong.atlas_game_ui_tongyong + "general.atlas",
                PathGameTongyong.atlas_game_ui_tongyong + "touxiang.atlas",
                DatingPath.atlas_dating_ui + "qifu.atlas",
                PathGameTongyong.atlas_game_ui_tongyong + "dating.atlas",
                Path_game_zjh.atlas_game_ui + "zhajinhua/effect/btn.atlas",
                PathGameTongyong.atlas_game_ui_tongyong + "pai.atlas",
                Path_game_zjh.atlas_game_ui + "zhajinhua/effect/bipai.atlas",
                PathGameTongyong.atlas_game_ui_tongyong + "general/effect/fapai_1.atlas",
                PathGameTongyong.atlas_game_ui_tongyong + "general/effect/xipai.atlas",
                Path_game_zjh.music_zjh + "PK.mp3",
                Path_game_zjh.ui_zjh_sk + "zjh_0.png",
                Path_game_zjh.ui_zjh_sk + "zjh_1.png",
                Path_game_zjh.ui_zjh_sk + "zjh_2.png",
                Path_game_zjh.ui_zjh_sk + "zjh_3.png",
            ];
        }

        // 页面初始化函数
        protected init(): void {
            this._viewUI = this.createView('game_ui.zhajinhua.ZhaJinHuaUI');
            this.addChild(this._viewUI);
            if (!this._zjhMgr) {
                this._zjhStory = this._game.sceneObjectMgr.story as ZjhStory;
                this._zjhMgr = this._zjhStory.zjhMgr;
                this._zjhMgr.on(ZjhMgr.EVENT_CHECK, this, this.onAfterDealCards);
                this._zjhMgr.on(ZjhMgr.XIQIAN_END, this, this.addMoneyXiQian);
            }
            this._game.playMusic(Path_game_zjh.music_zjh + MUSIC_PATH.bgMusic);
            this.initClip();
            this._viewUI.btn_menu.left = this._game.isFullScreen ? 30 : 10;
            this._viewUI.img_menu.left = this._game.isFullScreen ? 25 : 10;
        }

        //跟注数值
        private _gzClip: ZjhClip;
        //比牌数值
        private _bpClip: ZjhClip;
        private initClip(): void {
            if (!this._gzClip) {
                this._gzClip = new ZjhClip(ZjhClip.MAP_NUM_FONT);
                this._gzClip.centerX = this._viewUI.clip_gz.centerX;
                this._gzClip.centerY = this._viewUI.clip_gz.centerY;
                this._viewUI.clip_gz.parent.addChild(this._gzClip);
                this._viewUI.clip_gz.visible = false;
            }
            if (!this._bpClip) {
                this._bpClip = new ZjhClip(ZjhClip.MAP_NUM_FONT);
                this._bpClip.centerX = this._viewUI.cip_bp.centerX;
                this._bpClip.centerY = this._viewUI.cip_bp.centerY;
                this._viewUI.cip_bp.parent.addChild(this._bpClip);
                this._viewUI.cip_bp.visible = false;
            }
        }
        private clearClip(): void {
            if (this._gzClip) {
                this._gzClip.removeSelf();
                this._gzClip.destroy();
                this._gzClip = null;
            }
            if (this._bpClip) {
                this._bpClip.removeSelf();
                this._bpClip.destroy();
                this._bpClip = null;
            }
        }

        // 页面打开时执行函数
        protected onOpen(): void {
            super.onOpen();
            this.hiddenViews();
            this.onUpdateUnitOffline();
            if (!this._zjhMgr.isReLogin) {
                this._game.uiRoot.general.open(TongyongPageDef.PAGE_TONGYONG_MATCH, null, (page) => {
                    this._viewUI.btn_continue.visible = page.dataSource;
                });
            }
            else {
                this.onUpdateMap();
            }

            this._viewUI.btn_menu.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.btn_add.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.box_see.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.btn_closen.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.btn_giveup.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.btn_compare.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.btn_call.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.btn_auto.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.btn_continue.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.btn_rules.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.btn_cardtype.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.btn_xiqian.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.btn_set.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.btn_qifu.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.btn_record.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            // this._viewUI.view_compare.on(LEvent.CLICK, this, () => { });
            // this._viewUI.view_guzhu.on(LEvent.CLICK, this, () => { });
            for (let i = 0; i < 4; i++) {
                this._viewUI["btn_chip" + i] && this._viewUI["btn_chip" + i].on(LEvent.CLICK, this, this.onBtnChipClick, [i]);
                let index = i + 1;
                this._viewUI["view_player" + index] && this._viewUI["view_player" + index].on(LEvent.CLICK, this, this.onBtnCompareClick, [i + 1]);
            }

            this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_MAPINFO_CHANGE, this, this.onUpdateMap);
            this._game.sceneObjectMgr.on(ZjhMapInfo.EVENT_ZJH_STATUS_CHECK, this, this.updateMapInfo);
            this._game.sceneObjectMgr.on(ZjhMapInfo.EVENT_ZJH_BATTLE_CHECK, this, this.updateBattledInfo);
            this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_ADD_UNIT, this, this.onUnitAdd);
            this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_REMOVE_UNIT, this, this.onUnitRemove);
            this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_UNIT_MONEY_CHANGE, this, this.onUpdateUnit);
            this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_UNIT_CHANGE, this, this.onUpdateUnit);
            this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_UNIT_ACTION, this, this.onUpdateUnit);
            this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_UNIT_QIFU_TIME_CHANGE, this, this.onUpdateUnit);
            this._game.qifuMgr.on(QiFuMgr.QIFU_FLY, this, this.qifuFly);

        }

        protected onBtnTweenEnd(e: LEvent, target: any) {
            if (target != this._viewUI.btn_compare) {
                this._isCompare = false;
                for (let i = 1; i < 5; i++) {
                    this._viewUI["view_player" + i].view_arrow.visible = false;
                }
            }
            if (target != this._viewUI.btn_add)
                this._viewUI.img_choose.visible = false;
            switch (target) {
                case this._viewUI.btn_menu://菜单
                    this._viewUI.img_menu.visible = true;
                    this._viewUI.btn_menu.visible = false;
                    break;
                case this._viewUI.btn_add://加注
                    this._viewUI.img_choose.visible = !this._viewUI.img_choose.visible;
                    break;
                case this._viewUI.box_see://看牌
                    this._game.network.call_zhajinhua_see_card();
                    break;
                case this._viewUI.btn_closen://返回
                    if (this._game.sceneObjectMgr.mapInfo instanceof MapInfo) {
                        let mainUnit: Unit = this._game.sceneObjectMgr.mainUnit;
                        if (!mainUnit.IsGiveUp() && !mainUnit.IsIsDefeated() && this._game.sceneObjectMgr.mapInfo.GetPlayState() == 1) {
                            this._game.showTips("游戏尚未结束，请先打完这局哦~");
                            return;
                        }
                    }
                    if (this._valueClip) {
                        this._valueClip.removeSelf();
                        this._valueClip.destroy(true);
                        this._valueClip = null;
                    }
                    this.clearListen();
                    this.clearXiQian();
                    this._zjhMgr.clear();
                    this._zjhStory.clear();
                    this._game.sceneObjectMgr.leaveStory(true);
                    break;
                case this._viewUI.btn_giveup://弃牌
                    this._game.network.call_zhajinhua_give_up();
                    break;
                case this._viewUI.btn_compare://比牌
                    this.onBtnCompare();
                    break;
                case this._viewUI.btn_call://跟注
                    this._game.network.call_zhajinhua_call();
                    break;
                case this._viewUI.btn_auto://自动跟注
                    this.onBtnAutoCall();
                    break;
                case this._viewUI.btn_continue://继续游戏
                    //钱够不够
                    if (this._game.sceneObjectMgr.mainPlayer.playerInfo.money >= this._needChip[this._zjhStory.mapLv][1]) {
                        if (this._game.sceneObjectMgr.mapInfo instanceof MapInfo) {
                            if (this._valueClip) {
                                this._valueClip.removeSelf();
                                this._valueClip.destroy(true);
                                this._valueClip = null;
                            }
                            this.resetData();
                            this.hiddenViews();
                            this.clearXiQian();
                            this._zjhMgr.clear();
                            // this._zjhStory.removeListen();
                            this._game.sceneObjectMgr.leaveStory();
                        } else {
                            this._game.uiRoot.general.open(TongyongPageDef.PAGE_TONGYONG_MATCH, null, (page) => {
                                this._viewUI.btn_continue.visible = page.dataSource;
                            });
                        }
                    } else {
                        this.onNotEnoughMoney();
                    }
                    break;
                case this._viewUI.btn_rules://规则
                    this._game.uiRoot.general.open(ZjhPageDef.PAGE_ZHAJINHUA_RULE);
                    break;
                case this._viewUI.btn_cardtype://牌型
                    this._game.uiRoot.general.open(ZjhPageDef.PAGE_ZHAJINHUA_RULE, (page: ZjhRulePage) => {
                        page.dataSource = 1;
                    });
                    break;
                case this._viewUI.btn_xiqian://喜钱
                    this._viewUI.img_xiqian.visible = !this._viewUI.img_xiqian.visible;
                    break;
                case this._viewUI.btn_set://设置
                    this._game.uiRoot.general.open(TongyongPageDef.PAGE_TONGYONG_SETTING);
                    break;
                case this._viewUI.btn_qifu://祈福
                    this._game.uiRoot.general.open(DatingPageDef.PAGE_QIFU);
                    break;
                case this._viewUI.btn_record://战绩
                    this._game.uiRoot.general.open(TongyongPageDef.PAGE_TONGYONG_RECORD, (page) => {
                        page.dataSource = ZjhPageDef.GAME_NAME;
                    });
                    break;
                default:
                    break;
            }
        }

        //只是为了隐藏菜单
        protected onMouseClick(e: LEvent) {
            if (e.currentTarget != this._viewUI.btn_menu) {
                this._viewUI.img_menu.visible = false;
                this._viewUI.btn_menu.visible = true;
            }
        }

        //加注
        private onBtnChipClick(index: number, e: LEvent): void {
            this._game.network.call_zhajinhua_filling(this._chipTemp[index])
            this._viewUI.img_choose.visible = false;
        }

        //自动跟注按钮
        private onBtnAutoCall(): void {
            if (!this._mapInfo) return;
            this._isAuto = !this._isAuto;
            if (this._isAuto) {
                Laya.timer.loop(1000, this, this.autoCall);
                this._viewUI.img_auto.skin = Path_game_zjh.ui_zjh + "tu_qxgz.png"; //"取消跟注";
                this._viewUI.img_ani1.visible = true;
                this._viewUI.ani1.play(1, true)
            }
            else {
                this._viewUI.img_ani1.visible = false;
                this._viewUI.ani1.gotoAndStop(0);
                Laya.timer.clear(this, this.autoCall);
                this._viewUI.img_auto.skin = Path_game_zjh.ui_zjh + "tu_zdgz.png"//"自动跟注";
                //防一下，就怕到你的瞬间，点了取消自动跟注
                if (this._game.sceneObjectMgr.mainUnit.GetIndex() == this._mapInfo.GetCurrentBetPos()) {
                    this._viewUI.btn_compare.visible = true;
                    this._viewUI.btn_call.visible = true;
                    this._viewUI.btn_add.visible = true;
                }
            }
        }

        //自动跟注定时器
        private autoCall(): void {
            if (!this._mapInfo) return;
            if (!this._mapInfo.GetPlayState()) {//游戏结算完要干掉定时器啦！
                Laya.timer.clear(this, this.autoCall);
                return;
            }
            let betPos = this._mapInfo.GetCurrentBetPos();
            let idx = this._game.sceneObjectMgr.mainUnit.GetIndex();
            if (!this._game.sceneObjectMgr.mainPlayer) return;
            if (idx == betPos) {
                //钱够不够
                let needMoney = this._mapInfo.GetCurChip()
                if (this._game.sceneObjectMgr.mainUnit.IsSeeCard())
                    needMoney = needMoney * 2
                if (this._game.sceneObjectMgr.mainPlayer.playerInfo.money >= needMoney) {
                    this._game.network.call_zhajinhua_call();
                } else {
                    this.onBtnCompare();
                }
            }
        }

        //比牌按钮
        private onBtnCompare(): void {
            let idx = this._game.sceneObjectMgr.mainUnit.GetIndex();
            let count = 0;
            let targetPos = 0;
            if (!this._game.sceneObjectMgr.mainPlayer) return;
            for (let i = 1; i < 5; i++) {
                let pos = (idx + i) % 5 == 0 ? 5 : (idx + i) % 5;
                let unit = this._game.sceneObjectMgr.getUnitByIdx(pos);
                if (unit) {
                    if (!unit.IsGiveUp() && !unit.IsIsDefeated() && unit.IsReady()) {
                        count++;
                        targetPos = pos;
                    }
                }
            }
            if (count > 1) {
                let needMoney = this._mapInfo.GetCurChip()
                if (this._game.sceneObjectMgr.mainUnit.IsSeeCard())
                    needMoney = needMoney * 2
                if (this._game.sceneObjectMgr.mainPlayer.playerInfo.money >= needMoney) {
                    this._isCompare = true;
                    for (let i = 1; i < 5; i++) {
                        let pos = (idx + i) % 5 == 0 ? 5 : (idx + i) % 5;
                        let unit = this._game.sceneObjectMgr.getUnitByIdx(pos);
                        if (unit) {
                            if (!unit.IsGiveUp() && !unit.IsIsDefeated() && unit.IsReady())
                                this._viewUI["view_player" + i].view_arrow.visible = !this._viewUI["view_player" + i].view_arrow.visible;
                        }
                    }
                } else {
                    this._game.network.call_zhajinhua_compare(targetPos);
                }
            }
            else if (count == 1) {
                this._game.network.call_zhajinhua_compare(targetPos);
            }
        }

        //比牌飘头像
        private flyHead(): void {
            let idx = this._game.sceneObjectMgr.mainUnit.GetIndex();
            let posIdx1 = (this._posList[0] - idx + 5) % 5;
            let posIdx2 = (this._posList[1] - idx + 5) % 5;
            Laya.Tween.to(this._viewUI["view_head" + posIdx1], { x: 398, y: 249 }, 300);
            Laya.Tween.to(this._viewUI["view_head" + posIdx2], { x: 793, y: 310 }, 300, null, Handler.create(this, this.openComparePage));
        }

        //比牌动画结束
        private compareAniStop(): void {
            this._viewUI.view_bipai1.visible = true;
            this._viewUI.view_bipai1.ani1.play(1, false);
            this._viewUI.view_compare.ani1.stop();
            this._viewUI.view_pk.ani1.stop();
        }

        private bipai1AniStop(): void {
            this._viewUI.view_bipai1.visible = false;
            if (this._posList[2] == this._posList[0]) {
                this._viewUI.view_effect1.visible = true;
                this._viewUI.view_effect1.ani1.play(1, false);
            } else if (this._posList[2] == this._posList[1]) {
                this._viewUI.view_effect0.visible = true;
                this._viewUI.view_effect0.ani1.play(1, false);
            }
            this._viewUI.view_bipai1.ani1.stop();
        }

        private updateViewWin(): void {
            if (this._posList[2] == this._posList[0]) {
                this._viewUI.view_compare.view_win0.img_win.visible = true;
                this._viewUI.view_compare.view_win0.ani1.play(1, false);
                this._viewUI.view_compare.box_card1.disabled = true;
            } else if (this._posList[2] == this._posList[1]) {
                this._viewUI.view_compare.view_win1.img_win.visible = true;
                this._viewUI.view_compare.view_win1.ani1.play(1, false);
                this._viewUI.view_compare.box_card0.disabled = true;
            }
            this._viewUI.view_effect0.ani1.stop();
            this._viewUI.view_effect1.ani1.stop();
        }

        //头像归位
        private headPlace(): void {
            this._viewUI.view_compare.visible = false;
            this._viewUI.view_pk.visible = false;
            let idx = this._game.sceneObjectMgr.mainUnit.GetIndex();
            let posIdx1 = (this._posList[0] - idx + 5) % 5; //比
            let posIdx2 = (this._posList[1] - idx + 5) % 5; //被比
            let posIdx3 = this._posList[2] == this._posList[1] ? posIdx1 : posIdx2; //输
            Laya.Tween.to(this._viewUI["view_head" + posIdx1], { x: this._headPos[posIdx1][0], y: this._headPos[posIdx1][1] }, 300);
            Laya.Tween.to(this._viewUI["view_head" + posIdx2], { x: this._headPos[posIdx2][0], y: this._headPos[posIdx2][1] }, 300);
            if (posIdx3 == 0) {
                this._zjhMgr.fanpai();
                this._viewUI.box_see.visible = false;
                this._viewUI.btn_giveup.visible = false;
                this._viewUI.btn_auto.visible = false;
                this._viewUI.btn_call.visible = false;
                this._viewUI.btn_add.visible = false;
                this._viewUI.img_type.visible = true;
                let mPlayer = this._game.sceneObjectMgr.mainPlayer;
                if (mPlayer) {
                    let val = mPlayer.playerInfo.cards;
                    let cardType = this._zjhMgr.checkCardsType(val);
                    this._viewUI.text_type.text = this._cardType[cardType]
                }
                this._viewUI.btn_continue.visible = true;
                this.onNotEnoughMoney();
            }
            this._viewUI["box_opt" + posIdx3].visible = true;
            this._viewUI["text_opt" + posIdx3].text = "比牌失败";
            let unitIdx = this._posList[2] == this._posList[1] ? this._posList[0] : this._posList[1]; //输
            let unit = this._game.sceneObjectMgr.getUnitByIdx(unitIdx);
            if (unit) {
                this._zjhMgr.setDisabled(true, unit);
            }
        }

        //打开比牌界面
        private openComparePage(): void {
            this._game.playSound(Path_game_zjh.music_zjh + MUSIC_PATH.PKMusic, false);
            this._viewUI.view_compare.visible = true;
            this._viewUI.view_compare.mouseEnabled = false;
            this._viewUI.view_pk.visible = true;
            this._viewUI.view_compare.view_win0.img_win.visible = false;
            this._viewUI.view_compare.view_win1.img_win.visible = false;
            this._viewUI.view_compare.box_card0.disabled = false;
            this._viewUI.view_compare.box_card1.disabled = false;
            this._viewUI.view_compare.ani1.play(1, false);
            this._viewUI.view_pk.ani1.play(1, false);
        }

        //比牌
        private onBtnCompareClick(index: number, e: LEvent): void {
            if (this._isCompare) {
                let idx = this._game.sceneObjectMgr.mainUnit.GetIndex();
                let pos = (idx + index) % 5 == 0 ? 5 : (idx + index) % 5;
                let unit = this._game.sceneObjectMgr.getUnitByIdx(pos);
                if (unit.IsGiveUp())
                    return
                if (unit.IsIsDefeated())
                    return
                if (!unit.IsReady())
                    return
                this._game.network.call_zhajinhua_compare(pos);
                for (let i = 1; i < 5; i++) {
                    this._viewUI["view_player" + i].view_arrow.visible = false;
                }
                this._isCompare = false;
            }
        }

        private onUnitAdd(u: Unit): void {
            this.onUpdateUnit();
        }

        //玩家出去了
        private onUnitRemove(u: Unit) {
            this.onUpdateUnit();
            //游戏结束了，清除筹码
            if (!this._mapInfo) return;
            if (this._mapInfo.GetMapState() == MAP_STATUS.MAP_STATE_SHOW)
                this._zjhMgr.clearCardObject();
        }

        private onUpdateUnit(qifu_index?: number): void {
            if (!this._mapInfo) return;
            let mainUnit = this._game.sceneObjectMgr.mainUnit;
            //主玩家的座位
            if (!mainUnit) return;
            let idx = mainUnit.GetIndex();
            let betPos = this._mapInfo.GetCurrentBetPos();
            let max = 5;
            for (let index = 0; index < max; index++) {
                let posIdx = (idx + index) % max == 0 ? 5 : (idx + index) % max;
                let unit = this._game.sceneObjectMgr.getUnitByIdx(posIdx)
                this._viewUI["view_head" + index].visible = unit;
                if (unit) {
                    let name = getMainPlayerName(unit.GetName());
                    this._viewUI["view_head" + index].txt_name.text = name;
                    let money = EnumToString.getPointBackNum(unit.GetMoney(), 2);
                    this._viewUI["view_head" + index].txt_money.text = money;
                    this._viewUI["text_total" + index].text = unit.GetTotalChip().toString();
                    //头像框
                    this._viewUI["view_head" + index].img_txk.visible = unit.GetVipLevel() > 0;
                    if (this._viewUI["view_head" + index].img_txk.visible) {
                        this._viewUI["view_head" + index].img_txk.skin = PathGameTongyong.ui_tongyong_touxiang + "tu_v" + unit.GetVipLevel() + ".png";
                    }
                    //祈福成功 头像上就有动画
                    if (qifu_index && posIdx == qifu_index) {
                        this._viewUI["view_head" + index].qifu_type.visible = true;
                        this._viewUI["view_head" + index].qifu_type.skin = this._qifuTypeImgUrl;
                        this.playTween(this._viewUI["view_head" + index].qifu_type, qifu_index);
                    }
                    //时间戳变化 才加上祈福标志
                    if (unit.GetQiFuEndTime() > this._game.sync.serverTimeBys) {
                        if (qifu_index && posIdx == qifu_index) {
                            Laya.timer.once(2500, this, () => {
                                this._viewUI["view_head" + index].img_qifu.visible = true;
                                if (this._viewUI["view_head" + index].img_qifu.visible && unit.GetQiFuType()) {
                                    this._viewUI["view_head" + index].img_icon.skin = PathGameTongyong.ui_tongyong_touxiang + "head_" + this._nameStrInfo[unit.GetQiFuType() - 1] + ".png";
                                }
                            })
                        } else {
                            this._viewUI["view_head" + index].img_qifu.visible = true;
                            if (this._viewUI["view_head" + index].img_qifu.visible && unit.GetQiFuType()) {
                                this._viewUI["view_head" + index].img_icon.skin = PathGameTongyong.ui_tongyong_touxiang + "head_" + this._nameStrInfo[unit.GetQiFuType() - 1] + ".png";
                            }
                        }
                    } else {
                        this._viewUI["view_head" + index].img_qifu.visible = false;
                        this._viewUI["view_head" + index].img_icon.skin = PathGameTongyong.ui_tongyong_touxiang + "head_" + unit.GetHeadImg() + ".png";
                    }
                }
                if (index >= 1) {
                    //最后一个阶段，就不用隐藏了
                    if (this._mapInfo.GetMapState() != MAP_STATUS.MAP_STATE_SHOW) {
                        this._viewUI["view_player" + index].visible = unit;
                        if (unit) {
                            this._viewUI["view_player" + index].img_frame.visible = false;
                            this._viewUI["view_player" + index].view_arrow.visible = false;
                        }
                    }
                }
            }
        }

        private _diff: number = 500;
        private _timeList: { [key: number]: number } = {};
        private _firstList: { [key: number]: number } = {};
        private playTween(img: LImage, index: number, isTween?: boolean) {
            if (!img) return;
            if (!this._timeList[index]) {
                this._timeList[index] = 0;
            }
            if (this._timeList[index] >= 2500) {
                this._timeList[index] = 0;
                this._firstList[index] = 0;
                img.visible = false;
                return;
            }
            Laya.Tween.to(img, { alpha: isTween ? 1 : 0.2 }, this._diff, Laya.Ease.linearNone, Handler.create(this, this.playTween, [img, index, !isTween]), this._firstList[index] ? this._diff : 0);
            this._timeList[index] += this._diff;
            this._firstList[index] = 1;
        }


        private _nameStrInfo: string[] = ["xs", "px", "gsy", "gg", "cs", "tdg"];
        private _qifuTypeImgUrl: string;
        private qifuFly(dataSource: any): void {
            if (!dataSource) return;
            let dataInfo = dataSource;
            this._game.qifuMgr.showFlayAni(this._viewUI.view_head0, this._viewUI, dataSource, (dataInfo) => {
                //相对应的玩家精灵做出反应
                this._qifuTypeImgUrl = StringU.substitute(PathGameTongyong.ui_tongyong_touxiang + "f_{0}2.png", this._nameStrInfo[dataInfo.qf_id - 1]);
                this.onUpdateUnit(dataInfo.qifu_index);
            });
        }

        //地图监听
        private onUpdateMap(): void {
            let mapInfo = this._game.sceneObjectMgr.mapInfo;
            this._mapInfo = mapInfo as ZjhMapInfo;
            if (mapInfo) {
                this._viewUI.view_compare.ani1.on(LEvent.COMPLETE, this, this.compareAniStop);
                this._viewUI.view_bipai1.ani1.on(LEvent.COMPLETE, this, this.bipai1AniStop);
                this._viewUI.view_compare.view_win0.ani1.on(LEvent.COMPLETE, this, this.headPlace);
                this._viewUI.view_compare.view_win1.ani1.on(LEvent.COMPLETE, this, this.headPlace);
                this._viewUI.view_effect0.ani1.on(LEvent.COMPLETE, this, this.updateViewWin);
                this._viewUI.view_effect1.ani1.on(LEvent.COMPLETE, this, this.updateViewWin);
                this._viewUI.view_xipai.ani_xipai.on(LEvent.COMPLETE, this, this.afterShuffleCards);
                for (let index = 0; index < 5; index++) {
                    this._viewUI["view_shu" + index].ani1.on(LEvent.COMPLETE, this, this.headPlace, [index]);
                }
                if (this._zjhMgr.isReLogin) {
                    this._zjhStory.mapLv = this._mapInfo.GetMapLevel();
                    this.loginAgainInit();
                }
                this._viewUI.btn_continue.visible = false;
                this._zjhStory.isGiveUp = false;
                this.initView();
                this.updateMapInfo();
                this.updateBattledInfo();
                this._zjhMgr.isReLogin = false;
            } else {
                this.onUpdateUnitOffline();
                this.resetData();
                this.hiddenViews();
                this.clearXiQian();
                this._zjhMgr.clear();
                this._game.uiRoot.general.open(TongyongPageDef.PAGE_TONGYONG_MATCH, null, (page) => {
                    this._viewUI.btn_continue.visible = page.dataSource;
                });
                this._zjhStory.isGiveUp = false;
                this._viewUI.btn_continue.visible = false;
            }
        }

        private onUpdateUnitOffline() {
            if (!this._zjhMgr.unitOffline) return;
            let unitOffline = this._zjhMgr.unitOffline;
            let mPlayer = this._game.sceneObjectMgr.mainPlayer;
            if (unitOffline) {
                this._viewUI.view_head0.visible = true;
                let money;
                if (mPlayer) {
                    if (!mPlayer.playerInfo) return;
                    money = mPlayer.playerInfo.money;
                    this._viewUI.view_head0.txt_name.text = getMainPlayerName(mPlayer.playerInfo.nickname);
                    this._viewUI.view_head0.img_icon.skin = PathGameTongyong.ui_tongyong_touxiang + "head_" + mPlayer.playerInfo.headimg + ".png";
                    this._viewUI.view_head0.img_qifu.visible = mPlayer.playerInfo.qifu_endtime > this._game.sync.serverTimeBys;
                    if (this._viewUI.view_head0.img_qifu.visible && mPlayer.playerInfo.qifu_type) {
                        this._viewUI.view_head0.img_icon.skin = PathGameTongyong.ui_tongyong_touxiang + "head_" + this._nameStrInfo[mPlayer.playerInfo.qifu_type - 1] + ".png";
                    }
                    //头像框
                    this._viewUI.view_head0.img_txk.visible = mPlayer.playerInfo.vip_level > 0;
                    if (this._viewUI.view_head0.img_txk.visible) {
                        this._viewUI.view_head0.img_txk.skin = PathGameTongyong.ui_tongyong_touxiang + "tu_v" + mPlayer.playerInfo.vip_level + ".png";
                    }
                } else {
                    money = unitOffline.GetMoney();
                    this._viewUI.view_head0.txt_name.text = getMainPlayerName(unitOffline.GetName());
                    this._viewUI.view_head0.img_icon.skin = PathGameTongyong.ui_tongyong_touxiang + "head_" + unitOffline.GetHeadImg() + ".png";
                    this._viewUI.view_head0.img_qifu.visible = unitOffline.GetQiFuEndTime() > this._game.sync.serverTimeBys;
                    if (this._viewUI.view_head0.img_qifu.visible && unitOffline.GetQiFuType()) {
                        this._viewUI.view_head0.img_icon.skin = PathGameTongyong.ui_tongyong_touxiang + "head_" + this._nameStrInfo[unitOffline.GetQiFuType() - 1] + ".png";
                    }
                    //头像框
                    this._viewUI.view_head0.img_txk.visible = unitOffline.GetVipLevel() > 0;
                    if (this._viewUI.view_head0.img_txk.visible) {
                        this._viewUI.view_head0.img_txk.skin = PathGameTongyong.ui_tongyong_touxiang + "tu_v" + unitOffline.GetVipLevel() + ".png";
                    }
                }
                money = EnumToString.getPointBackNum(money, 2);
                this._viewUI.view_head0.txt_money.text = money.toString();
            }
        }

        //发完牌了，显示看牌按钮还有发筹码
        private onAfterDealCards(): void {
            if (!this._mapInfo) return;
            let idx = this._game.sceneObjectMgr.mainUnit.GetIndex();
            for (let i = 1; i < 6; i++) {
                let unit = this._game.sceneObjectMgr.getUnitByIdx(i)
                if (unit) {
                    let posIdx = (i - idx + 5) % 5;
                    this.createObj(posIdx, 0, this._needChip[this._zjhStory.mapLv][0], i - 1);
                    this._game.playSound(Path_game_zjh.music_zjh + MUSIC_PATH.chip, false);
                }
            }
            for (let index = 0; index < 5; index++) {
                let posIdx = (idx + index) % 5 == 0 ? 5 : (idx + index) % 5;
                let unit = this._game.sceneObjectMgr.getUnitByIdx(posIdx)
                if (unit)
                    this._viewUI["box_chip" + index].visible = true;
            }

            if (!this._game.sceneObjectMgr.mainUnit.IsSeeCard()) {
                if (!this._game.sceneObjectMgr.mainUnit.IsGiveUp())
                    this._viewUI.box_see.visible = true;
            }
            this._zjhMgr.cardIndex = 0;
            this._isDeal = true;
            let betPos = this._mapInfo.GetCurrentBetPos();
            this._viewUI.btn_giveup.visible = true;
            this._viewUI.view_paihe.ani2.gotoAndStop(0);
            if (idx == betPos) {
                this._viewUI.btn_add.visible = true;
                this._viewUI.btn_call.visible = true;
                if (this._mapInfo.GetRound() < 2) {
                    this._viewUI.btn_compare.visible = false;
                } else {
                    this._viewUI.btn_compare.visible = true;
                }
            } else {
                this._viewUI.btn_auto.visible = true;
            }
        }

        private updateMapInfo(): void {
            if (!this._mapInfo) return;
            let mainUint = this._game.sceneObjectMgr.mainUnit;
            if (!mainUint) return;
            this._viewUI.text_money.text = this._mapInfo.GetJackpot().toString();
            let round = this._mapInfo.GetRound() > 20 ? 20 : this._mapInfo.GetRound();
            this._viewUI.text_round.text = round + "/20轮";
            //比牌加注按钮
            let curBet = this._mapInfo.GetCurChip();
            this._viewUI.img_compare.x = 56;
            this._bpClip.visible = false;
            this._viewUI.img_call.x = 59;
            this._gzClip.visible = false;
            if (curBet > 0) {
                if (mainUint.IsSeeCard()) {
                    curBet = curBet * 2
                }
                this._bpClip.visible = true;
                this._bpClip.setText(curBet.toString(), true);
                this._viewUI.img_compare.x = 86;
                this._gzClip.visible = true;
                this._gzClip.setText(curBet.toString(), true);
                this._viewUI.img_call.x = 86;
                if (this._game.sceneObjectMgr.mainUnit.GetMoney() < curBet) {
                    this._viewUI.btn_call.disabled = true;
                    this._viewUI.btn_add.disabled = true;
                }
            }
            if (this._zjhStory.mapLv) {
                for (let i = 0; i < 4; i++) {
                    this._viewUI["btn_chip" + i].disabled = false;
                    if (this._mapInfo.GetCurChip() >= this._needChip[this._zjhStory.mapLv][0] * this._chipTemp[i]) {
                        this._viewUI["btn_chip" + i].disabled = true;
                    }
                }
                if (this._mapInfo.GetCurChip() >= this._needChip[this._zjhStory.mapLv][0] * this._chipTemp[this._chipTemp.length - 1]) {
                    this._viewUI.btn_add.disabled = true;
                }
            }
            if (!this._isAuto)
                this._viewUI.img_ani1.visible = false;
            this.updateMapUI();
        }

        //根据地图状态刷新界面
        private updateMapUI(): void {
            if (!this._mapInfo) return;
            let idx = this._game.sceneObjectMgr.mainUnit.GetIndex();
            let betPos = this._mapInfo.GetCurrentBetPos();
            let statue = this._mapInfo.GetMapState();
            this.initView();
            if (!this._game.sceneObjectMgr.mainUnit.IsIsDefeated() && !this._game.sceneObjectMgr.mainUnit.IsGiveUp() && !this._isGiveUp) {
                this._viewUI.btn_continue.visible = false;
            }
            if (statue == MAP_STATUS.MAP_STATE_SHUFFLE) {
                this._viewUI.view_xipai.visible = true;
                this._viewUI.view_xipai.ani_xipai.play(1, false);
            } else {
                this._viewUI.view_xipai.visible = false;
                this._viewUI.view_xipai.ani_xipai.stop();
            }
            if (statue == MAP_STATUS.MAP_STATE_CARD) {
                this._viewUI.text_info.text = "牌局号：" + this._mapInfo.GetGameNo();
                this._viewUI.text_info.visible = true;
                this._viewUI.text_roomtype.visible = true;
                this._viewUI.text_maxchip.visible = true;
                this._viewUI.view_paihe.ani2.play(0, true);
            }
            if (statue > MAP_STATUS.MAP_STATE_CARD) {
                if (!this._game.sceneObjectMgr.mainUnit.IsGiveUp() && !this._game.sceneObjectMgr.mainUnit.IsIsDefeated() && this._isDeal && !this._isGiveUp) {
                    this._viewUI.btn_giveup.visible = true;
                    if (idx != betPos) {
                        this._viewUI.btn_auto.visible = true;
                        this._viewUI.btn_add.visible = false;
                        this._viewUI.btn_call.visible = false;
                        this._viewUI.btn_compare.visible = false;
                    } else {
                        this._viewUI.btn_add.visible = true;
                        this._viewUI.btn_call.visible = true;
                        this._viewUI.btn_auto.visible = false;
                        if (this._mapInfo.GetRound() < 2) {
                            this._viewUI.btn_compare.visible = false;
                        } else {
                            this._viewUI.btn_compare.visible = true;
                        }
                    }
                }
            }
            if (statue == MAP_STATUS.MAP_STATE_BEGIN) {
                for (let index = 0; index < 5; index++) {
                    this._viewUI["view_head" + index].img_frame.visible = false;
                }
                let posIdx = (betPos - idx + 5) % 5
                this._viewUI["view_head" + posIdx].img_frame.visible = true;
                let now_time = this._game.sync.serverTimeBys * 1000;
                this._endTime = this._mapInfo.GetCountDown() * 1000;
                this._totalTime = this._endTime - now_time;
                if (this._isGiveUp && this._viewUI.btn_giveup.visible) {//异常（已弃牌但是弃牌按钮还在）
                    this.updateBattledInfo();//跑一下战斗日志刷新UI
                }
            }
            if (statue >= MAP_STATUS.MAP_STATE_COMPARE) {
                for (let index = 0; index < 5; index++) {
                    this._viewUI["view_head" + index].img_frame.visible = false;
                }
                this._viewUI.btn_add.visible = false;
                this._viewUI.btn_call.visible = false;
                this._viewUI.btn_auto.visible = false;
                this._viewUI.btn_compare.visible = false;
                this._viewUI.btn_giveup.visible = false;
            }
            if (statue == MAP_STATUS.MAP_STATE_SHOW) {
                this._viewUI.box_see.visible = false;
                this._viewUI.img_type.visible = true;
                let mPlayer = this._game.sceneObjectMgr.mainPlayer;
                if (mPlayer) {
                    let val = mPlayer.playerInfo.cards;
                    let cardType = this._zjhMgr.checkCardsType(val);
                    this._viewUI.text_type.text = this._cardType[cardType]
                }
                Laya.timer.once(500, this, () => {
                    for (let i = 0; i < this._showCards.length; i++) {
                        let pos = this._showCards[i].id;
                        this._zjhMgr.showCard(this._showCards[i].cards, pos);
                    }
                    if (idx == this._winnerPos) {
                        this._viewUI.view_win.visible = true;
                        this._viewUI.view_win.ani1.play(1, false);
                        this._game.playSound(Path_game_zjh.music_zjh + MUSIC_PATH.win, false);
                    }
                    for (let index = 1; index < 5; index++) {
                        let posIdx = (idx + index) % 5 == 0 ? 5 : (idx + index) % 5;
                        if (posIdx == this._winnerPos)
                            this._viewUI["view_player" + index].img_frame.visible = true;
                        this._viewUI["view_player" + index].img_frame.ani1.play(1, false);
                    }
                    this.flyChipEffect();
                    if (this._settleGold != 0) {
                        let pos = (this._winnerPos - idx + 5) % 5;
                        this.addMoneyClip(this._settleGold);
                    }
                    this._viewUI.btn_continue.visible = true;
                    if (this._xiQian.length > 0) {
                        for (let k = 0; k < this._xiQian.length; k++) {
                            this.addXiQian(this._xiQian[k].val, this._xiQian[k].idx);
                        }
                    }
                    this.onNotEnoughMoney();
                });
            }
        }

        //充值弹框
        private onNotEnoughMoney(): void {
            if (!this._game.sceneObjectMgr.mainPlayer) return;
            if (this._game.sceneObjectMgr.mainPlayer.GetMoney() < this._needChip[this._zjhStory.mapLv][1]) {
                TongyongPageDef.ins.alertRecharge(StringU.substitute("老板，您的金币少于{0}哦~\n补充点金币去大杀四方吧~", this._needChip[this._zjhStory.mapLv][1]), () => {
                    this._game.uiRoot.general.open(DatingPageDef.PAGE_CHONGZHI);
                }, () => {
                }, true, TongyongPageDef.TIPS_SKIN_STR["cz"]);
            }
        }

        //在场活的精灵数量
        private unitCount(): number {
            let count = 0;
            for (let index = 1; index < 6; index++) {
                let unit = this._game.sceneObjectMgr.getUnitByIdx(index)
                if (unit) {
                    if (!unit.IsGiveUp() && !unit.IsIsDefeated()) {
                        count++
                    }
                }
            }
            return count;
        }

        //战斗日志
        private updateBattledInfo(): void {
            if (!this._mapInfo) return;
            let mainUnit = this._game.sceneObjectMgr.mainUnit;
            if (!mainUnit) return;
            let battleInfoMgr = this._mapInfo.battleInfoMgr;
            let mainIdx = mainUnit.GetIndex();
            let cards = this._game.sceneObjectMgr.mainPlayer.playerInfo.cards;
            let cardType = this._zjhMgr.checkCardsType(cards);
            for (let i = 0; i < battleInfoMgr.info.length; i++) {
                let battleInfo = battleInfoMgr.info[i] as gamecomponent.object.BattleInfoBase;
                let index = battleInfoMgr.info.length;
                switch (battleInfo.Type) {
                    case 1: {   //放弃
                        if (this._battleIndex < i) {
                            this._battleIndex = i;
                            let idx = battleInfo.SeatIndex;
                            let unit = this._game.sceneObjectMgr.getUnitByIdx(idx);
                            if (unit) {
                                if (!this._zjhMgr.isReLogin) {
                                    let type = Math.floor((parseInt(unit.GetHeadImg()) - 1) / 10) + 1;
                                    this._game.playSound(Path_game_zjh.music_zjh + MUSIC_PATH.qipai + type + ".mp3", false);
                                    if (idx == mainIdx) {
                                        this.onNotEnoughMoney();
                                        if (!unit.IsSeeCard()) this._zjhMgr.fanpai();
                                        this._viewUI.img_choose.visible = false;
                                        this._viewUI.btn_continue.visible = true;
                                        this._viewUI.box_see.visible = false;
                                        this._viewUI.img_type.visible = true;
                                        this._viewUI.btn_giveup.visible = false;
                                        this._viewUI.btn_auto.visible = false;
                                        this._viewUI.btn_call.visible = false;
                                        this._viewUI.btn_add.visible = false;
                                        this._isAuto = false;
                                        Laya.timer.clear(this, this.autoCall);
                                        this._viewUI.text_type.text = this._cardType[cardType]
                                        this._isGiveUp = true;
                                    }
                                    let posIdx = (idx - mainIdx + 5) % 5;
                                    this._zjhMgr.setDisabled(true, unit);
                                    this._viewUI["box_opt" + posIdx].visible = true;
                                    this._viewUI["text_opt" + posIdx].text = "弃牌";
                                }
                            }
                        }
                        break;
                    }
                    case 2: {   //跟注
                        if (this._battleIndex < i) {
                            this._battleIndex = i;
                            let info = battleInfoMgr.info[i] as gamecomponent.object.BattleInfoBet;
                            this.updateChipInfo(info, i);
                            let idx = info.SeatIndex;
                            let unit = this._game.sceneObjectMgr.getUnitByIdx(idx);
                            if (unit) {
                                if (!this._zjhMgr.isReLogin) {
                                    let type = Math.floor((parseInt(unit.GetHeadImg()) - 1) / 10) + 1;
                                    this._game.playSound(Path_game_zjh.music_zjh + MUSIC_PATH.genzhu + type + ".mp3", false);
                                }
                            }
                        }
                        break;
                    }
                    case 3: {   //明牌
                        if (this._battleIndex < i) {
                            this._battleIndex = i;
                            //明牌用
                            let cards = [];
                            let info = battleInfoMgr.info[i] as gamecomponent.object.BattleInfoPlayCard<ZjhData>;
                            let pos = info.SeatIndex;
                            for (let index = 0; index < info.Cards.length; index++) {
                                let card = info.Cards[index];
                                cards.push(card.GetVal());
                            }
                            let obj = {
                                id: pos,
                                cards: cards,
                            }
                            this._showCards.push(obj);
                        }
                        break;
                    }
                    case 4: {   //比牌
                        if (this._battleIndex < i) {
                            this._battleIndex = i;
                            let info = battleInfoMgr.info[i] as gamecomponent.object.BattleInfoCompare;
                            this.updateChipInfo(info, i);
                            this.compareInfo(info);
                            let idx = info.SeatIndex;
                            let unit = this._game.sceneObjectMgr.getUnitByIdx(idx);
                            if (unit) {
                                if (!this._zjhMgr.isReLogin) {
                                    let type = Math.floor((parseInt(unit.GetHeadImg()) - 1) / 10) + 1;
                                    this._game.playSound(Path_game_zjh.music_zjh + MUSIC_PATH.bipai + type + ".mp3", false);
                                }
                            }
                        }
                        break;
                    }
                    case 7: {   //看牌
                        if (this._battleIndex < i) {
                            this._battleIndex = i;
                            let idx = battleInfo.SeatIndex;
                            let unit = this._game.sceneObjectMgr.getUnitByIdx(idx);
                            if (unit) {
                                if (!this._zjhMgr.isReLogin) {
                                    let type = Math.floor((parseInt(unit.GetHeadImg()) - 1) / 10) + 1;
                                    this._game.playSound(Path_game_zjh.music_zjh + MUSIC_PATH.kanpai + type + ".mp3", false);
                                    if (idx == mainIdx) {
                                        this._zjhMgr.fanpai();
                                        this._viewUI.box_see.visible = false;
                                        this._viewUI.img_type.visible = true;
                                        this._viewUI.text_type.text = this._cardType[cardType]
                                        for (let chipId = 0; chipId < 4; chipId++) {
                                            this._viewUI["btn_chip" + chipId].label = this._chipTemp[chipId] * this._needChip[this._zjhStory.mapLv][0] * 2;
                                        }
                                        let curBet = this._mapInfo.GetCurChip();
                                        if (curBet > 0) {
                                            this._bpClip.visible = true;
                                            this._bpClip.setText((2 * curBet).toString(), true);
                                            this._viewUI.img_compare.x = 86;
                                            this._gzClip.visible = true;
                                            this._gzClip.setText((2 * curBet).toString(), true);
                                            this._viewUI.img_call.x = 86;
                                        }
                                    }
                                    let posIdx = (idx - mainIdx + 5) % 5;
                                    this._viewUI["box_opt" + posIdx].visible = true;
                                    this._viewUI["text_opt" + posIdx].text = "看牌";
                                }
                            }
                        }
                        break;
                    }
                    case 8: {   //孤注一掷
                        if (this._battleIndex < i) {
                            this._battleIndex = i;
                            let info = battleInfoMgr.info[i] as gamecomponent.object.BattleInfoGuzhuyizhi;
                            this._guZhuYiZhiTemp.push(info.SeatIndex);
                            this._guZhuYiZhiTemp.push(info.TargetIdx);
                            this._guZhuYiZhiTemp.push(info.WinIdx);
                            if (this._guZhuYiZhiTemp.length / 3 == this.unitCount() - 1 || info.WinIdx == info.TargetIdx) {
                                this.guZhuYiZhiPlay();
                                let idx = info.SeatIndex;
                                let unit = this._game.sceneObjectMgr.getUnitByIdx(idx);
                                if (unit) {
                                    if (!this._zjhMgr.isReLogin) {
                                        let type = Math.floor((parseInt(unit.GetHeadImg()) - 1) / 10) + 1;
                                        this._game.playSound(Path_game_zjh.music_zjh + MUSIC_PATH.guzhuyizhi + type + ".mp3", false);
                                    }
                                }
                            }
                        }
                        break;
                    }
                    case 9: {   //加注
                        if (this._battleIndex < i) {
                            this._battleIndex = i;
                            let info = battleInfoMgr.info[i] as gamecomponent.object.BattleInfoAddChip;
                            this.updateChipInfo(info, i);
                            let idx = info.SeatIndex;
                            let unit = this._game.sceneObjectMgr.getUnitByIdx(idx);
                            if (unit) {
                                if (!this._zjhMgr.isReLogin) {
                                    let type = Math.floor((parseInt(unit.GetHeadImg()) - 1) / 10) + 1;
                                    this._game.playSound(Path_game_zjh.music_zjh + MUSIC_PATH.jiazhu + type + ".mp3", false);
                                }
                            }
                        }
                        break;
                    }
                    case 11: {   //结算
                        if (this._battleIndex < i) {
                            this._battleIndex = i;
                            let info = battleInfoMgr.info[i] as gamecomponent.object.BattleInfoSettle;
                            this._winnerPos = info.SeatIndex;
                            this._settleGold = info.SettleVal;
                        }
                        break;
                    }
                    case 14: {   //喜钱
                        if (this._battleIndex < i) {
                            this._battleIndex = i;
                            let info = battleInfoMgr.info[i] as gamecomponent.object.BattleInfoXiQian;
                            let obj = {
                                idx: info.SeatIndex,
                                val: info.BetVal,
                            }
                            this._xiQian.push(obj);
                        }
                        break;
                    }
                    default:
                        break;
                }
            }
        }

        //战斗日志来更新桌面上的筹码
        private updateChipInfo(info: any, index: number): void {
            //主玩家的座位
            let mainIdx = this._game.sceneObjectMgr.mainUnit.GetIndex();
            let idx = info.SeatIndex;
            let posIdx = (idx - mainIdx + 5) % 5;
            let type = 0;
            let value = info.BetVal;
            let unit = this._game.sceneObjectMgr.getUnitByIdx(idx)
            let minChip = this._needChip[this._zjhStory.mapLv][0];
            let per = info.BetVal / minChip;
            if (info.SeeCard == 1) {
                if (this._chipTemp.indexOf(per / 2) > -1) {
                    type = this._chipTemp.indexOf(per / 2) + 1
                }
                value = value / 2
                this.createObj(posIdx, type, value, index + 5);
            }
            else {
                if (this._chipTemp.indexOf(per) > -1) {
                    type = this._chipTemp.indexOf(per) + 1
                }
            }
            this.createObj(posIdx, type, value, index + 5);
            if (!this._zjhMgr.isReLogin)
                this._game.playSound(Path_game_zjh.music_zjh + MUSIC_PATH.chip, false);
        }

        //比牌
        private compareInfo(info: any): void {
            this._posList[0] = parseInt(info.SeatIndex);
            this._posList[1] = parseInt(info.TargetIdx);
            this._posList[2] = parseInt(info.WinIdx);
            for (let i = 0; i < this._posList.length; i++) {
                this._compareUnits.push(this._game.sceneObjectMgr.getUnitByIdx(this._posList[i]));
            }
            this.flyHead();
        }

        //比牌-孤注一掷
        private guZhuYiZhiPlay(): void {
            if (this._guZhuYiZhiTemp.length == 0) return;
            if (this._isPlayGuZhuYiZhi) return;
            this._viewUI.view_guzhu.visible = true;
            this._viewUI.view_guzhu.mouseEnabled = false;
            this._viewUI.view_guzhu.ani1.play(1, false);
            this._isPlayGuZhuYiZhi = true;
            let mainIdx = this._game.sceneObjectMgr.mainUnit.GetIndex();
            let count = 0;
            let targetCount = 0;
            let compareCount = 0;
            let time = 4000 * 3 / this._guZhuYiZhiTemp.length;
            for (let i = 0; i < this._guZhuYiZhiTemp.length; i++) {
                let idx = 0;
                let posIdx = 0;
                if (i == 0) {
                    idx = this._guZhuYiZhiTemp[i]
                    posIdx = (idx - mainIdx + 5) % 5;
                    this._viewUI["view_pk" + posIdx].visible = true;
                    this._viewUI["view_pk" + posIdx].ani1.play(1, false);
                }
                else if (i % 3 == 1) {
                    idx = this._guZhuYiZhiTemp[i]
                    posIdx = (idx - mainIdx + 5) % 5;
                    Laya.timer.once(time * targetCount, this, () => {
                        this._viewUI["view_pk" + posIdx].visible = true;
                        this._viewUI["view_pk" + posIdx].ani1.play(1, false);
                    })
                    targetCount++;
                }
                else if (i % 3 == 2) {
                    //这个是赢的位置，那输的就是另一个
                    let loseIdx = this._guZhuYiZhiTemp[i] == this._guZhuYiZhiTemp[i - 1] ? this._guZhuYiZhiTemp[0] : this._guZhuYiZhiTemp[i - 1]
                    Laya.timer.once(time * count + time, this, () => {
                        compareCount++;
                        posIdx = (loseIdx - mainIdx + 5) % 5;
                        this._viewUI["view_pk" + posIdx].visible = false;
                        this._viewUI["view_shu" + posIdx].visible = true;
                        this._viewUI["view_shu" + posIdx].ani1.play(1, false);
                        this._game.playSound(Path_game_zjh.music_zjh + MUSIC_PATH.bipaishu, false)
                        let unit = this._game.sceneObjectMgr.getUnitByIdx(loseIdx)
                        if (unit) {
                            this._zjhMgr.setDisabled(true, unit)
                        }
                        if (compareCount == this._guZhuYiZhiTemp.length / 3) {
                            this._viewUI.view_guzhu.visible = false;
                            this._viewUI.view_guzhu.ani1.stop();
                            this._guZhuYiZhiTemp = [];
                            this._isPlayGuZhuYiZhi = false;
                            for (let index = 0; index < 5; index++) {
                                this._viewUI["view_pk" + index].visible = false;
                                this._viewUI["view_pk" + index].ani1.stop();
                            }
                            if (posIdx == 0) {
                                this._viewUI.btn_continue.visible = true;
                            }
                        }
                    })
                    count++;
                }

            }
        }

        //关闭孤注一掷输的动画
        private stopGuZhuYiZhiLose(index: number): void {
            this._viewUI["view_shu" + index].visible = false;
        }

        //创建筹码
        private createObj(posIdx: number, type: number, value: number, index: number) {
            let chip = this._game.sceneObjectMgr.createOfflineObject(SceneRoot.CHIP_MARK, ZjhChip) as ZjhChip;
            chip.setData(posIdx, type, value, index);
            this._totalChip.push(chip);
            if (this._zjhMgr.isReLogin) {
                chip.drawChip();
            }
            else {
                chip.sendChip();
            }
        }

        //结算飘筹码
        private flyChipEffect(): void {
            let mainIdx = this._game.sceneObjectMgr.mainUnit.GetIndex();
            let idx = this._winnerPos;
            for (let i = 0; i < this._totalChip.length; i++) {
                let chip: ZjhChip = this._totalChip[i]
                let posIdx = (idx - mainIdx + 5) % 5;
                chip.flyChip(posIdx);
            }
            this._totalChip = [];
            this._game.playSound(Path_game_zjh.music_zjh + MUSIC_PATH.shouqian, false);
        }

        //金币变化 飘字clip
        private addMoneyClip(value: number): void {
            let idx = this._game.sceneObjectMgr.mainUnit.GetIndex();
            this._valueClip = new ZjhClip(ZjhClip.ADD_MONEY_FONT);
            let preSkin = PathGameTongyong.ui_tongyong_general + "tu_jia.png";
            this._valueClip.scale(0.8, 0.8);
            this._valueClip.anchorX = 0.5;
            this._valueClip.anchorY = 0.5;
            let moneyStr = EnumToString.getPointBackNum(Math.abs(value), 2);
            let index = (this._winnerPos - idx + 5) % 5;
            let posX = this._headPos[index][0] + 50;
            let posY = this._headPos[index][1] + 50;
            this._valueClip.setText(moneyStr + "", false, false, preSkin);
            let deep = this._viewUI.img_menu.parent.getChildIndex(this._viewUI.img_menu);
            if (!this._valueClip.parent) this._viewUI.box_view.addChildAt(this._valueClip, deep);
            this._valueClip.pos(posX, posY);
            Laya.Tween.clearAll(this._valueClip);
            Laya.Tween.to(this._valueClip, { y: posY - 75 }, 1000);
        }

        //喜钱动画
        private addXiQian(value: number, posIdx: number): void {
            let idx = this._game.sceneObjectMgr.mainUnit.GetIndex();
            let index = (posIdx - idx + 5) % 5;
            let xiQian = this._xiQianList[index];
            if (!xiQian) {
                this._xiQianList[index] = xiQian = new ZjhXiQianPage(value, this._zjhMgr)
                xiQian.anchorX = xiQian.anchorY = 0.5;
                xiQian.left = this._xiQianPos[index][0];
                xiQian.top = this._xiQianPos[index][1];
                if (index == 0) {
                    xiQian.scale(1, 1);
                } else {
                    xiQian.scale(0.7, 0.7);
                }
            }
            let deep = this._viewUI.img_menu.parent.getChildIndex(this._viewUI.img_menu);
            !xiQian.parent && this._viewUI.box_view.addChildAt(xiQian, deep);
        }

        //喜钱 飘字clip
        private addMoneyXiQian(): void {
            this._zjhMgr.off(ZjhMgr.XIQIAN_END, this, this.addMoneyXiQian);
            for (let i = 0; i < this._xiQian.length; i++) {
                let value = this._xiQian[i].val;
                let idx = this._game.sceneObjectMgr.mainUnit.GetIndex();
                let valueClip = new ZjhClip(ZjhClip.ADD_MONEY_XIQIAN);
                let preSkin = Path_game_zjh.ui_zjh + "xq_j.png";
                valueClip.scale(0.8, 0.8);
                valueClip.anchorX = 0.5;
                valueClip.setText(value + "", false, false, preSkin);
                let index = (this._xiQian[i].idx - idx + 5) % 5;
                let posX = this._headPos[index][0] + 50;
                let posY = this._headPos[index][1] - 60;
                let deep = this._viewUI.img_menu.parent.getChildIndex(this._viewUI.img_menu);
                if (!valueClip.parent) this._viewUI.box_view.addChildAt(valueClip, deep);
                valueClip.pos(posX, posY);
                this._clipList.push(valueClip);
            }
        }

        //清理所有喜钱动画
        private clearXiQian(): void {
            for (let key in this._xiQianList) {
                if (this._xiQianList.hasOwnProperty(key)) {
                    let xiqian = this._xiQianList[key];
                    xiqian.removeSelf();
                    xiqian.destroy();
                    xiqian = null;
                }
            }
            this._xiQianList = {};
            if (this._clipList && this._clipList.length) {
                for (let i: number = 0; i < this._clipList.length; i++) {
                    let clip = this._clipList[i];
                    clip.removeSelf();
                    clip.destroy();
                    clip = null;
                }
            }
            this._clipList = [];
        }

        private initView(): void {
            //界面UI
            if (this._zjhStory.mapLv) {
                let str = "";
                if (this._zjhStory.mapLv == Web_operation_fields.GAME_ROOM_CONFIG_ZJH_1) {
                    str = "新手场：底注：";
                } else if (this._zjhStory.mapLv == Web_operation_fields.GAME_ROOM_CONFIG_ZJH_2) {
                    str = "小资场：底注：";
                } else if (this._zjhStory.mapLv == Web_operation_fields.GAME_ROOM_CONFIG_ZJH_3) {
                    str = "老板场：底注：";
                } else if (this._zjhStory.mapLv == Web_operation_fields.GAME_ROOM_CONFIG_ZJH_4) {
                    str = "富豪场：底注：";
                }
                this._viewUI.text_roomtype.text = str + this._needChip[this._zjhStory.mapLv][0];
                this._viewUI.text_maxchip.text = " 单注上限：" + this._needChip[this._zjhStory.mapLv][0] * this._chipTemp[this._chipTemp.length - 1] * 2;
                let per = 1;
                let mainUint = this._game.sceneObjectMgr.mainUnit;
                if (mainUint) {
                    if (mainUint.IsSeeCard()) {
                        per = 2;
                    }
                }
                for (let i = 0; i < 4; i++) {
                    this._viewUI["btn_chip" + i].label = this._chipTemp[i] * this._needChip[this._zjhStory.mapLv][0] * per;
                }
            }
        }

        //重连上线的
        private loginAgainInit(): void {
            if (!this._zjhMgr.isReLogin) return;
            if (!this._mapInfo) return;
            this._isDeal = true;
            this._viewUI.text_info.visible = true;
            this._viewUI.text_roomtype.visible = true;
            this._viewUI.text_maxchip.visible = true;
            this._viewUI.view_bipai1.visible = false;
            this._viewUI.view_compare.visible = false;
            this._viewUI.view_pk.visible = false;
            this._viewUI.btn_giveup.visible = true;
            this.onUpdateUnit();
            if (!this._game.sceneObjectMgr.mainUnit.IsSeeCard())
                this._viewUI.box_see.visible = true;
            for (let index = 0; index < 5; index++) {
                let idx = this._game.sceneObjectMgr.mainUnit.GetIndex();
                let posIdx = (idx + index) % 5 == 0 ? 5 : (idx + index) % 5;
                let unit = this._game.sceneObjectMgr.getUnitByIdx(posIdx)
                this._viewUI["view_head" + index].x = this._headPos[index][0];
                this._viewUI["view_head" + index].y = this._headPos[index][1];
                if (unit) {
                    this._viewUI["box_chip" + index].visible = true;
                    if (unit.IsIsDefeated()) {
                        this._viewUI["box_opt" + index].visible = true;
                        this._viewUI["text_opt" + index].text = "比牌失败";
                    }
                    else if (unit.IsGiveUp()) {
                        this._viewUI["box_opt" + index].visible = true;
                        this._viewUI["text_opt" + index].text = "弃牌";
                    }
                    else if (unit.IsSeeCard()) {
                        this._viewUI["box_opt" + index].visible = true;
                        this._viewUI["text_opt" + index].text = "看牌";
                    }
                }
            }
            this._viewUI.text_money.text = this._mapInfo.GetJackpot().toString();
            let round = this._mapInfo.GetRound() > 20 ? 20 : this._mapInfo.GetRound();
            this._viewUI.text_round.text = round + "/20轮";
            this._viewUI.text_info.text = "牌局号：" + this._mapInfo.GetGameNo();
            //轮到自己操作时重连
            let betPos = this._mapInfo.GetCurrentBetPos();
            let idx = this._game.sceneObjectMgr.mainUnit.GetIndex();
            if (idx == betPos) {
                this._viewUI.btn_add.visible = true;
                this._viewUI.btn_call.visible = true;
                this._viewUI.btn_auto.visible = false;
                if (round < 2) {
                    this._viewUI.btn_compare.visible = false;
                } else {
                    this._viewUI.btn_compare.visible = true;
                }
                this._viewUI.view_head0.img_frame.visible = true;
            } else {
                this._viewUI.btn_auto.visible = true;
            }
            //筹码
            let battleInfoMgr = this._mapInfo.battleInfoMgr;
            for (let i = 0; i < battleInfoMgr.info.length; i++) {
                let battleInfo = battleInfoMgr.info[i] as gamecomponent.object.BattleInfoBase;
                switch (battleInfo.Type) {
                    case 2: {   //跟注
                        let info = battleInfoMgr.info[i] as gamecomponent.object.BattleInfoBet;
                        this.updateChipInfo(info, i);
                        break;
                    }
                    case 4: {   //比牌
                        let info = battleInfoMgr.info[i] as gamecomponent.object.BattleInfoCompare;
                        this.updateChipInfo(info, i);
                        break;
                    }
                    case 9: {   //加注
                        let info = battleInfoMgr.info[i] as gamecomponent.object.BattleInfoAddChip;
                        this.updateChipInfo(info, i);
                        break;
                    }
                    case 10: {   //下注底分
                        let info = battleInfoMgr.info[i] as gamecomponent.object.BattleInfoStart;
                        this.updateChipInfo(info, i);
                        break;
                    }
                    default:
                        break;
                }
            }
        }

        //操作倒计时
        update(): void {
            let mapinfo: ZjhMapInfo = this._game.sceneObjectMgr.mapInfo as ZjhMapInfo;
            if (!mapinfo) return;
            let state = mapinfo.GetMapState()
            if (state != MAP_STATUS.MAP_STATE_BEGIN) return;
            let now_time = this._game.sync.serverTimeBys * 1000;
            let remain_time: number = this._endTime - now_time;
            if (remain_time > 0) {
                let angle = remain_time / this._totalTime * 360;
                angle = 360 - angle;
                for (let i = 0; i < 5; i++) {
                    let imgMask = this._viewUI["view_head" + i].img_mask;
                    imgMask.graphics.clear();
                    imgMask.graphics.drawPie(imgMask.width / 2, imgMask.height / 2, 200, angle - 90, 360 - 90, "");
                }
            }
        }

        //洗牌之后
        private afterShuffleCards(): void {
            Laya.Tween.to(this._viewUI.view_xipai, { x: 820, y: 150, alpha: 0.05, rotation: -56, scaleX: 0.3, scaleY: 0.3 }, 500, null, Handler.create(this, () => {
                this._viewUI.view_paihe.cards.visible = true;
                this._viewUI.view_paihe.ani_chupai.play(0, false);
                this._viewUI.view_xipai.visible = false;
            }));
        }

        //继续游戏时需要影藏的东西
        private hiddenViews(): void {
            for (let index = 1; index < 5; index++) {
                this._viewUI["view_player" + index].view_arrow.visible = false;
                this._viewUI["view_player" + index].img_frame.visible = false;
            }
            for (let i = 0; i < 5; i++) {
                this._viewUI["view_head" + i].img_frame.visible = false;
                this._viewUI["view_head" + i].visible = false;
                this._viewUI["box_opt" + i].visible = false;
                this._viewUI["box_chip" + i].visible = false;
                this._viewUI["view_pk" + i].visible = false;
                this._viewUI["view_pk" + i].ani1.stop();
                this._viewUI["view_head" + i].x = this._headPos[i][0];
                this._viewUI["view_head" + i].y = this._headPos[i][1];
                this._viewUI["view_shu" + i].visible = false;
                this._viewUI["view_shu" + i].ani1.stop();
            }
            this._viewUI.img_type.visible = false;
            this._viewUI.box_see.visible = false;
            this._viewUI.text_money.text = "0";
            this._viewUI.text_round.text = "0/20轮";
            this._viewUI.btn_giveup.visible = false;
            this._viewUI.btn_compare.visible = false;
            this._viewUI.btn_auto.visible = false;
            this._viewUI.btn_call.visible = false;
            this._viewUI.btn_add.visible = false;
            this._viewUI.view_win.visible = false;
            this._viewUI.btn_continue.visible = false;
            this._viewUI.view_compare.visible = false;
            this._viewUI.view_compare.view_player0.visible = false;
            this._viewUI.view_compare.view_player1.visible = false;
            this._viewUI.view_guzhu.visible = false;
            this._viewUI.img_menu.visible = false;
            this._viewUI.img_choose.visible = false;
            this._viewUI.img_xiqian.visible = false;
            this._viewUI.text_info.visible = false;
            this._viewUI.text_roomtype.visible = false;
            this._viewUI.text_maxchip.visible = false;
            this._viewUI.view_bipai1.visible = false;
            this._viewUI.view_effect0.visible = false;
            this._viewUI.view_effect1.visible = false;
            this._viewUI.view_pk.visible = false;
            this._viewUI.view_guzhu.ani1.stop();
            this._viewUI.view_win.ani1.stop();
            this._viewUI.view_compare.ani1.stop();
            this._viewUI.view_bipai1.ani1.stop();
            this._viewUI.view_compare.view_win0.ani1.stop();
            this._viewUI.view_compare.view_win1.ani1.stop();
            this._viewUI.view_effect0.ani1.stop();
            this._viewUI.view_effect1.ani1.stop();
            this._viewUI.view_paihe.ani2.gotoAndStop(0);
            this._viewUI.view_paihe.cards.visible = false;
            this._viewUI.view_xipai.visible = false;
        }

        private resetData(): void {
            this._isAuto = false;
            this._isCompare = false;
            this._posList = [0, 0, 0];
            this._compareUnits = [];
            this._winnerPos = 0;
            this._totalChip = [];
            this._showCards = [];
            this._battleIndex = -1;
            this._settleGold = 0;
            this._xiQian = [];
            Laya.timer.clear(this, this.autoCall);
            // this._viewUI.btn_auto.label = "自动跟注";
            this._viewUI.img_auto.skin = Path_game_zjh.ui_zjh + "tu_zdgz.png";
            this._isDeal = false;
            this._viewUI.btn_call.disabled = false;
            this._viewUI.btn_add.disabled = false;
            this._viewUI.view_xipai.scale(1, 1);
            this._viewUI.view_xipai.x = 480;
            this._viewUI.view_xipai.y = 200;
            this._viewUI.view_xipai.rotation = 0;
            this._viewUI.view_xipai.alpha = 1;
            if (this._zjhStory) {
                this._zjhStory.isDealCard = false;
                this._zjhStory.checkReconect = false;
            }
            this._isGiveUp = false;
        }


        private clearListen() {
            this._viewUI.view_compare.ani1.off(LEvent.COMPLETE, this, this.compareAniStop);
            this._viewUI.view_bipai1.ani1.off(LEvent.COMPLETE, this, this.bipai1AniStop);
            this._viewUI.view_compare.view_win0.ani1.off(LEvent.COMPLETE, this, this.headPlace);
            this._viewUI.view_compare.view_win1.ani1.off(LEvent.COMPLETE, this, this.headPlace);
            this._viewUI.view_effect0.ani1.off(LEvent.COMPLETE, this, this.updateViewWin);
            this._viewUI.view_effect1.ani1.off(LEvent.COMPLETE, this, this.updateViewWin);
            this._viewUI.view_xipai.ani_xipai.off(LEvent.COMPLETE, this, this.afterShuffleCards);

            this._game.sceneObjectMgr.off(ZjhMapInfo.EVENT_ZJH_STATUS_CHECK, this, this.updateMapInfo);
            this._game.sceneObjectMgr.off(ZjhMapInfo.EVENT_ZJH_BATTLE_CHECK, this, this.updateBattledInfo);
            this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_ADD_UNIT, this, this.onUnitAdd);
            this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_REMOVE_UNIT, this, this.onUnitRemove);
            this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_MONEY_CHANGE, this, this.onUpdateUnit);
            this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_CHANGE, this, this.onUpdateUnit);
            this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_ACTION, this, this.onUpdateUnit);
            this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_MAPINFO_CHANGE, this, this.onUpdateMap);
            this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_QIFU_TIME_CHANGE, this, this.onUpdateUnit);
            Laya.Tween.clearAll(this);
            Laya.timer.clearAll(this);
        }

        public close(): void {
            if (this._viewUI) {
                this.clearClip();
                this._viewUI.btn_menu.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_add.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_closen.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.box_see.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_giveup.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_compare.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_call.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_auto.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_continue.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_rules.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_cardtype.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_set.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_qifu.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_record.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_xiqian.off(LEvent.CLICK, this, this.onBtnClickWithTween);

                this._viewUI.view_compare.ani1.off(LEvent.COMPLETE, this, this.compareAniStop);
                this._viewUI.view_bipai1.ani1.off(LEvent.COMPLETE, this, this.bipai1AniStop);
                this._viewUI.view_compare.view_win0.ani1.off(LEvent.COMPLETE, this, this.headPlace);
                this._viewUI.view_compare.view_win1.ani1.off(LEvent.COMPLETE, this, this.headPlace);
                this._viewUI.view_effect0.ani1.off(LEvent.COMPLETE, this, this.updateViewWin);
                this._viewUI.view_effect1.ani1.off(LEvent.COMPLETE, this, this.updateViewWin);
                this._viewUI.view_xipai.ani_xipai.off(LEvent.COMPLETE, this, this.afterShuffleCards);

                this._game.sceneObjectMgr.off(ZjhMapInfo.EVENT_ZJH_STATUS_CHECK, this, this.updateMapInfo);
                this._game.sceneObjectMgr.off(ZjhMapInfo.EVENT_ZJH_BATTLE_CHECK, this, this.updateBattledInfo);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_ADD_UNIT, this, this.onUnitAdd);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_REMOVE_UNIT, this, this.onUnitRemove);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_MONEY_CHANGE, this, this.onUpdateUnit);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_CHANGE, this, this.onUpdateUnit);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_ACTION, this, this.onUpdateUnit);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_MAPINFO_CHANGE, this, this.onUpdateMap);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_QIFU_TIME_CHANGE, this, this.onUpdateUnit);
                this._game.qifuMgr.off(QiFuMgr.QIFU_FLY, this, this.qifuFly);
                // this._viewUI.view_compare.off(LEvent.CLICK, this, () => { });
                // this._viewUI.view_guzhu.off(LEvent.CLICK, this, () => { });
                this._viewUI.view_xipai.ani_xipai.off(LEvent.COMPLETE, this, this.afterShuffleCards);
                for (let i = 0; i < 4; i++) {
                    this._viewUI["btn_chip" + i] && this._viewUI["btn_chip" + i].off(LEvent.CLICK, this, this.onBtnChipClick, [i]);
                    this._viewUI["view_player" + (i + 1).toString()] && this._viewUI["view_player" + (i + 1).toString()].off(LEvent.CLICK, this, this.onBtnCompareClick, [i]);
                }
                for (let index = 0; index < 5; index++) {
                    this._viewUI["view_shu" + index] && this._viewUI["view_shu" + index].ani1.off(LEvent.COMPLETE, this, this.stopGuZhuYiZhiLose, [index]);
                }
                if (this._valueClip) {
                    this._valueClip.removeSelf();
                    this._valueClip.destroy(true);
                    this._valueClip = null;
                }
                this.clearListen();
                this.clearXiQian();
                this._zjhMgr.clear();
                this._zjhStory.clear();
                this._totalChip = []

                if (this._zjhMgr) {
                    this._zjhMgr.off(ZjhMgr.EVENT_CHECK, this, this.onAfterDealCards);
                    this._zjhMgr.off(ZjhMgr.XIQIAN_END, this, this.addMoneyXiQian);
                }
                this._game.stopMusic();
                this._game.stopAllSound();
                Laya.Tween.clearAll(this);
                Laya.timer.clearAll(this);

                this._mapInfo = null;
            }
            super.close();
        }
    }
}