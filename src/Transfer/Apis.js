import Axios from "axios";
const url = "http://localhost:4000";

export function getCount() {
  return new Promise((resolve, reject) => {
    Axios.get(`${url}/getCount`)
      .then(function (response) {
        resolve(response.data)
      })
      .catch(function (error) {
        reject(error);
      });
  });
}

export function increment() {
  return new Promise((resolve, reject) => {
    Axios.get(`${url}/increment`)
      .then(function (response) {
        resolve(response.data)
      })
      .catch(function (error) {
        reject(error);
      });
  });
}

