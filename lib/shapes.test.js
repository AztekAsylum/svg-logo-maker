const { Circle, Triangle, Square } = require("./shapes");
const SVG = require("./svg");

describe("Class Tests", () => {
  describe("Triangle", () => {
    it("Testing render method", () => {
      const color = "Green";
      const shape = new Triangle(color);
      const test = `<polygon points="100,5 5,195 195,195 "  fill ="${color}"/>`;

      expect(shape.render()).toEqual(test);
    });
  });
  describe("Square", () => {
    it("Testing render method", () => {
      const color = "Green";
      const shape = new Square(color);
      const test = `<rect x="5" y="5" width="190" height="190" fill ="${color}"/>`;

      expect(shape.render()).toEqual(test);
    });
  });
  describe("Circle", () => {
    it("Testing render method", () => {
      const color = "Green";
      const shape = new Circle(color);
      const test = `<circle cx="100" cy="100" r="95" fill ="${color}"/>`;

      expect(shape.render()).toEqual(test);
    });
  });
  describe("SVG", () => {
    it("Testing setText method", () => {
      const textColor = "Green";
      const userText = "MRR";
      const svg = new SVG();
      const test = `<text text-anchor="middle" x="100" y="125" fill="${textColor}" font-size="70" >${userText}</text>`;
      svg.setText(textColor, userText);
      expect(svg.text).toEqual(test);
    });
    it("Testing setShape method", () => {
      const color = "Green";
      const shape = new Circle(color);
      const test = `<circle cx="100" cy="100" r="95" fill ="${color}"/>`;
      const svg = new SVG();
      svg.setShape(shape);
      expect(svg.shape).toEqual(test);
    });
    it("Testing render method", () => {
      const color = "Green";
      const shape = new Circle(color);
      const textColor = "Green";
      const userText = "MRR";
      const textTest = `<text text-anchor="middle" x="100" y="125" fill="${textColor}" font-size="70" >${userText}</text>`;
      const shapetest = `<circle cx="100" cy="100" r="95" fill ="${color}"/>`;
      const test = `<svg version="1.1" width="200" height="200" xmlns="http://www.w3.org/2000/svg">${shapetest}${textTest}</svg>`;
      const svg = new SVG();
      svg.setShape(shape);
      svg.setText(textColor, userText);
      expect(svg.render()).toEqual(test);
    });
  });
});
