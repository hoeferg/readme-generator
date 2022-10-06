// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "mit":
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
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateREADME(data) {
  return `
  # ${answers.title}

  ## Table of Content
    -[Project description] (#description)
    -[Usage] (#usage)
    -[Contributing] (#contributing)
    -[Installation] (#questions)
    -[Questions] (#questions)
    -[License] (#License)

  ## Description 
  ${answer.description}

  ## Usage
  ${answer.usage}

  ## Installation
  ${answers.installation}

  ## Contributing
  ${answers.contributing}

  ## Questions
  ${answers.email}
  ${answers.github}

  ## License
  ${answers.license}


`;
}

module.exports = generateMarkdown;

