// TODO: Include packages needed for this application
const inquirer = require("inquirer");

//generate the readme template under utils with generateMarkdown
const generatorMarkdown = require("./utils/generateMarkdown");

const util = require("util");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "Title",
    message: "What is the title of the project? (Required)",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter a Title for this project!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "Description",
    message: "Provide detail description of this project",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter a description for this project!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "Installation",
    message: "What does the user need to install for the program to run?",
  },
  {
    type: "input",
    name: "Usage",
    message: "How is the app used? Provide instructions",
  },
  {
    type: "input",
    name: "Contributing",
    message: "Who contributed to this project?",
  },
  {
    type: "input",
    name: "Tests",
    message: "What commands are needed to test this app?",
  },
  {
    type: "input",
    name: "License",
    message: "What license is being used?",
  },
  {
    type: "input",
    name: "Contact",
    message: "Contact info for inquiries",
  },
  {
    type: "input",
    name: "Username",
    message: "What is your Github username?",
  },
  {
    type: "input",
    name: "Email",
    message: "What is your email?",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function (err) {
    console.log(fileName);
    console.log(data);
    if (err) {
      return console.log(err);
    } else {
      console.log("success");
    }
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then(function (data) {
    writeToFile("README.md", generatorMarkdown(data));
    console.log(data);
  });
}

// Function call to initialize app
init();
