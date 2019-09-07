
module ui.nqp.game_ui.zhajinhua {
    export class BiPaiUI extends View {
		public ani1:Laya.FrameAnimation;
		public box_player0:Laya.Box;
		public view_player0:ui.nqp.game_ui.zhajinhua.component.TouXiangUI;
		public box_card0:Laya.Box;
		public view_win0:ui.nqp.game_ui.zhajinhua.component.YingUI;
		public box_player1:Laya.Box;
		public view_player1:ui.nqp.game_ui.zhajinhua.component.TouXiangUI;
		public box_card1:Laya.Box;
		public view_win1:ui.nqp.game_ui.zhajinhua.component.YingUI;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"width":1280,"right":2,"height":720,"centerY":-2},"child":[{"type":"Image","props":{"top":0,"skin":"tongyong_ui/game_ui/tongyong/hud/tu_h.png","right":0,"left":0,"bottom":0,"alpha":0.3}},{"type":"Image","props":{"y":350,"x":0,"skin":"zjh_ui/game_ui/zhajinhua/tu_bp1.png","sizeGrid":"0,387,0,6","right":570,"left":-570,"height":248,"anchorY":0.5},"compId":2},{"type":"Image","props":{"y":275,"x":571,"skin":"zjh_ui/game_ui/zhajinhua/tu_bp2.png","sizeGrid":"0,3,0,368","right":-520,"left":570},"compId":3},{"type":"Image","props":{"y":260,"x":519,"skin":"zjh_ui/game_ui/zhajinhua/tu_p.png","alpha":1},"compId":7},{"type":"Image","props":{"y":323,"x":616,"skin":"zjh_ui/game_ui/zhajinhua/tu_k.png","alpha":1},"compId":8},{"type":"Image","props":{"y":319,"x":652,"skin":"zjh_ui/game_ui/zhajinhua/tu_g.png","scaleY":2,"scaleX":2,"blendMode":"lighter","anchorY":0.5,"anchorX":0.5,"alpha":1},"compId":17},{"type":"Box","props":{"y":249,"x":213,"var":"box_player0","alpha":1},"compId":12,"child":[{"type":"TouXiang","props":{"x":185,"var":"view_player0","runtime":"ui.nqp.game_ui.zhajinhua.component.TouXiangUI"}},{"type":"Box","props":{"y":17,"x":0,"var":"box_card0"},"child":[{"type":"Image","props":{"skin":"tongyong_ui/game_ui/tongyong/pai/0.png","scaleY":0.75,"scaleX":0.75}},{"type":"Image","props":{"x":40,"skin":"tongyong_ui/game_ui/tongyong/pai/0.png","scaleY":0.75,"scaleX":0.75}},{"type":"Image","props":{"x":80,"skin":"tongyong_ui/game_ui/tongyong/pai/0.png","scaleY":0.75,"scaleX":0.75}}]},{"type":"Ying","props":{"y":11,"x":18,"var":"view_win0","runtime":"ui.nqp.game_ui.zhajinhua.component.YingUI"}}]},{"type":"Box","props":{"y":310,"x":793,"var":"box_player1","alpha":1},"compId":16,"child":[{"type":"TouXiang","props":{"var":"view_player1","runtime":"ui.nqp.game_ui.zhajinhua.component.TouXiangUI"}},{"type":"Box","props":{"y":12,"x":132,"var":"box_card1"},"child":[{"type":"Image","props":{"skin":"tongyong_ui/game_ui/tongyong/pai/0.png","scaleY":0.75,"scaleX":0.75}},{"type":"Image","props":{"x":40,"skin":"tongyong_ui/game_ui/tongyong/pai/0.png","scaleY":0.75,"scaleX":0.75}},{"type":"Image","props":{"x":80,"skin":"tongyong_ui/game_ui/tongyong/pai/0.png","scaleY":0.75,"scaleX":0.75}}]},{"type":"Ying","props":{"y":9,"x":149,"var":"view_win1","runtime":"ui.nqp.game_ui.zhajinhua.component.YingUI"}}]},{"type":"Image","props":{"y":281,"x":478,"visible":true,"skin":"zjh_ui/game_ui/zhajinhua/tu_p.png","scaleY":4,"scaleX":4,"anchorY":0.5,"anchorX":0.5,"alpha":0},"compId":20},{"type":"Image","props":{"y":416,"x":792,"visible":true,"skin":"zjh_ui/game_ui/zhajinhua/tu_k.png","scaleY":4,"scaleX":4,"anchorY":0.5,"anchorX":0.5,"alpha":0},"compId":21}]}],"animations":[{"nodes":[{"target":2,"keyframes":{"x":[{"value":-530,"tweenMethod":"circIn","tween":true,"target":2,"key":"x","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":10}],"right":[{"value":1100,"tweenMethod":"linearNone","tween":true,"target":2,"key":"right","index":0},{"value":570,"tweenMethod":"linearNone","tween":true,"target":2,"key":"right","index":10}],"left":[{"value":-570,"tweenMethod":"linearNone","tween":true,"target":2,"key":"left","index":0},{"value":-570,"tweenMethod":"linearNone","tween":true,"target":2,"key":"left","index":10}]}},{"target":3,"keyframes":{"x":[{"value":1101,"tweenMethod":"circIn","tween":true,"target":3,"key":"x","index":0},{"value":571,"tweenMethod":"linearNone","tween":true,"target":3,"key":"x","index":10}],"right":[{"value":-520,"tweenMethod":"linearNone","tween":true,"target":3,"key":"right","index":0},{"value":-520,"tweenMethod":"linearNone","tween":true,"target":3,"key":"right","index":10}],"left":[{"value":1100,"tweenMethod":"linearNone","tween":true,"target":3,"key":"left","index":0},{"value":570,"tweenMethod":"linearNone","tween":true,"target":3,"key":"left","index":10}]}},{"target":17,"keyframes":{"scaleY":[{"value":2,"tweenMethod":"linearNone","tween":true,"target":17,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":17,"key":"scaleY","index":10},{"value":2,"tweenMethod":"linearNone","tween":true,"target":17,"key":"scaleY","index":18}],"scaleX":[{"value":2,"tweenMethod":"linearNone","tween":true,"target":17,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":17,"key":"scaleX","index":10},{"value":2,"tweenMethod":"linearNone","tween":true,"target":17,"key":"scaleX","index":18}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":17,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":17,"key":"alpha","index":7},{"value":1,"tweenMethod":"linearNone","tween":true,"target":17,"key":"alpha","index":10}]}},{"target":8,"keyframes":{"x":[{"value":1486,"tweenMethod":"backIn","tween":true,"target":8,"key":"x","index":0},{"value":616,"tweenMethod":"linearNone","tween":true,"target":8,"key":"x","index":10}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":8,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":8,"key":"alpha","index":10}]}},{"target":7,"keyframes":{"x":[{"value":-351,"tweenMethod":"backIn","tween":true,"target":7,"key":"x","index":0},{"value":519,"tweenMethod":"linearNone","tween":true,"target":7,"key":"x","index":10}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":7,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":7,"key":"alpha","index":10}]}},{"target":12,"keyframes":{"x":[{"value":213,"tweenMethod":"linearNone","tween":true,"target":12,"key":"x","index":0},{"value":13,"tweenMethod":"linearNone","tween":true,"target":12,"key":"x","index":10},{"value":213,"tweenMethod":"linearNone","tween":true,"target":12,"key":"x","index":20}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":12,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":12,"key":"alpha","index":9},{"value":1,"tweenMethod":"linearNone","tween":true,"target":12,"key":"alpha","index":10}]}},{"target":16,"keyframes":{"x":[{"value":793,"tweenMethod":"linearNone","tween":true,"target":16,"key":"x","index":0},{"value":973,"tweenMethod":"linearNone","tween":true,"target":16,"key":"x","index":10},{"value":793,"tweenMethod":"linearNone","tween":true,"target":16,"key":"x","index":20}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":16,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":16,"key":"alpha","index":9},{"value":1,"tweenMethod":"linearNone","tween":true,"target":16,"key":"alpha","index":10}]}},{"target":20,"keyframes":{"y":[{"value":311,"tweenMethod":"linearNone","tween":true,"target":20,"key":"y","index":0},{"value":311,"tweenMethod":"linearNone","tween":true,"target":20,"key":"y","index":10},{"value":281,"tweenMethod":"linearNone","tween":true,"target":20,"key":"y","index":20}],"x":[{"value":589,"tweenMethod":"linearNone","tween":true,"target":20,"key":"x","index":0},{"value":588,"tweenMethod":"linearNone","tween":true,"target":20,"label":null,"key":"x","index":10},{"value":478,"tweenMethod":"linearNone","tween":true,"target":20,"key":"x","index":20}],"visible":[{"value":false,"tweenMethod":"linearNone","tween":false,"target":20,"key":"visible","index":0},{"value":true,"tweenMethod":"linearNone","tween":false,"target":20,"label":null,"key":"visible","index":10}],"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":20,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":20,"label":null,"key":"scaleY","index":10},{"value":4,"tweenMethod":"linearNone","tween":true,"target":20,"key":"scaleY","index":20}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":20,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":20,"label":null,"key":"scaleX","index":10},{"value":4,"tweenMethod":"linearNone","tween":true,"target":20,"key":"scaleX","index":20}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":20,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":20,"key":"alpha","index":10},{"value":0,"tweenMethod":"linearNone","tween":true,"target":20,"key":"alpha","index":20}]}},{"target":21,"keyframes":{"y":[{"value":376,"tweenMethod":"linearNone","tween":true,"target":21,"key":"y","index":0},{"value":376,"tweenMethod":"linearNone","tween":true,"target":21,"label":null,"key":"y","index":10},{"value":416,"tweenMethod":"linearNone","tween":true,"target":21,"key":"y","index":20}],"x":[{"value":692,"tweenMethod":"linearNone","tween":true,"target":21,"key":"x","index":0},{"value":692,"tweenMethod":"linearNone","tween":true,"target":21,"label":null,"key":"x","index":10},{"value":792,"tweenMethod":"linearNone","tween":true,"target":21,"key":"x","index":20}],"visible":[{"value":true,"tweenMethod":"linearNone","tween":false,"target":21,"key":"visible","index":0},{"value":true,"tweenMethod":"linearNone","tween":false,"target":21,"key":"visible","index":10}],"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":21,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":21,"label":null,"key":"scaleY","index":10},{"value":4,"tweenMethod":"linearNone","tween":true,"target":21,"key":"scaleY","index":20}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":21,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":21,"label":null,"key":"scaleX","index":10},{"value":4,"tweenMethod":"linearNone","tween":true,"target":21,"key":"scaleX","index":20}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":21,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":21,"key":"alpha","index":9},{"value":1,"tweenMethod":"linearNone","tween":true,"target":21,"key":"alpha","index":10},{"value":0,"tweenMethod":"linearNone","tween":true,"target":21,"key":"alpha","index":20}]}}],"name":"ani1","id":1,"frameRate":24,"action":1}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.nqp.game_ui.zhajinhua.component.TouXiangUI",ui.nqp.game_ui.zhajinhua.component.TouXiangUI);
			View.regComponent("ui.nqp.game_ui.zhajinhua.component.YingUI",ui.nqp.game_ui.zhajinhua.component.YingUI);

            super.createChildren();
            this.createView(ui.nqp.game_ui.zhajinhua.BiPaiUI.uiView);
        }
    }
}

