// TODO: Include packages needed for this application
const inquirer = require("inquirer");

const fs = require("fs");
const generatorMarkdown = require("./utils/generateMarkdown");
const util = require("util");

// TODO: Create an array of questions for user input

const questions = [
  {
    type: "input",
    name: "Title",
    message: "What is the title of the project?",
  },
  {
    type: "input",
    name: "Description",
    message:
      "What is the project about?  Give a detailed description of your project.",
  },
  // {
  //   type: "input",
  //   name: "Content",
  //   message: "Table of Content",
  // },
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
    name: "License",
    message: "What license is being used?",
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
    name: "Contact",
    message: "Contact info for inquiries",
  },
  {
    type: "input",
    name: "Gitusername",
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

// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README
