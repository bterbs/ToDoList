#!/usr/bin/env node

const fs = require('fs');
const add = require('./commands/add');
const complete = require('./commands/complete.js');
const delete = require('./commands/delete.js');
const list = require('./commands/list.js');
const action = process.argv[2];


switch(action){
  case 'add(newTask)':

    break;

  case 'delete':
    console.log('delete ' + string)
    break;

  case 'list':
    console.log('list ' + string)
    break;

    case 'complete':
      console.log('completed ' + string)
      break;
}
