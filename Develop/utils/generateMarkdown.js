// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}
https://github.com/${data.Username}/${data.Title}
#Description
${data.Description}
*[Table of Content]
*[Installation](#installation)
*[Usage](#usage)
*[Contributing](#contributing)
*[License](#license)
*[Tests](#Tests)
*[Questions](#Questions)

# Installation
Please install the following dependencies to run the application properly: 
${data.Installaion}

# Usage
Below are the instructions and examples for use: 
${data.Usage}

#Contributors:
${data.Contributing}

# License under the following:
 ${data.Licnese}
![GitHub licnese](https://img.shields.io/badge/license-MIT-blue.svg)

#Tests
The following are needed to run the test: ${data.Tests}

#Questions
If you have any questions, please open a issue or contact ${data.Username} directly at : ${data.Email}.
`;
}

module.exports = generateMarkdown;
