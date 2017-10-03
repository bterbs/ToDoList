const { taskFile, readFromFile } = require('../fileio/fileio.js');

const list = () => {
  const items = readFromFile(taskFile);
  console.log('ID Description');
  console.log('-- -----------');
  for (let i = 0; i < items.length; i += 1) {
    if (items[i].completed === false) {
      console.log(`${items[i].id_number} ${items[i].task}`);
    }
  }

  let counter = 0;
  for (let i = 0; i < items.length; i += 1) {
    if (items[i].completed === false) {
      counter += 1;
    }
  }

  console.log(' ');
  console.log(`You have ${counter} tasks`);
};

module.exports = list;
