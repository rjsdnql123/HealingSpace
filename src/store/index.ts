import { combineReducers, createStore, applyMiddleware } from "redux";
import userProFile from "./reducers/userProFile";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas/index";

const rootReducer = combineReducers({
  userProFile,
});

function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(rootSaga);
  return store;
}

export type RootState = ReturnType<typeof rootReducer>;
export default configureStore;
