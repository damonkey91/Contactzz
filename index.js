import { AppRegistry } from 'react-native';
import App from './App';
AppRegistry.registerComponent('Contactzzz', () => App);


var MongoClient = require('mongodb').MongoClient;
var express = require('express');

var db;

MongoClient.connect('mongodb://localhost:27017', function(error, client) {
  if (error) {
    console.error('Failed to connect to the database!');
    console.log(error);
  } else {
    console.log('Successfully connected to the database!');
    db = client.db('contacts');

    // db.collection('contacts').insert([{
    //   "firstName": "Mani",
    //   "surName": "Sedighi",
    //   "phoneNumber": "0702022714"
    // }, {
    //   "firstName": "Tobias",
    //   "surName": "Johansson",
    //   "phoneNumber": "0702010193"
    // }, {
    //   "firstName": "Victor",
    //   "surName": "Fundberg",
    //   "phoneNumber": "0761849424"
    // }, {
    //   "firstName": "Simon",
    //   "surName": "Winther",
    //   "phoneNumber": "0737063075"
    // }]);

  }
});
