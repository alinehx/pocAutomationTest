/**
 * PeopleController
 *
 * @description :: Server-side logic for managing people
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var listPeople = [
  {
    "name": "Cochran ",
    "age": 32,
    "email": "cochranmichael@rockyard.com"
  },
  {
    "name": "Theresa ",
    "age": 23,
    "email": "theresamichael@rockyard.com"
  },
  {
    "name": "Dorthy ",
    "age": 38,
    "email": "dorthymichael@rockyard.com"
  },
  {
    "name": "Sharp ",
    "age": 36,
    "email": "sharpmichael@rockyard.com"
  },
  {
    "name": "Lloyd ",
    "age": 34,
    "email": "lloydmichael@rockyard.com"
  },
  {
    "name": "Carole ",
    "age": 26,
    "email": "carolemichael@rockyard.com"
  }
];

module.exports = {
  list: function(req, res, next) {
  	console.log('entrou aqui');
    res.status(200);
    res.json(listPeople);
  }
};

