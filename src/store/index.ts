import { combineReducers, configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import userProFile from "./reducers/userProFile";
import rootSaga from "./sagas/index";

const rootReducer = combineReducers({
  userProFile,
});

function createStore() {
  const sagaMiddleware = createSagaMiddleware();
  const store = configureStore({
    reducer: rootReducer,
    devTools: true,
    middleware: [sagaMiddleware],
  });
  sagaMiddleware.run(rootSaga);
  return store;
}

export type RootState = ReturnType<typeof rootReducer>;
export default createStore;
