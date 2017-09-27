const fs = require('fs');

const taskFile =
  process.env.NODE_ENV === 'test' ? './tasksTest.json' : './tasks.json';

const initializeFile = () => {
  fs.writeFileSync(taskFile, '[]')
};

const createFileIfNeeded = () => {
  try {
    fs.statSync(taskFile);
    } catch (err) {
      if (err.code === 'ENOENT') {
        initializeFile()
    } else {
      throw err
    }
  }
};

const readFromFile = (taskFile) => JSON.parse(fs.readFileSync(taskFile), 'utf 8');

const writeToFile = (jsonString) => {
  fs.writeFileSync(taskFile, jsonString);
}

module.exports = {
  createFileIfNeeded,
  initializeFile,
  readFromFile,
  writeToFile,
  taskFile,
}
