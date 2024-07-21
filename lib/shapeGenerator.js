
// CircleGenerator constructor function
function Circle(text, textColor, logoColor) {
    this.text = text;
    this.textColor = textColor;
    this.logoColor = logoColor;
}
// Method to generate SVG content for circle
Circle.prototype.generateSVG = function() {
    let svgContent = `<svg width="100" height="100">`;
    svgContent += `<circle cx="50" cy="50" r="40" fill="${this.logoColor}" />`;
    svgContent += `<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
    svgContent += `</svg>`;
    return svgContent;
};

module.exports = Circle;


// TriangleGenerator constructor function
function Triangle(text, textColor, logoColor) {
    this.text = text;
    this.textColor = textColor;
    this.logoColor = logoColor;
}
// Method to generate SVG content for triangle
Triangle.prototype.generateSVG = function() {
    let svgContent = `<svg width="100" height="100">`;
    svgContent += `<polygon points="50,10 90,90 10,90" fill="${this.logoColor}" />`;
    svgContent += `<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
    svgContent += `</svg>`;
    return svgContent;
};

module.exports = Triangle;


// SquareGenerator constructor function
function Square(text, textColor, logoColor) {
    this.text = text;
    this.textColor = textColor;
    this.logoColor = logoColor;
}
// Method to generate SVG content for square
Square.prototype.generateSVG = function() {
    let svgContent = `<svg width="100" height="100">`;
    svgContent += `<rect x="10" y="10" width="80" height="80" fill="${this.logoColor}" />`;
    svgContent += `<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
    svgContent += `</svg>`;
    return svgContent;
};

module.exports = Square;



