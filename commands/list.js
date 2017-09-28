// bds: I'd like to see this file made compliant with airbnb eslint

const fs = require('fs');
const readFromFile = require('../fileio/fileio.js').readFromFile;

// bds: this taskFile line should be confined to fileio, instead of repeated
// bds: in each of the commands files
const taskFile =
  process.env.NODE_ENV === 'test' ? './tasksTest.json' : './tasks.json';


const list = () => {
  var items = readFromFile(taskFile);
  console.log('ID Description');
  console.log('-- -----------');

// bds: more "idiomatic javascript" to use .forEach() here, instead of a for loop
  for (var i = 0; i < items.length; i++) {
    if(items[i].completed === false){

    // bds: use template literals here, and in general when concatenating more
    // bds: than two strings
    console.log(items[i].id_number + ' ' + items[i].task)
    };
  };

// bds: use .reduce() here to count number of non-completed tasks
// bds: or update your counter as part of the .forEach so you don't have
// bds: to loop twice
  var counter = 0;
  for (var i = 0; i < items.length; i++) {
    if(items[i].completed === false){
      counter+=1;
    };
  };

// bds: if you want a newline before your console.log, include it
// bds: explicitly in the string: console.log('\nYou have ' + counter + ' tasks');
    console.log(' ')
    console.log('You have ' + counter + ' tasks');
};

module.exports = list;
