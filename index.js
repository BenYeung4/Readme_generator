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
    message:
      "Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:",
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
    message:
      "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log(
          "Please provide a list of what needs to be installed for the program:"
        );
        return false;
      }
    },
  },
  {
    type: "input",
    name: "Usage",
    message: "Provide instructions and examples for use:",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please state the instructions on how the app is used:");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "Contributing",
    message:
      "List your collaborators, if any, with links to their GitHub profiles:",
  },
  {
    type: "input",
    name: "Tests",
    message: "What commands are needed to test this app?",
  },
  {
    type: "list",
    name: "License",
    message: "What license is used for the application?",
    choices: ["Apache License", "GNU License", "MIT License", "N/A"],
  },
  {
    type: "input",
    name: "Username",
    message: "What is your Github username?",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter your GitHub username!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "Email",
    message: "What is your email?",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log(
          "Please enter your Email that you would like to recieve messages in!"
        );
        return false;
      }
    },
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
      console.log("README.md has been created");
    }
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then(function (data) {
    writeToFile("./Example/README.md", generatorMarkdown(data));
    console.log(data);
  });
}

// Function call to initialize app
init();
