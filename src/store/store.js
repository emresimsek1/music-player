import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "../reducers/index";

export function configureAppStore() {
  const store = configureStore({
    reducer: rootReducer,
  });
   
  return store;
}
