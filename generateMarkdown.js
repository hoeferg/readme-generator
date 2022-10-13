function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`;

    case "Apache":
      return `[![License: Apache](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]`;

    case "Mozilla":
      return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]`;
    case "none":
      return `N/A`;
  }
}


function renderLicenseLink(license) {
  if (license !== "none") {
    switch (license) {
      case "MIT":
        return `[![License: MIT](https://opensource.org/licenses/MIT)`;

      case "Apache":
        return `[![License: Apache](https://opensource.org/licenses/Apache-2.0)`;

      case "Mozilla":
        return `[![License: MPL 2.0](https://opensource.org/licenses/MPL-2.0)`;
      case "none":
        return `N/A`;

    }
  }
}


function renderLicenseSection(license) {
  if (license !== "none") {
    return ` ## License
    
    This project is license under the ${license} license.`
  }
  return ""
}

function generateREADME(answers) {
  return `
# ${answers.title}
${renderLicenseBadge(answers.license)}
## Table of Content
  * [Description](#description)
  * [Usage](#usage)
  * [Issue](#issue)
  * [Contribution](#contribution)
  * [Test](#test)
  * [User Story](#user-story)
  * [Installation](#installation)
  * [Technology Used](#technology-used)
  * [Questions](#questions)
  * [Credits](#credits)
  * [License](#license)


## Description 
${answers.description}

## Usage
${answers.usage}

## Issue
${answers.issue}

## Contribution
${answers.contribution}

## Test
${answers.test}

## User Story
${answers.userStory}

## Installation
${answers.installation}

## Technology Used
${answers.technologiesUsed}

## Questions
If you have any questions, how to contribute or additional feedback, please contact our GitHub Repository and we will get back to you as soon as possible.

Contact Info: 
GitHub: [${answers.github}](https://github.com/${answers.github})
  
## Credits
${answers.credits}

${renderLicenseSection(answers.license)}
`;
}

module.exports = generateREADME;

