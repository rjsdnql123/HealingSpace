import { combineReducers, configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import userProfile from "../feature/loginForm/loginSlice";
import psychological from "../feature/Psychological/psychologicalSlice";
import testResult from "../feature/testResult/testSlice";
import google from "../feature/loginForm/saga";
import { all } from "redux-saga/effects";
import Information from "../feature/testResult/saga";

function* rootSaga() {
  yield all([google(), Information()]);
}

const rootReducer = combineReducers({
  userProfile,
  psychological,
  testResult
});

function createStore() {
  const sagaMiddleware = createSagaMiddleware();
  const store = configureStore({
    reducer: rootReducer,
    devTools: true,
    middleware: [sagaMiddleware]
  });
  sagaMiddleware.run(rootSaga);
  return store;
}

export type RootState = ReturnType<typeof rootReducer>;
export default createStore;
