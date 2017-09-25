const fs = require('fs');
let items = JSON.parse(fs.readFileSync('./myList.json', 'utf8'));

const list = () => {
  console.log('ID Description');
  console.log('-- -----------');
  items.forEach((item, index) => {
    console.log(index+1 + ' ' + item)});
    console.log(' ')
    console.log('You have ' + items.length + ' tasks');
};

module.exports = list;
