import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { todosReducer } from "./actions/reducers/todosReducer";
import { tabReducer } from "./actions/reducers/tabReducer";

const reducer = combineReducers({
  todos: todosReducer,
  currentTab: tabReducer,
});

const middleware = [thunk];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
