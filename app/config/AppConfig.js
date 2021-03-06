/**
 * @Author:J ACK-GU
 * @Date: 2017-08-08
 * @E-Mail: 528489389@qq.com
 * @Describe: 定义一些基本的参数，如颜色啊，字体啊神马的
 */
import User from "../entity/User";

//主题色定义
export const COLOR_THEME = "#1AA7F2";

//黑色，不是000000
export const COLOR_BLACK = "#333333";
//白色
export const COLOR_WHITE = "#FFFFFF";
//字体灰色
export const TEXT_COLOR_GRAY = "#8A8A8A";
//背景色
export const COLOR_BG = "#ECEDF1";
//线条的颜色
export const COLOR_LINE = "#CDCDCD";

//字体大小定义
export const TEXT_SIZE_BIG = 18;
export const TEXT_SIZE_NORMAL = 16;
export const TEXT_SIZE_SMALL = 14;

//按钮的透明度
export const OPACITY = 0.6;

//title高度
export const TITLE_HEIGHT = 50;
//线条高度
export const LINE_HEIGHT = 0.5;
//一般的安全距离
export const DISTANCE_SAFE = 10;
//分割线的高度
export const SEPARATOR_HEIGHT = 5;

//默认的配置，用于拍照或者图库选择照片，noData不返回base64值，storageOptions永久的保存图片
export const IMAGE_PICKER_OPTIONS = {
    noData: true, storageOptions: {
        skipBackup: true, //不存储到iCloud，
        path: 'images', //存放图片的路径
    },
};
