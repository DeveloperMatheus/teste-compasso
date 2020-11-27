import axios from "axios";

export default {
  getUser(username) {
    return axios
      .get(`/users/${username}`)
      .then(res => {
        return Promise.resolve(res.data);
      })
      .catch(err => {
        return Promise.reject(err.response.data);
      });
  },
};
