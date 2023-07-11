const { Triangle, Circle, Square } = require("./shapes.js");

describe('Shape', () => {
  describe('triangle', () => {
      it('should create triangle shape', () => {
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
      });
    });
});
  

describe('Shape', () => {
  describe('circle', () => {
      it('should create circle shape', () => {
        const shape = new Circle();
        shape.setColor("pink");
        expect(shape.render()).toEqual('<circle cx="150" cy="100" r="75" fill="pink" />');
      });
    });
});

describe('Shape', () => {
  describe('square', () => {
      it('should create square shape', () => {
        const shape = new Square();
        shape.setColor("yellow");
        expect(shape.render()).toEqual('<rect x="50" y="50" width="200" height="100" fill="yellow" />');
      });
    });
});