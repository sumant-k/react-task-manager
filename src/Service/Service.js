import axios from "axios";

var instance;
if (!instance) {
  instance = axios.create({
    timeout: 10000,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });
}

instance.interceptors.request.use(
  function (config) {
    console.log("request===>", config);
    return config;
  },
  function (error) {
    return new Promise.reject(error);
  }
);
instance.interceptors.response.use(
  function (config) {
    console.log("response===>", config);
    return config;
  },
  function (error) {
    return new Promise((resolve, reject) => reject(error));
  }
);

export default class Service {
  static getCall(url) {
    return new Promise((resolve, reject) => {
      instance
        .get(url)
        .then((response) => {
          console.info("response---->", JSON.stringify(response));
          resolve(response);
        })
        .catch((e) => {
          console.info("error response---->", JSON.stringify(e));
          reject(e);
        });
    });
  }
  static postCall(url, data) {
    return new Promise((resolve, reject) => {
      instance
        .post(url, data)
        .then((response) => {
          console.info("response---->", JSON.stringify(response));
          resolve(response);
        })
        .catch((e) => {
          console.error("error response >>>", e);
          reject(e);
        });
    });
  }
}
