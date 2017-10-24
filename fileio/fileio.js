const fs = require('fs');

const taskFile =
  process.env.NODE_ENV === 'test' ? './tasksTest.json' : './tasks.json';

const readFromFile = (x, callback) => {
  fs.readFile(taskFile, 'utf8', function(err, file) {
    const parsedJSON = JSON.parse(file);
    callback(parsedJSON);
  })
}

const initializeFile = () => {
  fs.writeFile(taskFile, '[]');
};

const createFileIfNeeded = () => {
  try {
    fs.statSync(taskFile);
  } catch (err) {
    if (err.code === 'ENOENT') {
      initializeFile();
    } else {
      throw err;
    }
  }
};

const writeToFile = (jsonString) => {
  fs.writeFile(taskFile, jsonString);
};

module.exports = {
  createFileIfNeeded,
  initializeFile,
  readFromFile,
  writeToFile,
  taskFile,
};
