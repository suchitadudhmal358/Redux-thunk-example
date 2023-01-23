import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import userReducer from "../reducer/userReducer";

const rootReducer = combineReducers({
  userReducer,
});

const UserData = createStore(rootReducer, applyMiddleware(thunk));
export default UserData;
