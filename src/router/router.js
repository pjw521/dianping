import React from "react"
import {Router,Route,IndexRoute,hashHistory} from "react-router";
import App from "../components/App/App"
import Home from "../components/home/home"
import City from "../components/city/city"
import User from "../components/user/user"
import Search from "../components/search/search"
import Detail from "../components/detail/detail"
import NotFound from "../components/notfound/notfound"

class RouterMap extends React.Component{
    render(){
        return(
            <div>
                <Router history={hashHistory}>
                    <Route path="/" component={App}>
                        <IndexRoute component={Home}></IndexRoute>
                        <Route path="/city" component={City}></Route>
                        <Route path="/user" component={User}></Route>
                        <Route path="/seatch" component={Search}></Route>
                        <Route path="/detail" component={Detail}></Route>
                        <Route path="*" component={NotFound}></Route>
                    </Route>
                </Router>
            </div>
            
        )
    }
}
export default RouterMap;