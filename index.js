const fs = require('fs').promises;
const inquirer = require('inquirer');

// SVGGenerator constructor function
function SVGGenerator(shape, text, textColor, logoColor) {
    this.shape = shape;
    this.text = text;
    this.textColor = textColor;
    this.logoColor = logoColor;
}

// Method to generate SVG content
SVGGenerator.prototype.generateSVG = function() {
    let svgContent = `<svg width="100" height="100">`;

    // Add shape based on user choice
    switch (this.shape) {
        case 'circle':
            svgContent += `<circle cx="50" cy="50" r="40" fill="${this.logoColor}" />`;
            break;
        case 'triangle':
            svgContent += `<polygon points="50,10 90,90 10,90" fill="${this.logoColor}" />`;
            break;
        case 'square':
            svgContent += `<rect x="10" y="10" width="80" height="80" fill="${this.logoColor}" />`;
            break;
        default:
            break;
    }

    // Add text
    svgContent += `<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;

    svgContent += `</svg>`;

    return svgContent;
};

// Method to write SVG content to file
SVGGenerator.prototype.saveSVGToFile = async function(filename) {
    try {
        const svgContent = this.generateSVG();
        await fs.writeFile(filename, svgContent);
        console.log(`SVG file "${filename}" has been saved.`);
    } catch (error) {
        console.error('Error writing SVG file:', error);
    }
};

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

// Main function to orchestrate the process
async function main() {
    try {
        const userInput = await logoInfoCollector();
        console.log('User input:', userInput);

        // Create SVGGenerator instance with user input
        const svgGenerator = new SVGGenerator(userInput.shapeChoice, userInput.logoText, userInput.textColor, userInput.logoColor);

        // Generate SVG and save to file
        await svgGenerator.saveSVGToFile('output.svg');

    } catch (error) {
        console.error('Error in main:', error);
    }
}

// Start the application
main();
