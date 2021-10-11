import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { UserLoginReducer, UserRegisterReducer } from "./reducers/UserReducers";

const reducers = combineReducers({
  userLogin: UserLoginReducer,
  userRegister: UserRegisterReducer,
});

const userCredsFromStorage = localStorage.getItem("userCreds")
  ? JSON.parse(localStorage.getItem("userCreds"))
  : null;

const initialStates = {
  userLogin: { userCreds: userCredsFromStorage },
};

const middleware = [thunk];

const Store = createStore(
  reducers,
  initialStates,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default Store;
