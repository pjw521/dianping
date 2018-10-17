import {createStore} from "redux"
import rootReducer from "../reducers/combineReduce"

export default function configStore(initState){
    const store = createStore(rootReducer,initState,
        window.devToolsExtension?window.devToolsExtension():undefined)
        return store;
}