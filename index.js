const inquirer = require('inquirer');
const fs = require('fs');
const markDown = require('./generateMarkdown')
// Links to the other files in the program

// Is the set of questions for the user
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

    .then((answers) => {
        const markdownPageContent = markDown(answers);

        fs.writeFile('README.md', markdownPageContent, (err) =>
            err ? console.log(err) : console.log('Successfully created readme!')
        );
    });

// pushes the answer to the readme file and then writes that file

