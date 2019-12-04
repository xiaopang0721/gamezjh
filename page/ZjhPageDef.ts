/**
* name 
*/
module gamezjh.page {
	export class ZjhPageDef extends game.gui.page.PageDef {
		static GAME_NAME: string;
		//炸金花界面
		static PAGE_ZHAJINHUA: string = "1";
		static PAGE_ZHAJINHUA_MAP: string = "2";
		static PAGE_ZHAJINHUA_RULE: string = "101";
		static PAGE_ZHAJINHUA_XIQIAN: string = "5";
		static myinit(str: string) {
			super.myinit(str);
			ZjhClip.init();
			PageDef._pageClassMap[ZjhPageDef.PAGE_ZHAJINHUA] = ZhaJinHuaPage;
			PageDef._pageClassMap[ZjhPageDef.PAGE_ZHAJINHUA_MAP] = ZjhMapPage;
			PageDef._pageClassMap[ZjhPageDef.PAGE_ZHAJINHUA_RULE] = ZjhRulePage;
			PageDef._pageClassMap[ZjhPageDef.PAGE_ZHAJINHUA_XIQIAN] = ZjhXiQianPage;
			this["__needLoadAsset"] = [
				PathGameTongyong.atlas_game_ui_tongyong + "hud.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "general.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "touxiang.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "pai.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "general/effect/fapai_1.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "general/effect/xipai.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "dating.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "logo.atlas",
				DatingPath.atlas_dating_ui + "qifu.atlas",
				Path_game_zjh.atlas_game_ui + "zhajinhua.atlas",
				Path_game_zjh.atlas_game_ui + "zhajinhua/effect/yanhua.atlas",
				Path_game_zjh.atlas_game_ui + "zhajinhua/effect/btn.atlas",
				Path_game_zjh.atlas_game_ui + "zhajinhua/effect/bipai.atlas",
				Path_game_zjh.ui_zjh_sk + "zjh_0.png",
				Path_game_zjh.ui_zjh_sk + "zjh_1.png",
				Path_game_zjh.ui_zjh_sk + "zjh_2.png",
				Path_game_zjh.ui_zjh_sk + "zjh_3.png",

				Path.custom_atlas_scene + 'card.atlas',
				Path.custom_atlas_scene + 'chip.atlas',
				PathGameTongyong.ui_tongyong_sk + "HeGuan.sk",
				PathGameTongyong.ui_tongyong_sk + "HeGuan.png",
				PathGameTongyong.ui_tongyong_sk + "HeGuan2.sk",
				PathGameTongyong.ui_tongyong_sk + "HeGuan2.png",


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