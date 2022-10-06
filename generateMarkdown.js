// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      return `[![License: MIT](https://img.sheilds.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;

    case "Apache":
      return `[![License](https://img.sheilds.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;

    case "Mozilla":
      return `[![License](https://img.sheilds.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
    case "none":
      return ``;

  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { 
  if (license !== "none") {
    return ` * [License](#license)`
  }
  return ""
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
  * [Contributing](#contributing)
  * [Installation](#questions)
  * [Questions](#questions)
  ${renderLicenseLink(answers.license)}

  ## Description 
  ${answers.description}

  ## Usage
  ${answers.usage}

  ## Installation
  ${answers.installation}

  ## Contributing
  ${answers.contributing}

  ## Questions
  ${answers.email}
  ${answers.github}

  ${renderLicenseSection(answers.license)}


`;
}

module.exports = generateREADME;

