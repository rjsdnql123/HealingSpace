import React from "react";
import { Provider } from "react-redux";
import configureStore from "../store/index";

function prepareReduxWrapper() {
  const store = configureStore();
  const wrapper = ({ children }: { children: React.ReactNode }) => {
    return <Provider store={store as any}>{children}</Provider>;
  };
  return [wrapper, store] as const;
}

export default prepareReduxWrapper;
