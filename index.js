const readlineSync = require("readline-sync");
const chalk = require('chalk');

console.log(chalk.yellowBright("This program will print the pattern based on your input\n"));

function printPatternFn(){
  let option = readlineSync.question('\nHow to print the pattern\n a) normal\n b)reverse\n\n');

  if(option !== 'a' || option !== 'b' || Number.isInteger(option)){
    console.log(option !== 'a');
    console.log(option !== 'b');
    console.log(Number.isInteger(option));
    console.log(chalk.redBright("Invalid option please try again"));
  }

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
}



let nValue = readlineSync.question('Enter a value for N\n');

if(Number.isInteger(Number(nValue)) === false){
  console.log(chalk.redBright("Invalid number please try again"));
}
else{
  printPatternFn();
}


