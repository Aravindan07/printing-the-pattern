const readlineSync = require("readline-sync");
const chalk = require('chalk');

console.log(chalk.yellowBright("This program will print the pattern based on your input\n"));

let nValue = readlineSync.question('Enter a value for N (should be a number starting from 1)\n');

function printPatternFn() {
  let option = readlineSync.question('\nHow to print the pattern ? (Type either a or b)\n a) normal\n b) reverse \n\n');
  if (option === "a") {
    console.log('\n');
    for (let i = 0; i < nValue; i++) {
      for (let j = 0; j < i + 1; j++) {
        process.stdout.write(chalk.blueBright('*'));
      }
      console.log('\n');
    }
    return '\n';
  }

  if (option === 'b') {
    console.log('\n');
    for (let i = 0; i < nValue; i++) {
      for (let j = i; j < nValue; j++) {
        process.stdout.write(chalk.blueBright('*'));
      }
      console.log('\n');
    }
    return "\n";
  }

  if (option !== 'a' || option !== 'b' || Number.isInteger(option)) {
    console.log(chalk.redBright("Invalid option please try again"));
    console.log(chalk.redBright("Click on the run button to try again"));
    return '\n';
  }
}






if (Number.isInteger(Number(nValue)) === false) {
  console.log(chalk.redBright("Invalid number please try again"));
  console.log(chalk.redBright("Click on the run button to try again"));
}
else {
  printPatternFn();
}


