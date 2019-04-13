'use strict';

const Q = require('@nmq/q/client');

const db = new Q('database');
const files = new Q('files');

//Files subscriptions
files.subscribe('save', payload => {
  console.log('Saved: ', payload);
});

files.subscribe('error', payload => {
  console.log('Error: ', payload);
});

//Database subscriptions
db.subscribe('get', payload => {
  console.log('Got: ', payload);
});

db.subscribe('put', payload => {
  console.log('Updated: ', payload);
});

db.subscribe('post', payload => {
  console.log('Created: ', payload);
});

db.subscribe('delete', payload => {
  console.log('Deleted: ', payload);
});

db.subscribe('error', payload => {
  console.log('Error: ', payload);
});