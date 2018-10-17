import React from "react"
import Header from "./header"
import {connect} from "react-redux"
import Category from "../../category";

class Home extends React.Component{
    render(){
        return(
            <div>
                <Header cityName={this.props.userinfo.cityName}></Header>
                <Category></Category>
            </div>
        )
    }
}
function mapStateToProps(state){
    return{
        userinfo:state.userinfo
    }
}
function mapDispatchToProps(dispatch){
    return{

    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)