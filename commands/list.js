const fs = require('fs');
let items = JSON.parse(fs.readFileSync('./myList.json', 'utf8'));

const list = () => {
  console.log('ID Description');
  console.log('-- -----------');
  items.forEach((item, index)=>{
    console.log(index+1 + ' ' + item)});
};

module.exports = list;
