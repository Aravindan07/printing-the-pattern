const readlineSync = require("readline-sync");
const chalk = require('chalk');

console.log(chalk.yellowBright("This program will print the pattern based on your input\n"));

let nValue = readlineSync.question('Enter a value for N\n');

let option = readlineSync.question('\nHow to print the pattern\n a) normal\n b)reverse\n\n');

if(option === "a"){
  console.log('\n');
for(let i = 0; i < nValue; i++){
  for(let j = 0; j < i+1; j++){
    process.stdout.write(chalk.blueBright('*'));
  }
  console.log('\n');
}
}

if(option === 'b'){
  console.log('\n');
for(let i = 0; i < nValue; i++){
  for(let j = i; j < nValue; j++){
    process.stdout.write(chalk.blueBright('*'));
  }
  console.log('\n');
}
}