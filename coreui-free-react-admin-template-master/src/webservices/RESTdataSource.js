import Axios from "axios";

// Config global defaults for axios/django
Axios.defaults.xsrfHeaderName = "X-CSRFToken";
Axios.defaults.xsrfCookieName = "csrftoken";

export class RestDataSource {
  constructor(base_url) {
    this.BASE_URL = base_url;
  }
  GetData(callback) {
    this.SendRequest("get", this.BASE_URL, callback);
  }
  async SendRequest(method, url, callback) {
    callback(
      (
        await Axios.request({
          method: method,
          url: url,
        })
      ).data
    );
  }
}

// Available endpoints
export const API_LOGIN = "http://localhost:8000/auth/login/";
export const API_LOGOUT = "http://localhost:8000/auth/logout/";
export const API_REGISTER = "http://localhost:8000/auth/registration/";
export const API_GUEST_REGISTER = "http://localhost:8000/auth/guest/";
export const API_AUTH_SETUP = "http://localhost:8000/auth/setup/";

export const API_AVATARS = "http://localhost:8000/api/avatars/";

export const API_USERS = "http://localhost:8000/api/users/";
