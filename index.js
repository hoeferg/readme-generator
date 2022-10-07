// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const markDown = require('./generateMarkdown')

// const generateREADME = ({ description, installation, usage, issues, contributions, questions, credits, licenses }) =>
// # $(question.title)

// ##

// TODO: Create an array of questions for user input
// const questions = [];
inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of the project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'What is the description of the project?',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How do you use your application?',
        },
        {
            type: 'input',
            name: 'issue',
            message: 'Where can people contact you if there is an issue?',
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'What do people need to know about to contribute to the project?',
        },
        {
            type: 'input',
            name: 'test',
            message: 'How can you test your application?',
        },
        {
            type: 'input',
            name: 'userStory',
            message: 'What is your user-story?',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'How do you install the application?',
        },
        {
            type: 'input',
            name: 'technologiesUsed',
            message: 'What technologies did you use in your project?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email?'
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your github username?',
        },
        {
            type: 'input',
            name: 'credits',
            message: 'Who worked on the project with you?',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Do you have a license',
            choices: ["MIT", "Apache", "Mozilla", "none"]
        },
    ])
    // TODO: Create a function to write README file
    // function writeToFile(readme, generateREADME(answers)) { }
    .then((answers) => {
        const markdownPageContent = markDown(answers);

        fs.writeFile('README.md', markdownPageContent, (err) =>
            err ? console.log(err) : console.log('Successfully created readme!')
        );
    });
// TODO: Create a function to initialize app


// Function call to initialize app


/* create a readme with the following
Description
Installation
Usage
Report issues
Contribution&mdash
Test
questions
Credits
License
*/

// TODO: add yes and no option for license,
// TODO: add checkbox to license
// TODO: create readme file layout
// TODO: add a badge for the lisens
// TODO: need to add discription of licens if chosen
// TODO: add section for github username and connect it to github profile
// TODO: add email section to be put in the additional questions
// TODO: when I click on the links in table of contents it takes you to other parts