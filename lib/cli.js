const { writeFile } = require('fs/promises');
const inquirer = require("inquirer")


const { Circle, Triangle, Square } = require("./shapes");
const SVG = require("./svg")

class CLI { 
    run(){
        const questions = [
            {
                type: 'input',
                name: 'userIntials',
                message: 'Enter text up to three characters long.',
            },
            {
                type: 'input',
                name: 'userIntialsColor',
                message: 'Enter a color value for the text.',
            },
            {
                type: 'list',
                message: 'What shape would you like to use?',
                choices: ["Circle","Triangle","Square"],
                name: 'userShapeChoice',
            },
            {
                type: 'input',
                name: 'userShapeColor',
                message: 'Enter a color value for the shape',
            },
        ]
        return inquirer
        .prompt(questions)
        .then(({ userIntials, userIntialsColor, userShapeChoice, userShapeColor })=>{
            let = shapeObj
            switch (userShapeChoice) {
                case "Circle":
                    shapeObj = new Circle()
                    break;
                case "Triangle":
                    shapeObj = new Triangle()
                    break;
                default:
                    shapeObj = new Square()
                    break;                           
            }
            shapeObj.setColor(userShapeColor)
            const svgObj =  new SVG()
            svgObj.setShape()
            svgObj.setText(userIntialsColor, userIntials)
            return writeFile ( "../examples/logo.svg", svgObj.render())
        })
        .then(()=>{
            console.log("Generated logo.svg");
        })
        .catch((error)=>{
            console.log(error);
            console.log("SVG couldn't be generated.");
        })
        
    }

}
module.exports = CLI;