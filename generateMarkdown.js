// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`;

    case "Apache":
      return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]`;

    case "Mozilla":
      return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]`;
    case "none":
      return `N/A`;

  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { 
  if (license !== "none") {
    switch (license) {
      case "MIT":
        return `[![License: MIT](https://opensource.org/licenses/MIT)`;
  
      case "Apache":
        return `[![License](https://opensource.org/licenses/Apache-2.0)`;
  
      case "Mozilla":
        return `[![License: MPL 2.0](https://opensource.org/licenses/MPL-2.0)`;
      case "none":
        return `N/A`;
  
    }
  }



// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "none") {
    return `  ## License
    ${license}`
  }
  return ""
}

// TODO: Create a function to generate markdown for README
function generateREADME(answers) {
  return `
  # ${answers.title}
  ${renderLicenseBadge(answers.license)}
  ## Table of Content
  * [Project description](#description)
  * [Usage](#usage)
  * [Report Issues](#issue)
  * [Contribution](#contribution)
  * [Test](#test)
  * [User Story](#userStory)
  * [Installation](#installation)
  * [Technology Used](#technologiesUsed)
  * [Questions](#questions)
  * [Credits](#credits)
  ${renderLicenseLink(answers.license)}

  ## Description 
  ${answers.description}

  ## Usage
  ${answers.usage}

  ## Issue
  ${answers.issues}

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

  ## Contributions
  ${answers.contribution}

  ## Questions
  ${answers.questions}

  ${renderLicenseSection(answers.license)}


`;
}

module.exports = generateREADME;

