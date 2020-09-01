import Service from "../../Service/Service";
import SecureService from "../../Service/SecureService";

export const makePostRequest = (url, data) => {
  return Service.postCall(url, data);
};
export const makeGetRequest = (url) => {
  return Service.postCall(url);
};
export const makeSecurePostRequest = (url, data) => {
  return SecureService.postCall(url, data);
};
export const makeSecureGetRequest = (url) => {
  return SecureService.postCall(url);
};
