class Shape {
  constructor(color) {
    this.color = color;
  }
//   setColor(colorChoice) {
//     this.color = colorChoice;
//   }
}

class Circle extends Shape {
    constructor(color) {
        super(color)
      }
  render() {
    return `<circle cx="100" cy="100" r="95" fill ="${this.color}"/>`;
  }
}
class Triangle extends Shape {
    constructor(color) {
        super(color)
      }
  render() {
    return `<polygon points="100,5 5,195 195,195 "  fill ="${this.color}"/>`;
  }
}
class Square extends Shape {
    constructor(color) {
        super(color)
      }T
  render() {
    return `<rect x="5" y="5" width="190" height="190" fill ="${this.color}"/>`;
  }
}

module.exports = { Circle, Triangle, Square };
