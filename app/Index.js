/**
 * @Author:JACK-GU
 * @Date:2017-08-10
 * @E-Mail:528489389@qq.com
 * @Describe: 入口
 */

import React, {Component} from 'react';
import {NativeModules, Alert, Platform, View} from 'react-native';
import {setJSExceptionHandler} from 'react-native-exception-handler';
import RNRestart from 'react-native-restart';
import Login from "./scene/Login";

const errorHandler = (e, isFatal) => {
    if (isFatal) {
        //Android和ios手机数据
        if (Platform.OS === 'android') {
            let data = {
                name: e.name,
                message: e.message,
                stack: e.stack,
            };
            let str = JSON.stringify(data);
            NativeModules.CatchJSModule.report(str);
        } else {
            var CatchReport = NativeModules.CatchReport;
            CatchReport.addEvent(e.name, e.message, e.stack);
        }

        Alert.alert(
            '错误提示！', '软件遇到点小问题，需要重新启动！',
            [{
                text: '重启软件',
                onPress: () => {
                    RNRestart.Restart();
                }
            }]
        );
    } else {
        console.log(e); // So that we can see it in the ADB logs in case of Android if needed
    }
};

class Index extends Component {
    constructor(props) {
        super(props);
        global.BARANDROIDHEIGHT = Platform.OS === "android" ? -1 : 0;

        if (Platform.OS === "android") {
            NativeModules.BarHeightModule.getHeight((height) => {
                global.BARANDROIDHEIGHT = height;
            });
        }


        //保证性能
        if (Platform.OS === 'android') {
            NativeModules.NativeUtilsModule.isDebug((isDebug) => {
                if (!isDebug) {
                    global.console = {
                        info: () => {
                        },
                        log: () => {
                        },
                        warn: () => {
                        },
                        debug: () => {
                        },
                        error: () => {
                        },
                    };
                }
            });
        } else {
            var Utils = NativeModules.Utils;
            Utils.addEventIsDebug((isDebug) => {
                if (!isDebug) {
                    global.console = {
                        info: () => {
                        },
                        log: () => {
                        },
                        warn: () => {
                        },
                        debug: () => {
                        },
                        error: () => {
                        },
                    };
                }
            });
        }
    }

    componentDidMount() {

    }

    render() {
        return (
            <Login {...this.props}/>
        )
    }
}


setJSExceptionHandler(errorHandler);

export default Index;
