const fs = require('fs');
let items = JSON.parse(fs.readFileSync('./myList.json', 'utf8'));


const list = () => {
  console.log('ID Description');
  console.log('-- -----------');

  for (var i = 0; i < items.length; i++) {
    if(items[i].completed === false){
    console.log(items[i].id_number + ' ' + items[i].task)
    };
  };

    console.log(' ')
    console.log('You have ' + items.length + ' tasks');
};

module.exports = list;
