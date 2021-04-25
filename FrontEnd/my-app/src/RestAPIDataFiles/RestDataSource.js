import Axios from "axios";

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
