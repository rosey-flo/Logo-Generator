const inquirer = require('inquirer');



// Function to collect user input
async function logoInfoCollector() {
  return inquirer.prompt([
      {
          name: 'shapeChoice',
          message: 'Please select a shape',
          type: 'list',
          choices: ['circle', 'triangle', 'square']
      },
      {
          name: 'logoText',
          message: 'Please enter up to 3 characters to have in your logo',
          type: 'input'
      },
      {
          name: 'textColor',
          message: 'Please select your text color',
          type: 'list',
          choices: ['white', 'black'] 
      },
      {
          name: 'logoColor',
          message: 'Please select a color for your logo',
          type: 'list',
          choices: ['red', 'blue', 'green', 'yellow']
      }
  ]);
}
module.exports = logoInfoCollector;