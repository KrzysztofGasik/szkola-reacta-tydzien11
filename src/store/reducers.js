import { combineReducers } from "redux"
import usersReducer from "../Zadanie1/Users/duck/reducers";

const rootReducer = combineReducers({
    users: usersReducer,
})

export default rootReducer;
