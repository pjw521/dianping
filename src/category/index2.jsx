import React from 'react'
import ReactSwipe from 'react-swipe'

import './style.less'

class Category extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            index: 0
        }
    }
    render() {
        const opt = {
            auto: 2500,
            callback: function (index) {
                // 更新当前轮播图的index
                this.setState({index: index});
            }.bind(this)
        }

        return (
            <div>
                <ReactSwipe swipeOptions={opt}>
                    <div>
                        <ul>
                            <li className="jingdian">景点</li>
                            <li className="ktv">KTV</li>
                            <li className="gouwu">购物</li>
                            <li className="shenghuofuwu">生活服务</li>
                            <li className="jianshenyundong">健身运动</li>
                            <li className="meifa">美发</li>
                            <li className="qinzi">亲子</li>
                            <li className="xiaochikuaican">小吃快餐</li>
                            <li className="zizhucan">自助餐</li>
                            <li className="jiuba">酒吧</li>
                        </ul>
                    </div>
                    <div>
                        <ul className="clear-fix">
                            <li className="meishi">美食</li>
                            <li className="dianying">电影</li>
                            <li className="jiudian">酒店</li>
                            <li className="xuixianyule">休闲娱乐</li>
                            <li className="waimai">外卖</li>
                            <li className="huoguo">火锅</li>
                            <li className="liren">丽人</li>
                            <li className="dujiachuxing">度假出行</li>
                            <li className="zuliaoanmo">足疗按摩</li>
                            <li className="zhoubianyou">周边游</li>
                        </ul>
                    </div>
                    <div>
                        <ul className="clear-fix">
                            <li className="float-left ribencai">日本菜</li>
                            <li className="float-left SPA">SPA</li>
                            <li className="float-left jiehun">结婚</li>
                            <li className="float-left xuexipeixun">学习培训</li>
                            <li className="float-left xican">西餐</li>
                            <li className="float-left huochejipiao">火车机票</li>
                            <li className="float-left shaokao">烧烤</li>
                            <li className="float-left jiazhuang">家装</li>
                            <li className="float-left chongwu">宠物</li>
                            <li className="float-left quanbufenlei">全部分类</li>
                        </ul>
                    </div>
                </ReactSwipe>
                <div className="index-container">
                    <ul>
                        <li className={this.state.index === 0 ? "selected" : ''}></li>
                        <li className={this.state.index === 1 ? "selected" : ''}></li>
                        <li className={this.state.index === 2 ? "selected" : ''}></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Category