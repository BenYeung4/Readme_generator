// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(License) {
  if (License === "Apache License") {
    return `[![Apache License](https://img.shields.io/badge/License-Apachi-brightgreen)](https://choosealicense.com/licenses/apache-2.0/)`;
  } else if (License === "GNU License") {
    return `[![GNU License](https://img.shields.io/badge/License-GNU-red)](https://choosealicense.com/licenses/gpl-3.0/)`;
  } else if (License === "MIT License") {
    return `[![MIT License](https://img.shields.io/badge/License-MIT-blue)](https://choosealicense.com/licenses/mit/)`;
  } else {
    return "MISSING LICENSE BADGE & LINK";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(License) {
  if (License === "Apache License") {
    return `[Apache License](https://choosealicense.com/licenses/apache-2.0/)`;
  } else if (License === "GNU License") {
    return `[GNU License](https://choosealicense.com/licenses/gpl-3.0/)`;
  } else if (License === "MIT License") {
    return `[MIT License](https://choosealicense.com/licenses/mit/)`;
  } else {
    return "MISSING LICENSE LINK";
  }
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
  ![Screenshot](assets/images/screenshot.png)

## Contributors:
${data.Contributing}

## Tests:
The following are needed to run the test:
${data.Tests}

## License under the following:
 ### ${renderLicenseBadge(data.License)}
 This application is licensed under the ${renderLicenseLink(data.License)}

## Questions
If you have any questions, please open a issue or contact the following:

Github Profile Contact: https://github.com/${data.Username}
Email Contact: ${data.Email}
`;
}

module.exports = generateMarkdown;
