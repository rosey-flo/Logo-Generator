const fs = require('fs').promises;
const logoInfoCollector = require('./lib/userdata');
const Circle = require('./lib/shapeGenerator');
const Triangle = require('./lib/shapeGenerator');
const Square = require('./lib/shapeGenerator');

// init function to start the process
async function init() {
    try {
        const userInput = await logoInfoCollector();
        console.log('User input:', userInput);

        let svgGenerator;
        // Create generator based on shape choice
        switch (userInput.shapeChoice) {
            case 'circle':
                svgGenerator = new Circle(userInput.logoText, userInput.textColor, userInput.logoColor);
                break;
            case 'triangle':
                svgGenerator = new Triangle(userInput.logoText, userInput.textColor, userInput.logoColor);
                break;
            case 'square':
                svgGenerator = new Square(userInput.logoText, userInput.textColor, userInput.logoColor);
                break;
            default:
                throw new Error('Invalid shape choice');
        }

        // Generate SVG and save to file
        const svgContent = svgGenerator.generateSVG();
        await fs.writeFile('output.svg', svgContent);
        console.log('SVG file "output.svg" has been saved.');

    } catch (error) {
        console.error('Error in init:', error);
    }
}

// Start the application
init();

