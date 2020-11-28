import axios from "axios";

export default {
  getUser(username) {
    return axios
      .get(`/users/${username}`)
      .then(res => {
        return Promise.resolve(res);
      })
      .catch(err => {
        return Promise.reject(err.response.data);
      });
  },
  getUserRepos(username) {
    return axios
      .get(`/users/${username}/repos`)
      .then(res => {
        return Promise.resolve(res);
      })
      .catch(err => {
        return Promise.reject(err.response.data);
      });
  },
  getUserStarredRepos(username) {
    return axios
      .get(`/users/${username}/starred`)
      .then(res => {
        return Promise.resolve(res);
      })
      .catch(err => {
        return Promise.reject(err.response.data);
      });
  },
};
