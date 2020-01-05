/**
* name 
*/
module gamezjh.page {
	export class ZjhPageDef extends game.gui.page.PageDef {
		static GAME_NAME: string;
		//炸金花场次界面
		static PAGE_ZHAJINHUA: string = "1";
		//炸金花游戏界面
		static PAGE_ZHAJINHUA_MAP: string = "2";
		//炸金花喜钱界面
		static PAGE_ZHAJINHUA_XIQIAN: string = "3";
		//炸金花胜利界面
		static PAGE_ZHAJINHUA_WIN: string = "4";
		//炸金花规则界面
		static PAGE_ZHAJINHUA_RULE: string = "101";

		static myinit(str: string) {
			super.myinit(str);
			ZjhClip.init();
			PageDef._pageClassMap[ZjhPageDef.PAGE_ZHAJINHUA] = ZhaJinHuaPage;
			PageDef._pageClassMap[ZjhPageDef.PAGE_ZHAJINHUA_MAP] = ZjhMapPage;
			PageDef._pageClassMap[ZjhPageDef.PAGE_ZHAJINHUA_RULE] = ZjhRulePage;
			PageDef._pageClassMap[ZjhPageDef.PAGE_ZHAJINHUA_XIQIAN] = ZjhXiQianPage;
			PageDef._pageClassMap[ZjhPageDef.PAGE_ZHAJINHUA_WIN] = ZjhWinPage;

			this["__needLoadAsset"] = [
                Path_game_zjh.atlas_game_ui + "zhajinhua.atlas",
                Path_game_zjh.atlas_game_ui_zjh + "effect/bipai1.atlas",
                Path_game_zjh.atlas_game_ui_zjh + "effect/btn.atlas",
                Path_game_zjh.atlas_game_ui_zjh + "effect/nyl.atlas",
                Path_game_zjh.atlas_game_ui_zjh + "effect/paixing.atlas",
                Path_game_zjh.atlas_game_ui_zjh + "effect/shu.atlas",
                Path_game_zjh.atlas_game_ui_zjh + "effect/xiqian.atlas",
                Path_game_zjh.atlas_game_ui_zjh + "effect/ying.atlas",
                Path_game_zjh.atlas_game_ui_zjh + "effect/xzpk.atlas",
				
                PathGameTongyong.atlas_game_ui_tongyong + "hud.atlas",
                PathGameTongyong.atlas_game_ui_tongyong + "general.atlas",
                PathGameTongyong.atlas_game_ui_tongyong + "touxiang.atlas",
                PathGameTongyong.atlas_game_ui_tongyong + "qifu.atlas",
                PathGameTongyong.atlas_game_ui_tongyong + "dating.atlas",
                PathGameTongyong.atlas_game_ui_tongyong + "pai.atlas",
                PathGameTongyong.atlas_game_ui_tongyong + "nyl.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "yq.atlas",
                PathGameTongyong.atlas_game_ui_tongyong + "chongzhi.atlas",
                PathGameTongyong.atlas_game_ui_tongyong_general + "anniu.atlas",
                PathGameTongyong.atlas_game_ui_tongyong_general_effect + "qp.atlas",
                PathGameTongyong.atlas_game_ui_tongyong_general_effect + "guzhu.atlas",
                PathGameTongyong.atlas_game_ui_tongyong_general_effect + "fapai_1.atlas",
                PathGameTongyong.atlas_game_ui_tongyong_general_effect + "xipai.atlas",
                PathGameTongyong.atlas_game_ui_tongyong_general_effect + "biaoshi.atlas",
				PathGameTongyong.atlas_game_ui_tongyong_general_effect + "ksyx.atlas",
				PathGameTongyong.atlas_game_ui_tongyong_general_effect + "anniug.atlas",

				PathGameTongyong.ui_tongyong_sk + "HeGuan.sk",
				PathGameTongyong.ui_tongyong_sk + "HeGuan.png",
				PathGameTongyong.ui_tongyong_sk + "HeGuan2.sk",
				PathGameTongyong.ui_tongyong_sk + "HeGuan2.png",
				Path.custom_atlas_scene + 'card.atlas',
				Path.custom_atlas_scene + 'chip.atlas',
				Path.map + 'pz_zjh.png',
				Path.map_far + 'bg_zjh.jpg'
			]

			if (WebConfig.needMusicPreload) {
				this["__needLoadAsset"] = this["__needLoadAsset"].concat([
					Path_game_zjh.music_zjh + "PK.mp3",
					Path_game_zjh.music_zjh + "bgroom.mp3",
					Path_game_zjh.music_zjh + "bipaishu.mp3",
					Path_game_zjh.music_zjh + "biwin.mp3",
					Path_game_zjh.music_zjh + "bpl_1.mp3",
					Path_game_zjh.music_zjh + "bpl_2.mp3",
					Path_game_zjh.music_zjh + "chouma.mp3",
					Path_game_zjh.music_zjh + "genzhu.mp3",
					Path_game_zjh.music_zjh + "genzhu_1.mp3",
					Path_game_zjh.music_zjh + "genzhu_2.mp3",
					Path_game_zjh.music_zjh + "guzhuyizhi_1.mp3",
					Path_game_zjh.music_zjh + "guzhuyizhi_2.mp3",
					Path_game_zjh.music_zjh + "jiazhu_1.mp3",
					Path_game_zjh.music_zjh + "jiazhu_2.mp3",
					Path_game_zjh.music_zjh + "kanpai_1.mp3",
					Path_game_zjh.music_zjh + "kanpai_2.mp3",
					Path_game_zjh.music_zjh + "PK.mp3",
					Path_game_zjh.music_zjh + "qipai_1.mp3",
					Path_game_zjh.music_zjh + "qipai_2.mp3",
					Path_game_zjh.music_zjh + "shouqian.mp3",
				])
			}

			this["__qifulimit"] = true;
		}
	}
}