module ui.nqp.game_ui.zhajinhua {
    export class BiPai1UI extends View {
		public ani1:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"width":1280,"right":2,"height":720,"centerY":-2},"child":[{"type":"Image","props":{"y":198,"x":1,"skin":"zjh_ui/game_ui/zhajinhua/effect/bipai/00001.png","blendMode":"lighter"},"compId":23},{"type":"Image","props":{"y":260,"x":1283,"skin":"zjh_ui/game_ui/zhajinhua/effect/bipai/00001.png","scaleX":-1,"blendMode":"lighter"},"compId":24}]}],"animations":[{"nodes":[{"target":23,"keyframes":{"skin":[{"value":"zjh_ui/game_ui/zhajinhua/effect/bipai/00001.png","tweenMethod":"linearNone","tween":false,"target":23,"key":"skin","index":0},{"value":"zjh_ui/game_ui/zhajinhua/effect/bipai/00002.png","tweenMethod":"linearNone","tween":false,"target":23,"key":"skin","index":3},{"value":"zjh_ui/game_ui/zhajinhua/effect/bipai/00003.png","tweenMethod":"linearNone","tween":false,"target":23,"key":"skin","index":4},{"value":"zjh_ui/game_ui/zhajinhua/effect/bipai/00004.png","tweenMethod":"linearNone","tween":false,"target":23,"key":"skin","index":5},{"value":"zjh_ui/game_ui/zhajinhua/effect/bipai/00005.png","tweenMethod":"linearNone","tween":false,"target":23,"key":"skin","index":6},{"value":"zjh_ui/game_ui/zhajinhua/effect/bipai/00006.png","tweenMethod":"linearNone","tween":false,"target":23,"key":"skin","index":7},{"value":"zjh_ui/game_ui/zhajinhua/effect/bipai/00007.png","tweenMethod":"linearNone","tween":false,"target":23,"key":"skin","index":8},{"value":"zjh_ui/game_ui/zhajinhua/effect/bipai/00008.png","tweenMethod":"linearNone","tween":false,"target":23,"key":"skin","index":9},{"value":"zjh_ui/game_ui/zhajinhua/effect/bipai/00009.png","tweenMethod":"linearNone","tween":false,"target":23,"key":"skin","index":10},{"value":"zjh_ui/game_ui/zhajinhua/effect/bipai/00010.png","tweenMethod":"linearNone","tween":false,"target":23,"key":"skin","index":11},{"value":"zjh_ui/game_ui/zhajinhua/effect/bipai/00011.png","tweenMethod":"linearNone","tween":false,"target":23,"key":"skin","index":12},{"value":"zjh_ui/game_ui/zhajinhua/effect/bipai/00013.png","tweenMethod":"linearNone","tween":false,"target":23,"key":"skin","index":13},{"value":"zjh_ui/game_ui/zhajinhua/effect/bipai/00014.png","tweenMethod":"linearNone","tween":false,"target":23,"key":"skin","index":14},{"value":"zjh_ui/game_ui/zhajinhua/effect/bipai/00015.png","tweenMethod":"linearNone","tween":false,"target":23,"key":"skin","index":15},{"value":"zjh_ui/game_ui/zhajinhua/effect/bipai/00016.png","tweenMethod":"linearNone","tween":false,"target":23,"key":"skin","index":16}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":23,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":23,"key":"alpha","index":1},{"value":1,"tweenMethod":"linearNone","tween":true,"target":23,"key":"alpha","index":2},{"value":0,"tweenMethod":"linearNone","tween":true,"target":23,"key":"alpha","index":17}]}},{"target":24,"keyframes":{"skin":[{"value":"zjh_ui/game_ui/zhajinhua/effect/bipai/00001.png","tweenMethod":"linearNone","tween":false,"target":24,"key":"skin","index":0},{"value":"zjh_ui/game_ui/zhajinhua/effect/bipai/00002.png","tweenMethod":"linearNone","tween":false,"target":24,"key":"skin","index":3},{"value":"zjh_ui/game_ui/zhajinhua/effect/bipai/00003.png","tweenMethod":"linearNone","tween":false,"target":24,"key":"skin","index":4},{"value":"zjh_ui/game_ui/zhajinhua/effect/bipai/00004.png","tweenMethod":"linearNone","tween":false,"target":24,"key":"skin","index":5},{"value":"zjh_ui/game_ui/zhajinhua/effect/bipai/00005.png","tweenMethod":"linearNone","tween":false,"target":24,"key":"skin","index":6},{"value":"zjh_ui/game_ui/zhajinhua/effect/bipai/00006.png","tweenMethod":"linearNone","tween":false,"target":24,"key":"skin","index":7},{"value":"zjh_ui/game_ui/zhajinhua/effect/bipai/00007.png","tweenMethod":"linearNone","tween":false,"target":24,"key":"skin","index":8},{"value":"zjh_ui/game_ui/zhajinhua/effect/bipai/00008.png","tweenMethod":"linearNone","tween":false,"target":24,"key":"skin","index":9},{"value":"zjh_ui/game_ui/zhajinhua/effect/bipai/00009.png","tweenMethod":"linearNone","tween":false,"target":24,"key":"skin","index":10},{"value":"zjh_ui/game_ui/zhajinhua/effect/bipai/00010.png","tweenMethod":"linearNone","tween":false,"target":24,"key":"skin","index":11},{"value":"zjh_ui/game_ui/zhajinhua/effect/bipai/00011.png","tweenMethod":"linearNone","tween":false,"target":24,"key":"skin","index":12},{"value":"zjh_ui/game_ui/zhajinhua/effect/bipai/00013.png","tweenMethod":"linearNone","tween":false,"target":24,"key":"skin","index":13},{"value":"zjh_ui/game_ui/zhajinhua/effect/bipai/00014.png","tweenMethod":"linearNone","tween":false,"target":24,"key":"skin","index":14},{"value":"zjh_ui/game_ui/zhajinhua/effect/bipai/00015.png","tweenMethod":"linearNone","tween":false,"target":24,"key":"skin","index":15},{"value":"zjh_ui/game_ui/zhajinhua/effect/bipai/00016.png","tweenMethod":"linearNone","tween":false,"target":24,"key":"skin","index":16}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":24,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":24,"key":"alpha","index":1},{"value":1,"tweenMethod":"linearNone","tween":true,"target":24,"key":"alpha","index":2},{"value":0,"tweenMethod":"linearNone","tween":true,"target":24,"key":"alpha","index":17}]}}],"name":"ani1","id":1,"frameRate":24,"action":1}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.nqp.game_ui.zhajinhua.BiPai1UI.uiView);
        }
    }
}

