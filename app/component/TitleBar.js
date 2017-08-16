/**
 * @Author:JACK-GU
 * @Date:2017-08-09
 * @E-Mail:528489389@qq.com
 * @Describe:
 */
import {
    StyleSheet,
    Text,
    Platform,
    Image,
    View,
    ToastAndroid,
    TouchableOpacity,
    PixelRatio,
    NativeModules,
} from 'react-native';
import {
    Actions,
} from 'react-native-router-flux';
import React, {Component, PropTypes} from 'react';
import * as AppConfig from '../config/AppConfig';
import * as AppStyles from "../config/AppStyles";
import TouchableButton from "./TouchableButton";

export default class TitleBar extends Component {
    static propTypes = {
        title: PropTypes.string,
        leftText: PropTypes.string,
        rightText: PropTypes.string,
        showBack: PropTypes.bool,//默认为true
        onPress: PropTypes.func,//右边文字按钮
        onPressBack: PropTypes.func,//返回按钮
        onPressRight: PropTypes.func,//右边的更多按钮
        colors: PropTypes.Object,
        showMore: PropTypes.bool,//这个有，才显示更多的按钮,默认false
    };

    // 构造
    constructor(props) {
        super(props);
        this.state = {
            barHeight: global.BARANDROIDHEIGHT / PixelRatio.get(),
            showBack: props.showBack == null ? true : props.showBack,
        };

        if (global.BARANDROIDHEIGHT == -1) {
            NativeModules.BarHeightModule.getHeight((height) => {
                this.setState({barHeight: height / PixelRatio.get()});
            });
        }
    }

    render() {
        return (
            <View style={{
                flexDirection: 'row',
                backgroundColor: this.props.colors ? this.props.colors.COLOR_THEME : AppConfig.COLOR_THEME,
                paddingTop: Platform.OS === 'android' ? this.state.barHeight : 20,
            }}>
                <View
                    style={{
                        flex: 1,
                        backgroundColor: this.props.colors ? this.props.colors.COLOR_THEME : AppConfig.COLOR_THEME,
                        height: AppConfig.TITLE_HEIGHT,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>

                    <Text style={
                        [
                            AppStyles.textBigGray,
                            {color: AppConfig.COLOR_WHITE,}
                        ]}>
                        {this.props.title}
                    </Text>
                    <View style={{
                        flexDirection: 'row',
                        position: 'absolute',
                    }}>
                        <View style={{
                            flex: 1,
                            flexDirection: 'row',
                            height: AppConfig.TITLE_HEIGHT,
                            alignItems: 'center',
                            justifyContent: this.state.showBack ? 'space-between' : 'flex-end'
                        }}>
                            {
                                this.state.showBack ?
                                    <TouchableButton onPress={() => {
                                        this.props.onPressBack ? this.props.onPressBack() :
                                            Actions.pop();
                                    }}>
                                        <View style={{
                                            flexDirection: 'row',
                                            alignItems: 'center'
                                        }}>
                                            <Image
                                                style={{
                                                    width: 30,
                                                    height: 30,
                                                    marginLeft: 5
                                                }}
                                                source={require('../img/ic_arrow_back_white_36pt.png')}/>

                                            <Text
                                                style={[
                                                    AppStyles.textSmallGray,
                                                    {color: this.props.colors ? this.props.colors.COLOR_WHITE : AppConfig.COLOR_WHITE}
                                                ]}>
                                                {this.props.leftText}
                                            </Text>
                                        </View>
                                    </TouchableButton>
                                    : null
                            }
                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                paddingRight: AppConfig.DISTANCE_SAFE
                            }}>
                                {
                                    this.props.rightText ?
                                        <TouchableButton onPress={() => {
                                            if (this.props.onPress) {
                                                this.props.onPress();
                                            }
                                        }}>
                                            <Text
                                                style={[
                                                    AppStyles.textNormalGray,
                                                    {
                                                        color: this.props.colors ? this.props.colors.COLOR_WHITE : AppConfig.COLOR_WHITE,
                                                    }
                                                ]}>
                                                {this.props.rightText}
                                            </Text>
                                        </TouchableButton>
                                        : null
                                }
                                {
                                    this.props.showMore ?
                                        <TouchableButton
                                            onPress={() => {
                                                if (this.props.onPressRight) {
                                                    this.props.onPressRight();
                                                }
                                            }}>
                                            <View
                                                style={{marginLeft: AppConfig.DISTANCE_SAFE}}
                                            >
                                                <Image
                                                    resizeMode="center"
                                                    style={{
                                                        width: 12,
                                                        height: 20,
                                                    }}
                                                    source={require('../img/ic_more_vert_white_48pt.png')}/>
                                            </View>
                                        </TouchableButton>
                                        : null
                                }
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}