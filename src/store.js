import {applyMiddleware, legacy_createStore as createStore} from "redux";
import rootReducer from "./modules";
import {composeWithDevTools} from "redux-devtools-extension";
import ReduxThunk from 'redux-thunk';
import ReduxLogger from 'redux-logger';

const store = createStore(
    rootReducer,        // 첫 번째 전달인자 리듀서, 그 다음 전달인자 미들웨어
    composeWithDevTools(applyMiddleware(ReduxThunk, ReduxLogger))
);

export  default store;