import React, { Component } from 'react';
import LocalStore from "../../util/localStore"
import {CITYNAME} from "../../util/localStoreKey"


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

export default App;
