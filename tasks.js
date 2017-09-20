#!/usr/bin/env node

const fs = require('fs');
const command = process.argv[2];
const string = process.argv.slice(3).join(' ');

switch(command){
  case "add":
    console.log('add ' + string)
    break;

  case "delete":
    console.log('delete ' + string)
    break;

  case "list":
    console.log('list ' + string)
    break;

    case "complete":
      console.log('completed ' + string)
      break;
}
