// bds: I'd like to see this file made compliant with airbnb eslint

const fs = require('fs');

// bds: here is the only place you should need this code
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
  // bds: since you're exporting the taskFile constant here, you simply need to
  // bds: import it in your commands files, rather than redefine it.
  taskFile,
}
