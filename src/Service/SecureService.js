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
    return new Promise.reject(error);
  }
);
const getToken = () => {
  return new Promise((resolve, reject) => {
    const token = localStorage.getItem("token");
    if (!token) {
      reject("Token not found");
    }
    resolve(token);
  });
};
export default class Service {
  static getCall(url) {
    return getToken().then((token) => {
      return new Promise((resolve, reject) => {
        let config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        instance
          .get(url, config)
          .then((response) => {
            resolve(response);
          })
          .catch((e) => {
            reject(e);
          });
      });
    });
  }
  static postCall(url, data) {
    return getToken().then((token) => {
      let config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      return new Promise((resolve, reject) => {
        instance
          .post(url, data, config)
          .then((response) => {
            console.info("response---->", JSON.stringify(response));
            resolve(response);
          })
          .catch((e) => {
            console.info("error response---->", JSON.stringify(e));
            reject(e);
          });
      });
    });
  }
}
