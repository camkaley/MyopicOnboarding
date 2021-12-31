import Axios from "axios";
const url = "http://localhost:4000";

export function postInsult(insult) {
  var payload = { insult: insult };

  return new Promise((resolve, reject) => {
    Axios.post(`${url}/register`, payload)
      .then(function (response) {
        resolve(response)
      })
      .catch(function (error) {
        reject(error);
      });
  });
}
