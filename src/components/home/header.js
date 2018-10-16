import React from "react"
import "./index.css"
import "./fonts/iconfont.css"
class Header extends React.Component{
    render(){
        return(
            <div className="box">
                <span>深圳<i className="iconfont icon-xiangxia"></i></span>
                <span><i className="iconfont icon-sousuo" ></i><input type="text"/></span> 
                <span><i className="iconfont icon-yonghu"></i></span>
            </div>
        )
    }
}
export default Header;