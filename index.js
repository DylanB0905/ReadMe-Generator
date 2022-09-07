// packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown.js");


// an array of questions for user input
const questions = [
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
        },
        {
            type: 'input',
            name: 'repo',
            message: 'What is the link to the github repo for the project?',

        },
        {
            type: 'input',
            name: 'description',
            message: 'What is your project and what problem does said project solve?',
        },
        {
            type: 'input',
            name: 'why',
            message: 'Why did you create this project?',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the steps required to install your project?',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions and examples for use.',
        },
        {
            type: 'input',
            name: 'credits',
            message: 'List your collaborators, if any, with links to their githubs.',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Which License will you use for your project?',
            choices: ['agp1', 'apache', 'mit', 'mozilla public license 2.0', 'no license']
        },
        {
            type: 'input',
            name: 'test',
            message: 'Provide instructions on how to test the application',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your Email?',
        },
        {
            type: 'input',
            name: 'githubUsername',
            message: 'What is your github username?',
        },
        
    
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err)
            throw err;
        console.log('Data collected successfully transferred to the REASDME!')
    });
};

// function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function (userInput) {
        console.log(userInput)
        writeToFile("README.md", generateMarkdown(userInput));
    });
};

// Function call to initialize app
init();
