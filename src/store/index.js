import {combineReducers, createStore} from "redux";
import {dataReducer} from "./data";



const reducers = combineReducers({
    data: dataReducer,
})


export const store = createStore(reducers)
