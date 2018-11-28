/**
 * RNN的配置文件
 *
 *
 * @Author:JACK-GU
 * @Date:2018-11-22
 * @E-Mail:528489389@qq.com
 * @Describe:
 */
import * as AppConfig from './config/AppConfig';
import * as Const from "./config/Const";
import {Navigation} from "react-native-navigation";
import {Dimensions, PixelRatio} from "react-native";
import ToastAI from "./component/ToastAI";

let {width} = Dimensions.get("window");

//定义第一个tab
const firstTab = {
    stack: {
        children: [
            {
                component: {
                    id: Const.RNN_MAIN,
                    name: Const.RNN_MAIN,
                    options: {
                        bottomTab: {
                            text: 'Tab 1',
                            icon: require('./img/settings.png'),
                        }
                    }
                }
            }
        ]
    }
};

//第二个tab
const secondTab = {
    stack: {
        children: [
            {
                topTabs: {
                    children: [
                        {
                            component: {
                                name: Const.RNN_TABLE1,
                                options: {
                                    topTab: {
                                        title: "TopTab 1"
                                    }
                                }
                            }
                        },
                        {
                            component: {
                                name: Const.RNN_TABLE2,
                                options: {
                                    topTab: {
                                        title: "TopTab 2"
                                    }
                                }
                            }
                        }, {
                            component: {
                                name: Const.RNN_TABLE3,
                                options: {
                                    topTab: {
                                        title: "TopTab 3"
                                    }
                                }
                            }
                        }
                    ]
                }
            }
        ],
        options: {
            bottomTab: {
                text: 'Tab 2',
                icon: require('./img/settings.png'),
            },
        }
    }
};

//第二个tab
const thirdTab = {
    stack: {
        children: [
            {
                component: {
                    id: Const.RNN_MAIN3,
                    name: Const.RNN_MAIN3,
                    options: {
                        bottomTab: {
                            text: 'Tab 3',
                            icon: require('./img/settings.png'),
                        }
                    }
                }
            }
        ]
    }
};


//定义APP的样式的样式
export const AppStyle = (needRootAnimation) => {
    console.log({width: width * PixelRatio.get()});
    return {
        topBar: {
            animate: true,
            hideOnScroll: false,
            buttonColor: 'black',
            drawBehind: false,
            title: {
                text: 'title',
                fontSize: AppConfig.TEXT_SIZE_BIG,
                color: AppConfig.COLOR_WHITE,
            },
            subtitle: {
                fontSize: AppConfig.TEXT_SIZE_SMALL,
                color: AppConfig.TEXT_COLOR_GRAY,
            },
            background: {
                color: AppConfig.COLOR_THEME,
            },
            backButton: {
                color: AppConfig.COLOR_WHITE,
            }
        },
        layout: {
            backgroundColor: AppConfig.COLOR_BG,
            orientation: ['portrait'],
        },
        bottomTabs: {
            backgroundColor: AppConfig.COLOR_WHITE,
            titleDisplayMode: 'alwaysShow',
            drawBehind: true,
        },
        bottomTab: {
            fontSize: AppConfig.TEXT_SIZE_SMALL,
            iconColor: AppConfig.TEXT_COLOR_GRAY,
            selectedIconColor: AppConfig.COLOR_THEME,
            textColor: AppConfig.TEXT_COLOR_GRAY,
            selectedTextColor: AppConfig.COLOR_THEME,
            selectedFontSize: AppConfig.TEXT_SIZE_SMALL,
        },
        overlay: {
            interceptTouchOutside: true
        },
        topTabs: {
            selectedTabColor: AppConfig.COLOR_THEME,
            unselectedTabColor: AppConfig.TEXT_COLOR_GRAY,
            height: 70,
        },
        animations: needRootAnimation ? {
            setRoot: {
                x: {
                    from: width * PixelRatio.get(),
                    to: 0,
                    duration: 300,
                    interpolation: 'accelerate'
                }
            }
        } : {}
    };
};

export const LoginIndex = {
    stack: {
        children: [
            {
                component: {
                    id: Const.RNN_INDEX,
                    name: Const.RNN_INDEX,
                }
            }
        ]
    }
};


//这个APP的配置，我们建议先登录在充值为这个
export const AppIndex = {
    bottomTabs: {
        children: [
            firstTab,
            secondTab,
            thirdTab,
        ]
    }
};

