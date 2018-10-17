import React, { Component } from 'react';
import LocalStore from "../../util/localStore"
import {CITYNAME} from "../../util/localStoreKey"
import {bindActionCreators} from "redux"
import {connect} from "react-redux"
import * as userInfoFromAction from "../../action/userinfo.js"



class App extends Component {
  constructor(){
    super();
    this.state = {
      initDone:true
    }
  }
  componentDidMount(){
    let cityName = LocalStore.getItem(CITYNAME);
    if(cityName == null){
      cityName = "北京";
    }
    //更新城市名
    this.props.userInfoActions.update({cityName})
  }
  render(){
    return (
      <div>
        
        {
          this.state.initDone
          ? this.props.children
          :<div>加载中。。。</div>  
         }
      </div>
    );
  }
}

function mapStateToProps(state){
  return{

  }
}

function mapDispatchToProps(dispatch){
  return {
    //将针对用户的所有操作方法放到userInfoActions里面 并返回
    userInfoActions:bindActionCreators(userInfoFromAction,dispatch)
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