module ui.nqp.game_ui.zhajinhua {
    export class BiPai2UI extends View {
		public ani1:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"width":1280,"right":2,"height":720,"centerY":-2},"child":[{"type":"Image","props":{"y":281,"x":478,"visible":true,"skin":"zjh_ui/game_ui/zhajinhua/tu_p.png","scaleY":4,"scaleX":4,"anchorY":0.5,"anchorX":0.5,"alpha":0},"compId":20},{"type":"Image","props":{"y":416,"x":792,"visible":true,"skin":"zjh_ui/game_ui/zhajinhua/tu_k.png","scaleY":4,"scaleX":4,"anchorY":0.5,"anchorX":0.5,"alpha":0},"compId":21}]}],"animations":[{"nodes":[{"target":20,"keyframes":{"y":[{"value":311,"tweenMethod":"linearNone","tween":true,"target":20,"key":"y","index":0},{"value":311,"tweenMethod":"linearNone","tween":true,"target":20,"key":"y","index":10},{"value":281,"tweenMethod":"linearNone","tween":true,"target":20,"key":"y","index":20}],"x":[{"value":589,"tweenMethod":"linearNone","tween":true,"target":20,"key":"x","index":0},{"value":588,"tweenMethod":"linearNone","tween":true,"target":20,"label":null,"key":"x","index":10},{"value":478,"tweenMethod":"linearNone","tween":true,"target":20,"key":"x","index":20}],"visible":[{"value":false,"tweenMethod":"linearNone","tween":false,"target":20,"key":"visible","index":0},{"value":true,"tweenMethod":"linearNone","tween":false,"target":20,"label":null,"key":"visible","index":10}],"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":20,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":20,"label":null,"key":"scaleY","index":10},{"value":4,"tweenMethod":"linearNone","tween":true,"target":20,"key":"scaleY","index":20}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":20,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":20,"label":null,"key":"scaleX","index":10},{"value":4,"tweenMethod":"linearNone","tween":true,"target":20,"key":"scaleX","index":20}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":20,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":20,"key":"alpha","index":10},{"value":0,"tweenMethod":"linearNone","tween":true,"target":20,"key":"alpha","index":20}]}},{"target":21,"keyframes":{"y":[{"value":376,"tweenMethod":"linearNone","tween":true,"target":21,"key":"y","index":0},{"value":376,"tweenMethod":"linearNone","tween":true,"target":21,"label":null,"key":"y","index":10},{"value":416,"tweenMethod":"linearNone","tween":true,"target":21,"key":"y","index":20}],"x":[{"value":692,"tweenMethod":"linearNone","tween":true,"target":21,"key":"x","index":0},{"value":692,"tweenMethod":"linearNone","tween":true,"target":21,"label":null,"key":"x","index":10},{"value":792,"tweenMethod":"linearNone","tween":true,"target":21,"key":"x","index":20}],"visible":[{"value":true,"tweenMethod":"linearNone","tween":false,"target":21,"key":"visible","index":0},{"value":true,"tweenMethod":"linearNone","tween":false,"target":21,"key":"visible","index":10}],"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":21,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":21,"label":null,"key":"scaleY","index":10},{"value":4,"tweenMethod":"linearNone","tween":true,"target":21,"key":"scaleY","index":20}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":21,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":21,"label":null,"key":"scaleX","index":10},{"value":4,"tweenMethod":"linearNone","tween":true,"target":21,"key":"scaleX","index":20}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":21,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":21,"key":"alpha","index":9},{"value":1,"tweenMethod":"linearNone","tween":true,"target":21,"key":"alpha","index":10},{"value":0,"tweenMethod":"linearNone","tween":true,"target":21,"key":"alpha","index":20}]}}],"name":"ani1","id":1,"frameRate":24,"action":1}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.nqp.game_ui.zhajinhua.BiPai2UI.uiView);
        }
    }
}

module ui.nqp.game_ui.zhajinhua.component {
    export class GuZhuUI extends View {
		public ani1:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"y":0,"x":0,"width":1280,"height":720},"child":[{"type":"Image","props":{"y":340,"x":640,"skin":"tongyong_ui/game_ui/tongyong/general/gzyz_0.png","scaleY":1,"scaleX":1,"anchorY":0.5,"anchorX":0.5},"compId":3},{"type":"Image","props":{"y":329,"x":740,"skin":"tongyong_ui/game_ui/tongyong/general/gzyz_1.png","scaleY":1,"scaleX":1,"right":111.42857142857144,"mouseEnabled":true,"anchorY":0.5,"anchorX":0.5},"compId":2},{"type":"Image","props":{"y":329,"x":524,"skin":"tongyong_ui/game_ui/tongyong/general/gzyz_2.png","scaleY":1,"scaleX":1,"mouseEnabled":true,"left":111.42857142857144,"anchorY":0.5,"anchorX":0.5},"compId":5},{"type":"Image","props":{"y":241,"x":375.55,"skin":"tongyong_ui/game_ui/tongyong/general/gzyz_3.png","blendMode":"lighter","anchorY":0.5,"anchorX":0.5,"alpha":1},"compId":6},{"type":"Image","props":{"y":426.9,"x":906.35,"skin":"tongyong_ui/game_ui/tongyong/general/gzyz_3.png","blendMode":"lighter","anchorY":0.5,"anchorX":0.5,"alpha":1},"compId":7},{"type":"Image","props":{"x":628,"skin":"tongyong_ui/game_ui/tongyong/general/jiesuan_2.png","centerY":1,"blendMode":"lighter","anchorY":0.5,"anchorX":0.5,"alpha":0},"compId":8}]}],"animations":[{"nodes":[{"target":3,"keyframes":{"scaleY":[{"value":0.1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleY","index":3}],"scaleX":[{"value":2,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleX","index":3}]}},{"target":5,"keyframes":{"mouseEnabled":[{"value":false,"tweenMethod":"linearNone","tween":false,"target":5,"key":"mouseEnabled","index":0},{"value":true,"tweenMethod":"linearNone","tween":false,"target":5,"key":"mouseEnabled","index":3}],"left":[{"value":null,"tweenMethod":"linearNone","tween":false,"target":5,"key":"left","index":0},{"value":-300,"tweenMethod":"linearNone","tween":true,"target":5,"key":"left","index":3},{"value":420,"tweenMethod":"linearNone","tween":true,"target":5,"label":null,"key":"left","index":10},{"value":380,"tweenMethod":"linearNone","tween":true,"target":5,"key":"left","index":13},{"value":420,"tweenMethod":"linearNone","tween":true,"target":5,"key":"left","index":15}]}},{"target":2,"keyframes":{"right":[{"value":null,"tweenMethod":"linearNone","tween":false,"target":2,"key":"right","index":0},{"value":-300,"tweenMethod":"linearNone","tween":true,"target":2,"key":"right","index":3},{"value":420,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"right","index":10},{"value":380,"tweenMethod":"linearNone","tween":true,"target":2,"key":"right","index":13},{"value":420,"tweenMethod":"linearNone","tween":true,"target":2,"key":"right","index":15}],"mouseEnabled":[{"value":false,"tweenMethod":"linearNone","tween":false,"target":2,"key":"mouseEnabled","index":0},{"value":true,"tweenMethod":"linearNone","tween":false,"target":2,"key":"mouseEnabled","index":3}]}},{"target":6,"keyframes":{"x":[{"value":346,"tweenMethod":"linearNone","tween":true,"target":6,"key":"x","index":0},{"value":346,"tweenMethod":"linearNone","tween":true,"target":6,"label":null,"key":"x","index":6},{"value":937,"tweenMethod":"linearNone","tween":true,"target":6,"key":"x","index":26}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":6,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":6,"key":"alpha","index":5},{"value":1,"tweenMethod":"linearNone","tween":true,"target":6,"key":"alpha","index":6},{"value":1,"tweenMethod":"linearNone","tween":true,"target":6,"key":"alpha","index":16},{"value":0,"tweenMethod":"linearNone","tween":true,"target":6,"key":"alpha","index":26}]}},{"target":7,"keyframes":{"y":[{"value":427,"tweenMethod":"linearNone","tween":true,"target":7,"key":"y","index":0},{"value":427,"tweenMethod":"linearNone","tween":true,"target":7,"label":null,"key":"y","index":6},{"value":425,"tweenMethod":"linearNone","tween":true,"target":7,"key":"y","index":26}],"x":[{"value":936,"tweenMethod":"linearNone","tween":true,"target":7,"key":"x","index":0},{"value":936,"tweenMethod":"linearNone","tween":true,"target":7,"label":null,"key":"x","index":6},{"value":343,"tweenMethod":"linearNone","tween":true,"target":7,"key":"x","index":26}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":7,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":7,"key":"alpha","index":5},{"value":1,"tweenMethod":"linearNone","tween":true,"target":7,"label":null,"key":"alpha","index":6},{"value":1,"tweenMethod":"linearNone","tween":true,"target":7,"label":null,"key":"alpha","index":16},{"value":0,"tweenMethod":"linearNone","tween":true,"target":7,"label":null,"key":"alpha","index":26}]}},{"target":8,"keyframes":{"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":8,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":8,"key":"alpha","index":14},{"value":1,"tweenMethod":"linearNone","tween":true,"target":8,"key":"alpha","index":20}]}}],"name":"ani1","id":1,"frameRate":24,"action":2}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.nqp.game_ui.zhajinhua.component.GuZhuUI.uiView);
        }
    }
}

module ui.nqp.game_ui.zhajinhua.component {
    export class JianTouUI extends View {
		public ani1:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"y":4,"x":3,"width":100,"height":80},"child":[{"type":"Image","props":{"y":37,"x":60,"skin":"zjh_ui/game_ui/zhajinhua/tu_jiantou.png","anchorY":0.5,"anchorX":0.5},"compId":3}],"animations":[{"nodes":[{"target":3,"keyframes":{"x":[{"value":60,"tweenMethod":"linearNone","tween":true,"target":3,"key":"x","index":0},{"value":37,"tweenMethod":"linearNone","tween":true,"target":3,"key":"x","index":6},{"value":60,"tweenMethod":"linearNone","tween":true,"target":3,"label":null,"key":"x","index":10}]}}],"name":"ani1","id":1,"frameRate":24,"action":2}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.nqp.game_ui.zhajinhua.component.JianTouUI.uiView);
        }
    }
}

module ui.nqp.game_ui.zhajinhua.component {
    export class PKUI extends View {
		public ani1:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"width":100,"height":100},"child":[{"type":"Image","props":{"y":50,"x":50,"skin":"tongyong_ui/game_ui/tongyong/general/tu_pk.png","anchorY":0.5,"anchorX":0.5},"compId":2}],"animations":[{"nodes":[{"target":2,"keyframes":{"scaleY":[{"value":3,"tweenMethod":"bounceOut","tween":true,"target":2,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleY","index":10},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"scaleY","index":24}],"scaleX":[{"value":3,"tweenMethod":"bounceOut","tween":true,"target":2,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleX","index":10},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"scaleX","index":24}]}}],"name":"ani1","id":1,"frameRate":24,"action":1}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.nqp.game_ui.zhajinhua.component.PKUI.uiView);
        }
    }
}

