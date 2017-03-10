var axios = require('axios');

var client_id = "b69b122d2e824fc91f9e";
var secret_id = "f205cc68552a23ec8f015d41e8c81c517c93a8fa";
var param = "?client_id=" + client_id + "&client_secret=" + secret_id;

function getUserInfo (username) {
  return axios.get('https://api.github.com/users/' + username + param);
}

var helpers = {
  getPlayersInfo: function (players) {
    return axios.all(players.map(function (username) {
      return getUserInfo(username)
    }))
    .then(function (info) {
      return info.map(function (user) {
        return user.data
      })
    })
    .catch(function (err) {console.warn('Error in getPlayersInfo: ', err)})
  }
};

module.exports = helpers;
