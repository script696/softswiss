import { combineReducers, configureStore } from "@reduxjs/toolkit";
import gamesReducer from "../reducers/games/gamesSlice";

const rootReducer = combineReducers({
  gamesReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
