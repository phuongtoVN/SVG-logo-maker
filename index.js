const { Triangle, Circle, Square } = require("./lib/shapes");
const fs = require("fs");
const path = require("path");
async function init() {
    const { default: inquirer } = await import("inquirer");
  
    const userInput = [
      {
        name: "title",
        message: "What is your logo title? (enter up to 3 characters)",
        type: "input",
      },
      {
        name: "titleColor",
        message: "What is logo title color? enter a color keyword (OR a hexadecimal number)",
        type: "input",
      },
      {
        name: "shape",
        message: "What is your logo shape?",
        type:"list",
        choices: ["circle", "triangle", "square"],
      },
      {
        name: "shapeColor",
        message: "What is logo shape color? enter a color keyword (OR a hexadecimal number)",
        type: "input",
      },
    ];
  
    const response = await inquirer.prompt(userInput);
  
    let shape;
  
    switch (response.shape) {
      case "circle":
        shape = new Circle(response.title, response.shapeColor);
        break;
      case "triangle":
        shape = new Triangle(response.title, response.shapeColor);
        break;
      case "square":
        shape = new Square(response.title, response.shapeColor);
        break;
      default:
        console.log("Invalid shape");
        return;
    }
    shape.setColor(response.shapeColor);
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
    ${shape.render}
    <text x="150" y="120" text-anchor="middle" fill="${response.titleColor}" style="font-size: 50px">${response.title}</text>
  </svg>`;
    const fileName = path.join(__dirname, "examples", "logo.svg");
  
    fs.writeFile(fileName, svg, (err) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log("Generated logo.svg");
    });
  }
  
  init();
  