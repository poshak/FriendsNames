var friendsNames = require('./FriendsNames.json');
var uniqueRandomArr = require('unique-random-array');
module.exports = {
all:friendsNames,
random : uniqueRandomArr(friendsNames)
}