// Exports `Triangle`, `Circle`, and `Square` classes


function renderShape() {
    //MUST INCLUDE Triangle, Circle, and Square AND parent 'shape'
    class Shapes {
        constructor(text, textColor, backgroundColor) {   
        this.shape = this.shape
        }
    }

    class Circle extends Shapes {
        render() {
            return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
        }
    }

    class Triangle extends Shapes {
        render() {
            return `<polygon points="100,10 190,190 10,190" fill="${this.color}" />`;
        }
    }

    class Square extends Shapes {
        render() {
            return `<rect x="10" y="10" width="100" height="100" fill="${this.color}" />`;
        }
    }

}
module.exports = renderShape();