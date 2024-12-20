import { configureStore } from "@reduxjs/toolkit";
import { contactsSlice } from "./contactsSlice";
import { filtersSlice } from "./filtersSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, contactsSlice);
// const persistedReducer = persistReducer(persistConfig, filtersSlice);

export const store = configureStore({
  reducer: {
    contacts: persistedReducer,
    // filters: persistedReducer,
    filters: filtersSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
