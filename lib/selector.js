const inquirer = require('inquirer');

const shapeInfo = require('shapeInfo')




function logoInfoPrompt() {
  return inquirer.prompt([
    {
      name: 'logoText',
      message: 'Please enter up to 5 characters to have in your logo',
      type: 'input',
    }, 
    {
      name: 'textColor',
      message: 'Please select your text color',
      type: 'list',
      choices: ['white', 'black'] 
    }, 
    {
      name: 'shapeChoice',
      message: 'Please select a shape',
      type: 'list',
      choices: ['circle', 'triangle', 'rectangle'] 
    }, 
    {
      name: 'logoColor',
      message: 'Please select a color for your logo',
      type: 'list',
      choices: ['red', 'blue', 'green', 'yellow'] 
    },
  ])
};


//create a constructure object to use the user input
async function generateSVG({logoText, textColor, shapeChoice, logoColor }) {
  // Here you would construct the SVG content based on user inputs
  // For simplicity, let's assume a basic SVG structure
  return `
    <svg width="200" height="200">
      <rect width="100%" height="100%" fill="${logoColor}" />
      <text x="50%" y="50%" text-anchor="middle" fill="${textColor}">${logoText}</text>
      <!-- Add more shapes based on shapeChoice -->
    </svg>
  `;
}

module.exports = logoInfoPrompt;