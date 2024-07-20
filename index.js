const fs = require('fs').promises;
const inquirer = require('inquirer');

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

//=================================================================

async function main() {
    try {
        const userInput = await logoInfoCollector();
        console.log('User input:', userInput);

        // Generate SVG based on user input and save to file
        await generateSVG(userInput.shapeChoice, userInput.logoText, userInput.textColor, userInput.logoColor, 'output.svg');

    } catch (error) {
        console.error('Error in main:', error);
    }
}
//=============================
async function generateSVG(shape, text, textColor, logoColor, filename) {
    let svgContent = `<svg width="100" height="100">`;

    // Add shape based on user choice
    switch (shape) {
        case 'circle':
            svgContent += `<circle cx="50" cy="50" r="40" fill="${logoColor}" />`;
            break;
        case 'triangle':
            svgContent += `<polygon points="50,10 90,90 10,90" fill="${logoColor}" />`;
            break;
        case 'square':
            svgContent += `<rect x="10" y="10" width="80" height="80" fill="${logoColor}" />`;
            break;
        default:
            break;
    }

    // Add text
    svgContent += `<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${textColor}">${text}</text>`;

    svgContent += `</svg>`;

    try {
        // Write SVG content to file
        await fs.writeFile(filename, svgContent);
        console.log(`SVG file "${filename}" has been saved.`);
    } catch (error) {
        console.error('Error writing SVG file:', error);
    }
}

//=============================
function init() {
    console.log(`
        ----------------------------------
        Welcome to the SVG logo generator
        ----------------------------------
        `);
}

async function startApp() {
    init(); // Display initial message
    await main(); // Start main logic flow
}

// Call startApp to begin the application
startApp();