import { render } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { MemoryRouter } from "react-router-dom";
import thunk from "redux-thunk";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

import { initialState as authInitialState } from "./../views/auth/AuthSlice";
import { initialState as profileInitialState } from "./../views/profile/ProfileSlice";
import { initialState as toastInitialState } from "./../views/toast/ToastSlice";

import { initialState as responsiveInitialState } from "./../views/responsive/ResponsiveSlice";
import { RootState } from "./../SecondStore";

export const rootInitialState = {
  auth: authInitialState,
  profile: profileInitialState,
  toast: toastInitialState,
  responsive: responsiveInitialState,
};

export const axiosMock = new MockAdapter(axios);

export const renderWithProviders = (
  ui: React.ReactNode,
  initialState: RootState = rootInitialState
) => {
  const store = configureStore([thunk])(initialState);
  return {
    ...render(
      <MemoryRouter>
        <Provider store={store}>{ui}</Provider>
      </MemoryRouter>
    ),
    mockStore: store,
    getActionsTypes: () => store.getActions().map((a) => a.type),
  };
};
