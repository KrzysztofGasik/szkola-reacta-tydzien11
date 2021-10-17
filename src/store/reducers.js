import { combineReducers } from "redux"
import usersReducer from "../Zadanie1/Users/duck/reducers";
import messageReducer from "../Zadanie1/Message/duck/reducers"

const rootReducer = combineReducers({
    users: usersReducer,
    messages: messageReducer
})

export default rootReducer;
