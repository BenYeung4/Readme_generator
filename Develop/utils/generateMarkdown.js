// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license[0]) {
    case "Apache License":
      badge = `![Apache License](https://img.shields.io/badge/License-Apachi-brightgreen)`;
      break;
    case "GNU License":
      badge = `![GNU License](https://img.shields.io/badge/License-GNU-red)`;
      break;
    case "MIT License":
      badge = `![MIT License](https://img.shields.io/badge/License-MIT-blue)`;
      break;
    default:
      badge = "MISSING LICENSE BADGE";
      break;
  }
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license[0]) {
    case "Apache License":
      link = `[Apache License](https://choosealicense.com/licenses/apache-2.0/)`;
      break;
    case "GNU License":
      link = `[GNU License](https://choosealicense.com/licenses/gpl-3.0/)`;
      break;
    case "MIT License":
      link = `[MIT License](https://choosealicense.com/licenses/mit/)`;
      break;
    default:
      link = "MISSING LICENSE LINK";
      break;
  }
  return link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.Title}
${renderLicenseBadge(data.License)}
## Description
${data.Description}

## Table of Content
- [Installation](#Installation)
- [Usage](#Usage)
- [Contributing](#Contributing)
- [Tests](#Tests)
- [License](#License)
- [Questions](#Questions)

## Installation
Please install the following dependencies to run the application properly:

${data.Installation}

## Usage:
Below are the instructions and examples for use: 
${data.Usage}

Screenshot located at:
assets/images/Screenshot.png

## Contributors:
${data.Contributing}

## Tests:
The following are needed to run the test:
${data.Tests}

## License under the following:
 ${data.License}

## Questions
If you have any questions, please open a issue or contact the following:

Github Profile Contact: https://github.com/${data.Username}
Email Contact: ${data.Email}
`;
}

module.exports = generateMarkdown;
