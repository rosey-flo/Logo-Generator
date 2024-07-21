const Circle = require('./shapeGenerator');
const Triangle = require('./shapeGenerator');
const Square = require('./shapeGenerator');


describe('Shape Generators', () => {
    test('CircleGenerator generates correct SVG', () => {
        const circleGenerator = new Circle('ABC', 'white', 'red');
        const svgContent = circleGenerator.generateSVG();

        // Example assertion, modify based on your expected SVG output
        expect(svgContent).toContain('<svg width=\"100\" height=\"100\"><rect x=\"10\" y=\"10\" width=\"80\" height=\"80\" fill=\"red\" /><text x=\"50%\" y=\"50%\" dominant-baseline=\"middle\" text-anchor=\"middle\" fill=\"white\">ABC</text></svg>');

    });

    test('TriangleGenerator generates correct SVG', () => {
        const triangleGenerator = new Triangle('XYZ', 'black', 'green');
        const svgContent = triangleGenerator.generateSVG();

        // Example assertion, modify based on your expected SVG output
        expect(svgContent).toContain('<svg width=\"100\" height=\"100\"><rect x=\"10\" y=\"10\" width=\"80\" height=\"80\" fill=\"green\" /><text x=\"50%\" y=\"50%\" dominant-baseline=\"middle\" text-anchor=\"middle\" fill=\"black\">XYZ</text></svg>');

    });

    test('Square generates correct SVG', () => {
        const squareGenerator = new Square('PQR', 'white', 'yellow');
        const svgContent = squareGenerator.generateSVG();

        // Example assertion, modify based on your expected SVG output
        expect(svgContent).toContain('<rect');
        expect(svgContent).toContain('fill="yellow"');
        expect(svgContent).toContain('<text');
        expect(svgContent).toContain('fill="white"');
    });
});