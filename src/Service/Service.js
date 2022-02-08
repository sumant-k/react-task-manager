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
    return config;
  },
  function (error) {
    return new Promise.reject(error);
  }
);
instance.interceptors.response.use(
  function (config) {
    return config;
  },
  function (error) {
    return new Promise((resolve, reject) => reject(error));
  }
);
const getToken = () => {
  return new Promise((resolve, reject) => {
    let token = localStorage.getItem("auth-token");
    if (!token) {
      reject("Token is not present");
    }
    resolve(token);
  });
};
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
    // });
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
