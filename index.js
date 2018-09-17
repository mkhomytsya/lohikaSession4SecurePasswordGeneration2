#!/usr/bin/env node

const program = require('commander');
const util = require('./password.js');

program
  .version('0.0.1')
  .option('-l, --length <n>', 'password length. Minimal length is 8 characters, default\
   length is 14 characters. Cannot be less than uppercase + digits + special')
   .option('-u, --uppercase <n>', 'minimal number of uppercase characters. Default is 1.\
   Cannot be greater than length – digits - special')
   .option('-d, --digits <n>', 'minimal number of digits Default is 1. Cannot be greater than\
   length – uppercase - special')
   .option('-s, --special <n>', 'minimal number of special characters. Default is 1. Cannot be\
   greater than length – uppercase - digits')
  .parse(process.argv);
 
try {
    console.log(`${util.generate(program.length, program.uppercase, program.digits, program.special)}`);
} catch(e) {
    console.log(`ERROR: ${e}`);
}