module ui.nqp.game_ui.zhajinhua.component {
    export class ShuUI extends View {
		public ani1:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"width":510,"height":360},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"zjh_ui/game_ui/zhajinhua/effect/bipai/10011.png"},"compId":2}],"animations":[{"nodes":[{"target":2,"keyframes":{"skin":[{"value":"zjh_ui/game_ui/zhajinhua/effect/bipai/10001.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":0},{"value":"zjh_ui/game_ui/zhajinhua/effect/bipai/10002.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":1},{"value":"zjh_ui/game_ui/zhajinhua/effect/bipai/10003.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":2},{"value":"zjh_ui/game_ui/zhajinhua/effect/bipai/10004.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":3},{"value":"zjh_ui/game_ui/zhajinhua/effect/bipai/10005.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":4},{"value":"zjh_ui/game_ui/zhajinhua/effect/bipai/10006.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":5},{"value":"zjh_ui/game_ui/zhajinhua/effect/bipai/10007.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":6},{"value":"zjh_ui/game_ui/zhajinhua/effect/bipai/10008.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":7},{"value":"zjh_ui/game_ui/zhajinhua/effect/bipai/10009.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":8},{"value":"zjh_ui/game_ui/zhajinhua/effect/bipai/10010.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":9},{"value":"zjh_ui/game_ui/zhajinhua/effect/bipai/10011.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":10}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":2,"key":"alpha","index":11}]}}],"name":"ani1","id":1,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.nqp.game_ui.zhajinhua.component.ShuUI.uiView);
        }
    }
}

module ui.nqp.game_ui.zhajinhua.component {
    export class TouXiangUI extends View {
		public img_head:Laya.Image;
		public img_txk:Laya.Image;
		public text_name:laya.display.Text;
		public text_money:laya.display.Text;
		public img_frame:Laya.Image;
		public img_mask:Laya.Image;
		public img_qifu:Laya.Image;
		public qifu_type:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":100,"height":138},"child":[{"type":"Box","props":{"y":1,"x":1},"child":[{"type":"Image","props":{"y":-7,"x":-5,"skin":"tongyong_ui/game_ui/tongyong/general/tu_txk1.png"}},{"type":"Image","props":{"y":63,"x":49,"visible":false,"skin":"tongyong_ui/game_ui/tongyong/touxiang/tu_txk.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":64,"x":49,"var":"img_head","skin":"tongyong_ui/game_ui/tongyong/touxiang/head_0.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":14,"x":2,"var":"img_txk","skin":"tongyong_ui/game_ui/tongyong/touxiang/tu_v1.png","scaleY":0.95,"scaleX":0.95}},{"type":"Text","props":{"y":4,"x":0,"wordWrap":true,"width":100,"var":"text_name","text":"玩家名字","leading":6,"height":17,"fontSize":16,"color":"#efda8b","align":"center"}},{"type":"Text","props":{"y":108,"x":-7,"wordWrap":true,"width":110,"var":"text_money","text":"0","leading":6,"height":21,"fontSize":20,"color":"#f8ea5e","align":"center"}},{"type":"Image","props":{"y":0,"x":0,"var":"img_frame","skin":"tongyong_ui/game_ui/tongyong/general/tu_djs.png"},"child":[{"type":"Image","props":{"y":-3,"x":-3,"width":104,"var":"img_mask","renderType":"mask","height":142}}]},{"type":"Image","props":{"y":21,"x":69,"visible":false,"var":"img_qifu","skin":"tongyong_ui/game_ui/tongyong/touxiang/tu_qf.png"}},{"type":"Image","props":{"y":105,"x":50,"visible":false,"var":"qifu_type","skin":"tongyong_ui/game_ui/tongyong/qifu/f_cs2.png","scaleY":0.5,"scaleX":0.5,"anchorY":1,"anchorX":0.5}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.nqp.game_ui.zhajinhua.component.TouXiangUI.uiView);
        }
    }
}

module ui.nqp.game_ui.zhajinhua.component {
    export class WanJia_LUI extends View {
		public img_frame:ui.nqp.game_ui.zhajinhua.component.Ying_2UI;
		public view_arrow:ui.nqp.game_ui.zhajinhua.component.JianTouUI;

        public static  uiView:any ={"type":"View","props":{"width":370,"height":180},"child":[{"type":"Ying_2","props":{"y":43,"x":94,"var":"img_frame","runtime":"ui.nqp.game_ui.zhajinhua.component.Ying_2UI"}},{"type":"JianTou","props":{"y":116,"x":319,"var":"view_arrow","anchorY":0.5,"anchorX":0.5,"runtime":"ui.nqp.game_ui.zhajinhua.component.JianTouUI"}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.nqp.game_ui.zhajinhua.component.Ying_2UI",ui.nqp.game_ui.zhajinhua.component.Ying_2UI);
			View.regComponent("ui.nqp.game_ui.zhajinhua.component.JianTouUI",ui.nqp.game_ui.zhajinhua.component.JianTouUI);

            super.createChildren();
            this.createView(ui.nqp.game_ui.zhajinhua.component.WanJia_LUI.uiView);
        }
    }
}

module ui.nqp.game_ui.zhajinhua.component {
    export class WanJia_RUI extends View {
		public img_frame:ui.nqp.game_ui.zhajinhua.component.Ying_2UI;
		public view_arrow:ui.nqp.game_ui.zhajinhua.component.JianTouUI;

        public static  uiView:any ={"type":"View","props":{"width":370,"height":180},"child":[{"type":"Ying_2","props":{"y":43,"x":87,"var":"img_frame","runtime":"ui.nqp.game_ui.zhajinhua.component.Ying_2UI"}},{"type":"JianTou","props":{"y":75,"x":90,"var":"view_arrow","scaleX":-1,"runtime":"ui.nqp.game_ui.zhajinhua.component.JianTouUI"}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.nqp.game_ui.zhajinhua.component.Ying_2UI",ui.nqp.game_ui.zhajinhua.component.Ying_2UI);
			View.regComponent("ui.nqp.game_ui.zhajinhua.component.JianTouUI",ui.nqp.game_ui.zhajinhua.component.JianTouUI);

            super.createChildren();
            this.createView(ui.nqp.game_ui.zhajinhua.component.WanJia_RUI.uiView);
        }
    }
}

module ui.nqp.game_ui.zhajinhua.component {
    export class XiQianUI extends View {
		public clip_num0:Laya.Clip;
		public clip_num1:Laya.Clip;
		public clip_num2:Laya.Clip;

        public static  uiView:any ={"type":"View","props":{"width":360,"height":360},"child":[{"type":"Box","props":{"y":360,"x":640,"width":360,"height":360,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":360,"x":640,"skin":"zjh_ui/game_ui/zhajinhua/tu_xq.png","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Clip","props":{"y":190,"x":121,"var":"clip_num0","skin":"zjh_ui/game_ui/zhajinhua/clip_xq.png","clipX":10,"anchorY":0.5,"anchorX":0.5}},{"type":"Clip","props":{"y":191,"x":182,"width":24,"var":"clip_num1","skin":"zjh_ui/game_ui/zhajinhua/clip_xq.png","pivotY":18,"pivotX":13,"height":33,"clipX":10}},{"type":"Clip","props":{"y":190,"x":241,"var":"clip_num2","skin":"zjh_ui/game_ui/zhajinhua/clip_xq.png","clipX":10,"anchorY":0.5,"anchorX":0.5}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.nqp.game_ui.zhajinhua.component.XiQianUI.uiView);
        }
    }
}

module ui.nqp.game_ui.zhajinhua.component {
    export class YingUI extends View {
		public ani1:Laya.FrameAnimation;
		public img_win:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":120,"height":120},"child":[{"type":"Image","props":{"var":"img_win","skin":"zjh_ui/game_ui/zhajinhua/tu_ying2.png","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"compId":2}],"animations":[{"nodes":[{"target":2,"keyframes":{"x":[{"value":60,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":0},{"value":60,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":45}],"scaleY":[{"value":2,"tweenMethod":"backOut","tween":true,"target":2,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleY","index":30}],"scaleX":[{"value":2,"tweenMethod":"backOut","tween":true,"target":2,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleX","index":30}]}}],"name":"ani1","id":1,"frameRate":24,"action":1}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.nqp.game_ui.zhajinhua.component.YingUI.uiView);
        }
    }
}

module ui.nqp.game_ui.zhajinhua.component {
    export class Ying_1UI extends View {
		public ani1:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"width":400,"height":300},"child":[{"type":"Image","props":{"y":194,"x":197,"skin":"zjh_ui/game_ui/zhajinhua/tu_ying.png","anchorY":0.5,"anchorX":0.5},"compId":2},{"type":"Image","props":{"y":120,"x":196,"skin":"zjh_ui/game_ui/zhajinhua/tu_ying1.png","anchorY":0.5,"anchorX":0.5},"compId":3},{"type":"Image","props":{"y":125,"x":197,"skin":"zjh_ui/game_ui/zhajinhua/effect/yanhua/10001.png","blendMode":"lighter","anchorY":0.5,"anchorX":0.5},"compId":4}],"animations":[{"nodes":[{"target":2,"keyframes":{"scaleY":[{"value":1.5,"tweenMethod":"backOut","tween":true,"target":2,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleY","index":10}],"scaleX":[{"value":1.5,"tweenMethod":"backOut","tween":true,"target":2,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleX","index":10}]}},{"target":3,"keyframes":{"scaleY":[{"value":1,"tweenMethod":"backOut","tween":true,"target":3,"key":"scaleY","index":0},{"value":0.5,"tweenMethod":"backOut","tween":true,"target":3,"key":"scaleY","index":5},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleY","index":10},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"label":null,"key":"scaleY","index":20},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"label":null,"key":"scaleY","index":25}],"scaleX":[{"value":1,"tweenMethod":"backOut","tween":true,"target":3,"key":"scaleX","index":0},{"value":0.5,"tweenMethod":"backOut","tween":true,"target":3,"key":"scaleX","index":5},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleX","index":10},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"label":null,"key":"scaleX","index":20},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"label":null,"key":"scaleX","index":25}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":4},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":5},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"label":null,"key":"alpha","index":20},{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":25}]}},{"target":4,"keyframes":{"visible":[{"value":false,"tweenMethod":"linearNone","tween":false,"target":4,"key":"visible","index":0},{"value":true,"tweenMethod":"linearNone","tween":false,"target":4,"key":"visible","index":5}],"skin":[{"value":"zjh_ui/game_ui/zhajinhua/effect/yanhua/10001.png","tweenMethod":"linearNone","tween":false,"target":4,"key":"skin","index":0},{"value":"zjh_ui/game_ui/zhajinhua/effect/yanhua/10002.png","tweenMethod":"linearNone","tween":false,"target":4,"key":"skin","index":6},{"value":"zjh_ui/game_ui/zhajinhua/effect/yanhua/10003.png","tweenMethod":"linearNone","tween":false,"target":4,"key":"skin","index":7},{"value":"zjh_ui/game_ui/zhajinhua/effect/yanhua/10004.png","tweenMethod":"linearNone","tween":false,"target":4,"key":"skin","index":8},{"value":"zjh_ui/game_ui/zhajinhua/effect/yanhua/10005.png","tweenMethod":"linearNone","tween":false,"target":4,"key":"skin","index":9},{"value":"zjh_ui/game_ui/zhajinhua/effect/yanhua/10006.png","tweenMethod":"linearNone","tween":false,"target":4,"key":"skin","index":10},{"value":"zjh_ui/game_ui/zhajinhua/effect/yanhua/10007.png","tweenMethod":"linearNone","tween":false,"target":4,"key":"skin","index":11},{"value":"zjh_ui/game_ui/zhajinhua/effect/yanhua/10008.png","tweenMethod":"linearNone","tween":false,"target":4,"key":"skin","index":12},{"value":"zjh_ui/game_ui/zhajinhua/effect/yanhua/10009.png","tweenMethod":"linearNone","tween":false,"target":4,"key":"skin","index":13},{"value":"zjh_ui/game_ui/zhajinhua/effect/yanhua/10010.png","tweenMethod":"linearNone","tween":false,"target":4,"key":"skin","index":14},{"value":"zjh_ui/game_ui/zhajinhua/effect/yanhua/10011.png","tweenMethod":"linearNone","tween":false,"target":4,"key":"skin","index":15},{"value":"zjh_ui/game_ui/zhajinhua/effect/yanhua/10012.png","tweenMethod":"linearNone","tween":false,"target":4,"key":"skin","index":16},{"value":"zjh_ui/game_ui/zhajinhua/effect/yanhua/10013.png","tweenMethod":"linearNone","tween":false,"target":4,"key":"skin","index":17},{"value":"zjh_ui/game_ui/zhajinhua/effect/yanhua/10014.png","tweenMethod":"linearNone","tween":false,"target":4,"key":"skin","index":18},{"value":"zjh_ui/game_ui/zhajinhua/effect/yanhua/10015.png","tweenMethod":"linearNone","tween":false,"target":4,"key":"skin","index":19},{"value":"zjh_ui/game_ui/zhajinhua/effect/yanhua/10016.png","tweenMethod":"linearNone","tween":false,"target":4,"key":"skin","index":20},{"value":"zjh_ui/game_ui/zhajinhua/effect/yanhua/10017.png","tweenMethod":"linearNone","tween":false,"target":4,"key":"skin","index":21},{"value":"zjh_ui/game_ui/zhajinhua/effect/yanhua/10018.png","tweenMethod":"linearNone","tween":false,"target":4,"key":"skin","index":22},{"value":"zjh_ui/game_ui/zhajinhua/effect/yanhua/10019.png","tweenMethod":"linearNone","tween":false,"target":4,"key":"skin","index":23},{"value":"zjh_ui/game_ui/zhajinhua/effect/yanhua/10020.png","tweenMethod":"linearNone","tween":false,"target":4,"key":"skin","index":24},{"value":"zjh_ui/game_ui/zhajinhua/effect/yanhua/10021.png","tweenMethod":"linearNone","tween":false,"target":4,"key":"skin","index":25}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":4,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":4,"key":"alpha","index":25}]}}],"name":"ani1","id":1,"frameRate":24,"action":1}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.nqp.game_ui.zhajinhua.component.Ying_1UI.uiView);
        }
    }
}

module ui.nqp.game_ui.zhajinhua.component {
    export class Ying_2UI extends View {
		public ani1:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"width":190,"height":138},"child":[{"type":"Image","props":{"width":190,"skin":"zjh_ui/game_ui/zhajinhua/tu_ying.png","sizeGrid":"30,30,30,30","height":138,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"compId":2},{"type":"Image","props":{"y":10,"x":10,"width":190,"skin":"zjh_ui/game_ui/zhajinhua/tu_ying.png","sizeGrid":"30,30,30,30","height":138,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5,"alpha":0},"compId":3}],"animations":[{"nodes":[{"target":2,"keyframes":{"scaleY":[{"value":2,"tweenMethod":"backInOut","tween":true,"target":2,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleY","index":5},{"value":1.5,"tweenMethod":"backInOut","tween":true,"target":2,"label":null,"key":"scaleY","index":10}],"scaleX":[{"value":2,"tweenMethod":"backInOut","tween":true,"target":2,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleX","index":5},{"value":1.5,"tweenMethod":"backInOut","tween":true,"target":2,"label":null,"key":"scaleX","index":10}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"alpha","index":5},{"value":0,"tweenMethod":"linearNone","tween":true,"target":2,"key":"alpha","index":10}]}},{"target":3,"keyframes":{"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":10},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":15}]}}],"name":"ani1","id":1,"frameRate":24,"action":1}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.nqp.game_ui.zhajinhua.component.Ying_2UI.uiView);
        }
    }
}

module ui.nqp.game_ui.zhajinhua {
    export class ZhaJinHuaUI extends View {
		public ani1:Laya.FrameAnimation;
		public box_view:Laya.Box;
		public view_paihe:ui.nqp.game_ui.tongyong.PaiXeiUI;
		public view_paixie:ui.nqp.game_ui.tongyong.FaPaiUI;
		public text_info:laya.display.Text;
		public box_jackpot:Laya.Box;
		public text_money:laya.display.Text;
		public text_round:laya.display.Text;
		public btn_giveup:Laya.Button;
		public btn_auto:Laya.Button;
		public img_ani1:Laya.Image;
		public btn_compare:Laya.Button;
		public btn_call:Laya.Button;
		public btn_add:Laya.Button;
		public box_chip0:Laya.Box;
		public text_total0:laya.display.Text;
		public box_chip1:Laya.Box;
		public text_total1:laya.display.Text;
		public box_chip2:Laya.Box;
		public text_total2:laya.display.Text;
		public box_chip3:Laya.Box;
		public text_total3:laya.display.Text;
		public box_chip4:Laya.Box;
		public text_total4:laya.display.Text;
		public view_win:ui.nqp.game_ui.zhajinhua.component.Ying_1UI;
		public box_see:Laya.Box;
		public text_see:laya.display.Text;
		public box_opt0:Laya.Box;
		public text_opt0:laya.display.Text;
		public box_opt1:Laya.Box;
		public text_opt1:laya.display.Text;
		public box_opt2:Laya.Box;
		public text_opt2:laya.display.Text;
		public box_opt3:Laya.Box;
		public text_opt3:laya.display.Text;
		public box_opt4:Laya.Box;
		public text_opt4:laya.display.Text;
		public img_type:Laya.Image;
		public text_type:laya.display.Text;
		public text_roomtype:laya.display.Text;
		public text_maxchip:laya.display.Text;
		public btn_xiqian:Laya.Button;
		public img_xiqian:Laya.Image;
		public view_guzhu:ui.nqp.game_ui.zhajinhua.component.GuZhuUI;
		public view_compare:ui.nqp.game_ui.zhajinhua.BiPaiUI;
		public view_head0:ui.nqp.game_ui.zhajinhua.component.TouXiangUI;
		public view_head1:ui.nqp.game_ui.zhajinhua.component.TouXiangUI;
		public view_head2:ui.nqp.game_ui.zhajinhua.component.TouXiangUI;
		public view_head3:ui.nqp.game_ui.zhajinhua.component.TouXiangUI;
		public view_head4:ui.nqp.game_ui.zhajinhua.component.TouXiangUI;
		public img_choose:Laya.Image;
		public btn_chip0:Laya.Button;
		public btn_chip1:Laya.Button;
		public btn_chip2:Laya.Button;
		public btn_chip3:Laya.Button;
		public view_player3:ui.nqp.game_ui.zhajinhua.component.WanJia_LUI;
		public view_player4:ui.nqp.game_ui.zhajinhua.component.WanJia_LUI;
		public view_player1:ui.nqp.game_ui.zhajinhua.component.WanJia_RUI;
		public view_player2:ui.nqp.game_ui.zhajinhua.component.WanJia_RUI;
		public view_bipai1:ui.nqp.game_ui.zhajinhua.BiPai1UI;
		public view_effect0:ui.nqp.game_ui.zhajinhua.component.ShuUI;
		public view_effect1:ui.nqp.game_ui.zhajinhua.component.ShuUI;
		public view_pk:ui.nqp.game_ui.zhajinhua.BiPai2UI;
		public view_pk0:ui.nqp.game_ui.zhajinhua.component.PKUI;
		public view_pk1:ui.nqp.game_ui.zhajinhua.component.PKUI;
		public view_pk2:ui.nqp.game_ui.zhajinhua.component.PKUI;
		public view_pk3:ui.nqp.game_ui.zhajinhua.component.PKUI;
		public view_pk4:ui.nqp.game_ui.zhajinhua.component.PKUI;
		public view_shu4:ui.nqp.game_ui.zhajinhua.component.ShuUI;
		public view_shu3:ui.nqp.game_ui.zhajinhua.component.ShuUI;
		public view_shu1:ui.nqp.game_ui.zhajinhua.component.ShuUI;
		public view_shu2:ui.nqp.game_ui.zhajinhua.component.ShuUI;
		public view_shu0:ui.nqp.game_ui.zhajinhua.component.ShuUI;
		public view_xipai:ui.nqp.game_ui.tongyong.effect.XiPaiUI;
		public btn_continue:Laya.Button;
		public img_menu:Laya.Image;
		public btn_rules:Laya.Button;
		public btn_cardtype:Laya.Button;
		public btn_set:Laya.Button;
		public btn_record:Laya.Button;
		public btn_menu:Laya.Button;
		public btn_closen:Laya.Button;
		public btn_qifu:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"y":360,"x":640,"width":1280,"var":"box_view","mouseEnabled":true,"height":720,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"PaiXei","props":{"y":115,"x":805,"var":"view_paihe","runtime":"ui.nqp.game_ui.tongyong.PaiXeiUI"}},{"type":"Box","props":{"y":184,"width":192,"height":184,"centerX":0,"anchorY":1,"anchorX":0.5},"child":[{"type":"SkeletonPlayer","props":{"y":155,"x":92,"url":"tongyong_ui/game_ui/tongyong/sk/HeGuan2.sk"}}]},{"type":"FaPai","props":{"y":166,"x":789,"var":"view_paixie","runtime":"ui.nqp.game_ui.tongyong.FaPaiUI"}},{"type":"Text","props":{"y":23,"x":88,"width":333,"var":"text_info","text":"牌局号：1532315641561321231313 ","leading":6,"height":25,"fontSize":20,"color":"#dadada"}},{"type":"Box","props":{"y":174,"x":548,"var":"box_jackpot"},"child":[{"type":"Image","props":{"y":5,"x":21,"skin":"tongyong_ui/game_ui/tongyong/general/tu_k2.png"}},{"type":"Image","props":{"y":-5,"x":0,"skin":"zjh_ui/game_ui/zhajinhua/tu_cm.png"}},{"type":"Text","props":{"y":8,"x":41,"wordWrap":true,"width":110,"var":"text_money","text":"500.00","leading":6,"height":30,"fontSize":26,"color":"#ffff60","align":"center"}},{"type":"Text","props":{"y":54,"x":40,"wordWrap":true,"width":110,"var":"text_round","text":"00/00轮","leading":6,"height":22,"fontSize":20,"color":"#073f24","align":"center"}}]},{"type":"Button","props":{"y":644,"var":"btn_giveup","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_2.png","labelStrokeColor":"#7e2314","labelStroke":2,"labelSize":26,"labelColors":"#ffffff","labelBold":true,"label":"弃牌","centerX":-133}},{"type":"Button","props":{"y":644,"var":"btn_auto","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_3.png","labelStrokeColor":"#289e3b","labelStroke":2,"labelSize":26,"labelColors":"#ffffff","labelBold":true,"label":"自动跟注","centerX":163},"child":[{"type":"Image","props":{"y":31,"x":85,"visible":true,"var":"img_ani1","skin":"zjh_ui/game_ui/zhajinhua/effect/btn/00001.png","blendMode":"lighter","anchorY":0.5,"anchorX":0.5,"alpha":0},"compId":105}]},{"type":"Button","props":{"y":644,"var":"btn_compare","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_3.png","labelStrokeColor":"#535353","labelStroke":2,"labelSize":26,"labelColors":"#ffffff","labelBold":true,"label":"比牌","centerX":163}},{"type":"Button","props":{"y":644,"var":"btn_call","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_3.png","labelStrokeColor":"#289e3b","labelStroke":2,"labelSize":26,"labelColors":"#ffffff","labelBold":true,"label":"跟注","centerX":337}},{"type":"Button","props":{"y":644,"var":"btn_add","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_5.png","labelStrokeColor":"#9d8c27","labelStroke":2,"labelSize":26,"labelColors":"#ffffff","labelBold":true,"label":"加注","centerX":524}},{"type":"Box","props":{"y":445,"x":640,"var":"box_chip0","centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"width":122,"skin":"tongyong_ui/game_ui/tongyong/general/tu_k2.png","sizeGrid":"0,20,0,20","scaleY":0.7,"scaleX":0.7,"height":36}},{"type":"Text","props":{"y":3,"wordWrap":true,"width":86,"var":"text_total0","text":"500.00","leading":6,"height":20,"fontSize":18,"color":"#ffff60","align":"center"}}]},{"type":"Box","props":{"y":391,"width":86,"var":"box_chip1","height":25.2,"centerX":427,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"width":122,"skin":"tongyong_ui/game_ui/tongyong/general/tu_k2.png","sizeGrid":"0,20,0,20","scaleY":0.7,"scaleX":0.7,"height":36}},{"type":"Text","props":{"y":3,"wordWrap":true,"width":86,"var":"text_total1","text":"500.00","leading":6,"height":20,"fontSize":18,"color":"#ffff60","align":"center"}}]},{"type":"Box","props":{"y":193,"var":"box_chip2","centerX":427,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"width":122,"skin":"tongyong_ui/game_ui/tongyong/general/tu_k2.png","sizeGrid":"0,20,0,20","scaleY":0.7,"scaleX":0.7,"height":36}},{"type":"Text","props":{"y":3,"wordWrap":true,"width":86,"var":"text_total2","text":"500.00","leading":6,"height":20,"fontSize":18,"color":"#ffff60","align":"center"}}]},{"type":"Box","props":{"y":193,"var":"box_chip3","centerX":-432,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"width":122,"skin":"tongyong_ui/game_ui/tongyong/general/tu_k2.png","sizeGrid":"0,20,0,20","scaleY":0.7,"scaleX":0.7,"height":36}},{"type":"Text","props":{"y":3,"wordWrap":true,"width":86,"var":"text_total3","text":"500.00","leading":6,"height":20,"fontSize":18,"color":"#ffff60","align":"center"}}]},{"type":"Box","props":{"y":391,"var":"box_chip4","centerX":-432,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"width":122,"skin":"tongyong_ui/game_ui/tongyong/general/tu_k2.png","sizeGrid":"0,20,0,20","scaleY":0.7,"scaleX":0.7,"height":36}},{"type":"Text","props":{"y":3,"wordWrap":true,"width":86,"var":"text_total4","text":"500.00","leading":6,"height":20,"fontSize":18,"color":"#ffff60","align":"center"}}]},{"type":"Ying_1","props":{"y":351,"x":441,"var":"view_win","runtime":"ui.nqp.game_ui.zhajinhua.component.Ying_1UI"}},{"type":"Box","props":{"y":541,"x":638,"width":332,"var":"box_see","height":45,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"width":150,"skin":"zjh_ui/game_ui/zhajinhua/tu_kp.png","sizeGrid":"0,27,0,24","height":43,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5,"alpha":0.5}},{"type":"Text","props":{"y":10,"x":108,"wordWrap":true,"width":110,"var":"text_see","text":"点击看牌","leading":6,"height":30,"fontSize":22,"color":"#ffffff","align":"center"}}]},{"type":"Box","props":{"y":515,"x":812,"var":"box_opt0"},"child":[{"type":"Image","props":{"skin":"zjh_ui/game_ui/zhajinhua/tu_cz.png"}},{"type":"Text","props":{"y":9,"x":4,"wordWrap":true,"width":86,"var":"text_opt0","text":"弃 牌","leading":6,"height":22,"fontSize":20,"color":"#dadada","align":"center"}}]},{"type":"Box","props":{"y":366,"x":891,"var":"box_opt1"},"child":[{"type":"Image","props":{"x":95,"skin":"zjh_ui/game_ui/zhajinhua/tu_cz.png","scaleX":-1}},{"type":"Text","props":{"y":9,"x":4,"wordWrap":true,"width":86,"var":"text_opt1","text":"弃 牌","leading":6,"height":22,"fontSize":20,"color":"#dadada","align":"center"}}]},{"type":"Box","props":{"y":168,"x":890,"var":"box_opt2"},"child":[{"type":"Image","props":{"x":95,"skin":"zjh_ui/game_ui/zhajinhua/tu_cz.png","scaleX":-1}},{"type":"Text","props":{"y":9,"x":4,"wordWrap":true,"width":86,"var":"text_opt2","text":"弃 牌","leading":6,"height":22,"fontSize":20,"color":"#dadada","align":"center"}}]},{"type":"Box","props":{"y":168,"x":287,"var":"box_opt3"},"child":[{"type":"Image","props":{"skin":"zjh_ui/game_ui/zhajinhua/tu_cz.png"}},{"type":"Text","props":{"y":9,"x":4,"wordWrap":true,"width":86,"var":"text_opt3","text":"弃 牌","leading":6,"height":22,"fontSize":20,"color":"#dadada","align":"center"}}]},{"type":"Box","props":{"y":365,"x":288,"var":"box_opt4"},"child":[{"type":"Image","props":{"skin":"zjh_ui/game_ui/zhajinhua/tu_cz.png"}},{"type":"Text","props":{"y":9,"x":4,"wordWrap":true,"width":86,"var":"text_opt4","text":"弃 牌","leading":6,"height":22,"fontSize":20,"color":"#dadada","align":"center"}}]},{"type":"Image","props":{"y":594,"var":"img_type","skin":"zjh_ui/game_ui/zhajinhua/tu_bm.png","centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Text","props":{"y":10,"x":10,"wordWrap":true,"width":326,"var":"text_type","text":"顺子","leading":6,"height":34,"fontSize":30,"color":"#ffffff","bold":true,"align":"center"}}]},{"type":"Text","props":{"y":48,"x":88,"width":170,"var":"text_roomtype","text":"试玩场：底注：1","leading":6,"height":25,"fontSize":20,"color":"#dadada"}},{"type":"Text","props":{"y":48,"x":259,"width":153,"var":"text_maxchip","text":" 单注上数：10","leading":6,"height":25,"fontSize":20,"color":"#dadada"}},{"type":"Button","props":{"y":49,"x":1048,"var":"btn_xiqian","stateNum":1,"skin":"zjh_ui/game_ui/zhajinhua/btn_xq.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":12,"x":1030,"width":302,"var":"img_xiqian","skin":"zjh_ui/game_ui/zhajinhua/tu_kk.png","sizeGrid":"20,0,84,0","height":108,"anchorY":0,"anchorX":1},"child":[{"type":"Label","props":{"y":18,"x":28,"width":247,"text":"拿到豹子本局结束后， \\n无论输赢都会获得一定金额 \\n的喜钱，喜钱不会被抽水。","leading":4,"height":72,"fontSize":20,"color":"#f9f3ab"}}]},{"type":"GuZhu","props":{"y":0,"x":0,"var":"view_guzhu","runtime":"ui.nqp.game_ui.zhajinhua.component.GuZhuUI"}},{"type":"BiPai","props":{"y":360,"x":640,"var":"view_compare","anchorY":0.5,"anchorX":0.5,"runtime":"ui.nqp.game_ui.zhajinhua.BiPaiUI"}},{"type":"TouXiang","props":{"y":569,"x":239,"var":"view_head0","runtime":"ui.nqp.game_ui.zhajinhua.component.TouXiangUI"}},{"type":"TouXiang","props":{"y":390,"x":1156,"var":"view_head1","runtime":"ui.nqp.game_ui.zhajinhua.component.TouXiangUI"}},{"type":"TouXiang","props":{"y":191,"x":1156,"var":"view_head2","runtime":"ui.nqp.game_ui.zhajinhua.component.TouXiangUI"}},{"type":"TouXiang","props":{"y":191,"x":18,"var":"view_head3","runtime":"ui.nqp.game_ui.zhajinhua.component.TouXiangUI"}},{"type":"TouXiang","props":{"y":390,"x":18,"var":"view_head4","runtime":"ui.nqp.game_ui.zhajinhua.component.TouXiangUI"}},{"type":"Image","props":{"y":503,"x":824,"var":"img_choose","skin":"zjh_ui/game_ui/zhajinhua/tu_cz1.png"},"child":[{"type":"Button","props":{"y":57,"x":66,"var":"btn_chip0","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/tu_cm1.png","scaleY":0.8,"scaleX":0.8,"labelStrokeColor":"#000000","labelStroke":4,"labelSize":36,"labelPadding":"-2","labelColors":"#ffffff","labelBold":true,"label":"00","anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":57,"x":171,"var":"btn_chip1","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/tu_cm2.png","scaleY":0.8,"scaleX":0.8,"labelStrokeColor":"#000000","labelStroke":4,"labelSize":36,"labelPadding":"-2","labelColors":"#ffffff","labelBold":true,"label":"00","anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":57,"x":276,"var":"btn_chip2","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/tu_cm3.png","scaleY":0.8,"scaleX":0.8,"labelStrokeColor":"#000000","labelStroke":4,"labelSize":36,"labelPadding":"-2","labelColors":"#ffffff","labelBold":true,"label":"00","anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":57,"x":381,"var":"btn_chip3","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/tu_cm4.png","scaleY":0.8,"scaleX":0.8,"labelStrokeColor":"#000000","labelStroke":4,"labelSize":36,"labelPadding":"-2","labelColors":"#ffffff","labelBold":true,"label":"00","anchorY":0.5,"anchorX":0.5}}]},{"type":"WanJia_L","props":{"y":161,"x":17,"var":"view_player3","runtime":"ui.nqp.game_ui.zhajinhua.component.WanJia_LUI"}},{"type":"WanJia_L","props":{"y":359,"x":17,"var":"view_player4","runtime":"ui.nqp.game_ui.zhajinhua.component.WanJia_LUI"}},{"type":"WanJia_R","props":{"y":359,"x":885,"var":"view_player1","runtime":"ui.nqp.game_ui.zhajinhua.component.WanJia_RUI"}},{"type":"WanJia_R","props":{"y":161,"x":885,"var":"view_player2","runtime":"ui.nqp.game_ui.zhajinhua.component.WanJia_RUI"}},{"type":"BiPai1","props":{"y":360,"x":640,"var":"view_bipai1","anchorY":0.5,"anchorX":0.5,"runtime":"ui.nqp.game_ui.zhajinhua.BiPai1UI"}},{"type":"Shu","props":{"y":132,"x":64,"var":"view_effect0","blendMode":"lighter","runtime":"ui.nqp.game_ui.zhajinhua.component.ShuUI"}},{"type":"Shu","props":{"y":189,"x":758,"var":"view_effect1","blendMode":"lighter","runtime":"ui.nqp.game_ui.zhajinhua.component.ShuUI"}},{"type":"BiPai2","props":{"y":360,"x":638,"var":"view_pk","anchorY":0.5,"anchorX":0.5,"runtime":"ui.nqp.game_ui.zhajinhua.BiPai2UI"}},{"type":"PK","props":{"y":588,"x":339,"var":"view_pk0","runtime":"ui.nqp.game_ui.zhajinhua.component.PKUI"}},{"type":"PK","props":{"y":421,"x":865,"var":"view_pk1","runtime":"ui.nqp.game_ui.zhajinhua.component.PKUI"}},{"type":"PK","props":{"y":222,"x":865,"var":"view_pk2","runtime":"ui.nqp.game_ui.zhajinhua.component.PKUI"}},{"type":"PK","props":{"y":222,"x":308,"var":"view_pk3","runtime":"ui.nqp.game_ui.zhajinhua.component.PKUI"}},{"type":"PK","props":{"y":421,"x":308,"var":"view_pk4","runtime":"ui.nqp.game_ui.zhajinhua.component.PKUI"}},{"type":"Shu","props":{"y":287,"x":-27,"var":"view_shu4","blendMode":"lighter","runtime":"ui.nqp.game_ui.zhajinhua.component.ShuUI"}},{"type":"Shu","props":{"y":87,"x":-27,"var":"view_shu3","blendMode":"lighter","runtime":"ui.nqp.game_ui.zhajinhua.component.ShuUI"}},{"type":"Shu","props":{"y":287,"x":833,"var":"view_shu1","blendMode":"lighter","runtime":"ui.nqp.game_ui.zhajinhua.component.ShuUI"}},{"type":"Shu","props":{"y":87,"x":833,"var":"view_shu2","blendMode":"lighter","runtime":"ui.nqp.game_ui.zhajinhua.component.ShuUI"}},{"type":"Shu","props":{"y":363,"x":400,"var":"view_shu0","blendMode":"lighter","runtime":"ui.nqp.game_ui.zhajinhua.component.ShuUI"}},{"type":"XiPai","props":{"y":200,"x":480,"var":"view_xipai","runtime":"ui.nqp.game_ui.tongyong.effect.XiPaiUI"}},{"type":"Button","props":{"y":400,"x":640,"width":240,"var":"btn_continue","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_5.png","sizeGrid":"0,20,0,20","labelStrokeColor":"#9d8c27","labelStroke":2,"labelSize":26,"labelColors":"#ffffff","labelBold":true,"label":"继续游戏","height":59,"centerY":40,"centerX":0,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Image","props":{"width":180,"var":"img_menu","top":0,"skin":"tongyong_ui/game_ui/tongyong/general/cd_1.png","sizeGrid":"20,20,20,20","left":10,"height":293,"anchorY":0,"anchorX":0},"child":[{"type":"Image","props":{"y":74,"x":11,"width":160,"skin":"tongyong_ui/game_ui/tongyong/general/cd_2.png"}},{"type":"Image","props":{"y":146,"x":11,"width":160,"skin":"tongyong_ui/game_ui/tongyong/general/cd_2.png"}},{"type":"Image","props":{"y":215,"x":11,"width":160,"skin":"tongyong_ui/game_ui/tongyong/general/cd_2.png"}},{"type":"Button","props":{"y":87,"x":14,"var":"btn_rules","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_gz.png"}},{"type":"Button","props":{"y":16,"x":14,"var":"btn_cardtype","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_px.png"}},{"type":"Button","props":{"y":225,"x":14,"var":"btn_set","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_sz.png"}},{"type":"Button","props":{"y":155,"x":14,"var":"btn_record","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_zj.png"}}]},{"type":"Button","props":{"var":"btn_menu","top":16,"stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_cd.png","left":16,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"var":"btn_closen","top":16,"stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_fh1.png","right":16,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":222,"x":1329,"var":"btn_qifu","top":16,"stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_qf.png","right":85,"anchorY":0.5,"anchorX":0.5}}],"animations":[{"nodes":[{"target":105,"keyframes":{"y":[{"value":28,"tweenMethod":"linearNone","tween":true,"target":105,"key":"y","index":0},{"value":28,"tweenMethod":"linearNone","tween":true,"target":105,"key":"y","index":1}],"skin":[{"value":"zjh_ui/game_ui/zhajinhua/effect/btn/00001.png","tweenMethod":"linearNone","tween":false,"target":105,"key":"skin","index":0},{"value":"zjh_ui/game_ui/zhajinhua/effect/btn/00002.png","tweenMethod":"linearNone","tween":false,"target":105,"key":"skin","index":1},{"value":"zjh_ui/game_ui/zhajinhua/effect/btn/00003.png","tweenMethod":"linearNone","tween":false,"target":105,"key":"skin","index":2},{"value":"zjh_ui/game_ui/zhajinhua/effect/btn/00004.png","tweenMethod":"linearNone","tween":false,"target":105,"key":"skin","index":3},{"value":"zjh_ui/game_ui/zhajinhua/effect/btn/00005.png","tweenMethod":"linearNone","tween":false,"target":105,"key":"skin","index":4},{"value":"zjh_ui/game_ui/zhajinhua/effect/btn/00006.png","tweenMethod":"linearNone","tween":false,"target":105,"key":"skin","index":5},{"value":"zjh_ui/game_ui/zhajinhua/effect/btn/00007.png","tweenMethod":"linearNone","tween":false,"target":105,"key":"skin","index":6},{"value":"zjh_ui/game_ui/zhajinhua/effect/btn/00008.png","tweenMethod":"linearNone","tween":false,"target":105,"key":"skin","index":7},{"value":"zjh_ui/game_ui/zhajinhua/effect/btn/00009.png","tweenMethod":"linearNone","tween":false,"target":105,"key":"skin","index":8},{"value":"zjh_ui/game_ui/zhajinhua/effect/btn/00010.png","tweenMethod":"linearNone","tween":false,"target":105,"key":"skin","index":9}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":105,"key":"alpha","index":0}]}}],"name":"ani1","id":1,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.nqp.game_ui.tongyong.PaiXeiUI",ui.nqp.game_ui.tongyong.PaiXeiUI);
			View.regComponent("ui.nqp.game_ui.tongyong.effect.XiPaiUI",ui.nqp.game_ui.tongyong.effect.XiPaiUI);
			View.regComponent("ui.nqp.game_ui.tongyong.FaPaiUI",ui.nqp.game_ui.tongyong.FaPaiUI);
			View.regComponent("Text",laya.display.Text);
			View.regComponent("ui.nqp.game_ui.zhajinhua.component.Ying_1UI",ui.nqp.game_ui.zhajinhua.component.Ying_1UI);
			View.regComponent("ui.nqp.game_ui.zhajinhua.component.GuZhuUI",ui.nqp.game_ui.zhajinhua.component.GuZhuUI);
			View.regComponent("ui.nqp.game_ui.zhajinhua.BiPaiUI",ui.nqp.game_ui.zhajinhua.BiPaiUI);
			View.regComponent("SkeletonPlayer",laya.ani.bone.Skeleton);
			View.regComponent("ui.nqp.game_ui.zhajinhua.component.WanJia_LUI",ui.nqp.game_ui.zhajinhua.component.WanJia_LUI);
			View.regComponent("ui.nqp.game_ui.zhajinhua.component.WanJia_RUI",ui.nqp.game_ui.zhajinhua.component.WanJia_RUI);
			View.regComponent("ui.nqp.game_ui.zhajinhua.BiPai1UI",ui.nqp.game_ui.zhajinhua.BiPai1UI);
			View.regComponent("ui.nqp.game_ui.zhajinhua.component.ShuUI",ui.nqp.game_ui.zhajinhua.component.ShuUI);
			View.regComponent("ui.nqp.game_ui.zhajinhua.BiPai2UI",ui.nqp.game_ui.zhajinhua.BiPai2UI);
			View.regComponent("ui.nqp.game_ui.zhajinhua.component.PKUI",ui.nqp.game_ui.zhajinhua.component.PKUI);
			View.regComponent("ui.nqp.game_ui.zhajinhua.component.TouXiangUI",ui.nqp.game_ui.zhajinhua.component.TouXiangUI);

            super.createChildren();
            this.createView(ui.nqp.game_ui.zhajinhua.ZhaJinHuaUI.uiView);
        }
    }
}

module ui.nqp.game_ui.zhajinhua {
    export class ZhaJinHua_GuiZeUI extends View {
		public btn_close:Laya.Button;
		public btn_tab:Laya.Tab;
		public lab_wanfa:Laya.Image;
		public lab_type:Laya.Image;
		public lab_jiesuan:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"width":787,"scaleY":1.25,"scaleX":1.25,"height":531,"centerY":1,"centerX":-5,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":0,"x":2,"skin":"tongyong_ui/game_ui/tongyong/hud/tu_bk4.png"}},{"type":"Image","props":{"y":0,"x":784,"skin":"tongyong_ui/game_ui/tongyong/hud/tu_bk4.png","scaleX":-1}},{"type":"Image","props":{"y":38,"x":397,"skin":"tongyong_ui/game_ui/tongyong/general/tu_bkbt.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":37,"x":394,"skin":"tongyong_ui/game_ui/tongyong/hud/tit_game_rule.png","anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":38,"x":743,"var":"btn_close","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/hud/btn_gb.png","anchorY":0.5,"anchorX":0.5}},{"type":"Tab","props":{"y":66,"x":15,"width":756,"var":"btn_tab","space":4,"skin":"tongyong_ui/game_ui/tongyong/hud/tab_bq.png","labels":"玩法介绍,牌型说明,结算计分","labelSize":20,"labelColors":"#9a8c70,#fdf5dc,#fdf5dc","height":58}},{"type":"Image","props":{"y":130,"x":20,"var":"lab_wanfa","skin":"zjh_ui/game_ui/zhajinhua/guize_1.png"}},{"type":"Image","props":{"y":130,"x":20,"var":"lab_type","skin":"zjh_ui/game_ui/zhajinhua/guize_2.png"}},{"type":"Image","props":{"y":130,"x":20,"var":"lab_jiesuan","skin":"zjh_ui/game_ui/zhajinhua/guize_3.png"}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.nqp.game_ui.zhajinhua.ZhaJinHua_GuiZeUI.uiView);
        }
    }
}

module ui.nqp.game_ui.zhajinhua {
    export class ZhaJinHua_HUDUI extends View {
		public view_hud:ui.nqp.game_ui.tongyong.HudUI;
		public box_normal:Laya.Box;
		public box_right:Laya.Box;
		public img_room0:Laya.Image;
		public txt_difen0:Laya.Clip;
		public txt_least0:Laya.Clip;
		public img_room1:Laya.Image;
		public txt_difen1:Laya.Clip;
		public txt_least1:Laya.Clip;
		public img_room2:Laya.Image;
		public txt_difen2:Laya.Clip;
		public txt_least2:Laya.Clip;
		public img_room3:Laya.Image;
		public txt_difen3:Laya.Clip;
		public txt_least3:Laya.Clip;
		public btn_join:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Image","props":{"y":360,"x":640,"top":-1,"skin":"zjh_ui/game_ui/zhajinhua/tu_zjh.png","right":-1,"left":-1,"bottom":-1,"anchorY":0.5,"anchorX":0.5}},{"type":"Hud","props":{"var":"view_hud","top":0,"runtime":"ui.nqp.game_ui.tongyong.HudUI","right":0,"left":0,"bottom":0}},{"type":"Box","props":{"var":"box_normal","top":0,"skewY":0,"right":0,"mouseThrough":true,"left":0,"height":720,"bottom":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Box","props":{"width":1281,"var":"box_right","height":465,"centerY":-3,"centerX":1,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":77,"var":"img_room0","skin":"zjh_ui/game_ui/zhajinhua/difen_04_1.png","right":990},"child":[{"type":"Clip","props":{"y":237,"x":143,"var":"txt_difen0","skin":"tongyong_ui/game_ui/tongyong/dating/clip_dizhu3.png","clipX":10}},{"type":"Clip","props":{"y":272,"x":138,"width":15,"var":"txt_least0","skin":"tongyong_ui/game_ui/tongyong/dating/clip_dizhu3.png","height":18,"clipX":11}}]},{"type":"Image","props":{"y":77,"var":"img_room1","skin":"zjh_ui/game_ui/zhajinhua/difen_03_1.png","right":670},"child":[{"type":"Clip","props":{"y":237,"x":144,"var":"txt_difen1","skin":"tongyong_ui/game_ui/tongyong/dating/clip_dizhu2.png","index":3,"clipX":10}},{"type":"Clip","props":{"y":273,"x":141,"width":15,"var":"txt_least1","skin":"tongyong_ui/game_ui/tongyong/dating/clip_dizhu2.png","height":18,"clipX":11}}]},{"type":"Image","props":{"y":75,"var":"img_room2","skin":"zjh_ui/game_ui/zhajinhua/difen_02.png","right":350},"child":[{"type":"Clip","props":{"y":238,"x":144,"var":"txt_difen2","skin":"tongyong_ui/game_ui/tongyong/dating/clip_dizhu1.png","clipX":10}},{"type":"Clip","props":{"y":272,"x":141,"width":15,"var":"txt_least2","skin":"tongyong_ui/game_ui/tongyong/dating/clip_dizhu1.png","height":18,"clipX":10}}]},{"type":"Image","props":{"y":75,"var":"img_room3","skin":"zjh_ui/game_ui/zhajinhua/difen_01.png","right":30},"child":[{"type":"Clip","props":{"y":238,"x":157,"var":"txt_difen3","skin":"tongyong_ui/game_ui/tongyong/dating/clip_dizhu.png","clipX":10}},{"type":"Clip","props":{"y":272,"x":155,"width":15,"var":"txt_least3","skin":"tongyong_ui/game_ui/tongyong/dating/clip_dizhu.png","height":18,"clipX":11}}]}]}]},{"type":"Image","props":{"top":10,"skin":"zjh_ui/game_ui/zhajinhua/zjh_title.png","centerX":200,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":668,"x":640,"var":"btn_join","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_ksjr.png","centerX":0,"bottom":10,"anchorY":0.5,"anchorX":0.5}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.nqp.game_ui.tongyong.HudUI",ui.nqp.game_ui.tongyong.HudUI);

            super.createChildren();
            this.createView(ui.nqp.game_ui.zhajinhua.ZhaJinHua_HUDUI.uiView);
        }
    }
}
