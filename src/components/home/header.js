import React from "react"
import "./index.css"
import "./fonts/iconfont.css"
class Header extends React.Component{
    render(){
        return(
            <div className="box">
                <span>{this.props.cityName}<i className="iconfont icon-xiangxia"></i></span>
                <span className="searchwarp"><i className="iconfont icon-sousuo" ></i><input type="text" placeholder="请输入关键字"/></span> 
                <span><i className="iconfont icon-yonghu"></i></span>
            </div>
        )
    }
}
export default Header;