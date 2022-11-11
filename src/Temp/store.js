import {combineReducers, createStore} from "redux";
import {reducer} from './reducer'



const reducers = combineReducers({
    r: reducer
})


export const tempStore = createStore(reducers)
