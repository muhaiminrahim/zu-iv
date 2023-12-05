import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth-slice";
import { combineReducers } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";

type Storage = {
  getItem(key: string): Promise<string | null>;
  setItem(key: string, value: string): Promise<string>;
  removeItem(key: string): Promise<void>;
};

const createNoopStorage = (): Storage => {
  return {
    getItem(_key) {
      return Promise.resolve(null);
    },
    setItem(_key, value) {
      return Promise.resolve(value);
    },
    removeItem(_key) {
      return Promise.resolve();
    },
  };
};

const storage =
  typeof window !== "undefined"
    ? createWebStorage("local")
    : createNoopStorage();

const rootReducer = combineReducers({
  authReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);
export type State = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;
