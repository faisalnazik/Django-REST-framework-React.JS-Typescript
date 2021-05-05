import { loadState, saveState } from "./utils/localStorage";
import { Action, configureStore, combineReducers } from "@reduxjs/toolkit";
import { ThunkAction } from "redux-thunk";

import authReducer from "./views/auth/AuthSlice";
import profileReducer from "./views/profile/ProfileSlice";
import responsiveReducer from "./views/responsive/ResponsiveSlice";

import authInitialState from "./views/auth/AuthSlice";
import { setupInterceptors } from "./api";

export const rootReducer = combineReducers({
  auth: authReducer,
  profile: profileReducer,
  responsive: responsiveReducer,
});

const store = configureStore({
  //   devTools: process.env.NODE_ENV !== "production",
  preloadedState: loadState() || {},
  reducer: rootReducer,
});

store.subscribe(() => {
  const state = store.getState();
  saveState({
    auth: {
      ...authInitialState,
      user: state.auth.user,
    },
  });
});

setupInterceptors(store);

export type RootState = ReturnType<typeof rootReducer>;
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;
export type AppDispatch = typeof store.dispatch;

export default store;
