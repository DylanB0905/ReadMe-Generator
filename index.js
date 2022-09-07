// packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// an array of questions for user input
const questions = [
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'title',
                message: 'What is the title of your project?',
            },
            {
                type: 'input',
                name: 'description',
                message: 'Provide a short description explaining the what, why, and how of your project.',
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
                message: 'List your colloaborators, If any, with links to their github profiles.',
            },
            {
                type: 'list',
                name: 'license',
                message: 'Which License will you use for your project?',
                choices: ['agp1', 'apache', 'mit', 'no license']
            },
            {
                type: 'input',
                name: 'test',
                message: 'Provide instructions on how to test the application',
            },
        
        ])
];

// function to write README file
function writeToFile(fileName, data) {

}

// function to initialize app
function init() {

}

// Function call to initialize app
init();
