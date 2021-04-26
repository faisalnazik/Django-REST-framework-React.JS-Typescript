import axios from "axios";
import logout from "./features/auth/AuthSlice";
// Config global defaults for axios/django
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.xsrfCookieName = "csrftoken";

export const setupInterceptors = (store: any) => {
  axios.interceptors.response.use(
    (response) => response,
    (error) => {
      // Handle expired sessions
      if (error.response && error.response.status === 401) {
        store.dispatch(logout());
      }
      return Promise.reject(error);
    }
  );
};

// Available endpoints
export const API_LOGIN = "/auth/login/";
export const API_LOGOUT = "/auth/logout/";
export const API_REGISTER = "/auth/registration/";
export const API_GUEST_REGISTER = "/auth/guest/";
export const API_AUTH_SETUP = "/auth/setup/";

export const API_AVATARS = "/api/avatars/";
export const API_USERS = "/api/users/";

export default axios;
