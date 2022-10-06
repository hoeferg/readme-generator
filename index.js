// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [];
inquirer
    .prompt([
        {
            type: 'input',
            name: 'description',
            message: 'What is the description of the project?',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'How do you install the app?',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How do you use the app?',
        },
        {
            type: 'input',
            name: 'issues',
            message: 'Are there any issues',
        },
        {
            type: 'input',
            name: 'contributions',
            message: '',
        },
        {
            type: 'input',
            name: 'linkedin',
            message: 'Enter your LinkedIn URL.',
        },
    ])
// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();

/* create a readme with the following
Description
Installation
Usage
Report issues
Contribution&mdash
Credits
License
*/