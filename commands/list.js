const fs = require('fs');
const readFromFile = require('../fileio/fileio.js').readFromFile;
const taskFile =
  process.env.NODE_ENV === 'test' ? './tasksTest.json' : './tasks.json';
var items = readFromFile(taskFile);

const list = () => {
  console.log('ID Description');
  console.log('-- -----------');

  for (var i = 0; i < items.length; i++) {
    if(items[i].completed === false){
    console.log(items[i].id_number + ' ' + items[i].task)
    };
  };

  var counter = 0;
  for (var i = 0; i < items.length; i++) {
    if(items[i].completed === false){
      counter+=1;
    };
  };

    console.log(' ')
    console.log('You have ' + counter + ' tasks');
};

module.exports = list;
