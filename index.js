// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide installation instructions for your project.',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide usage information for your project.',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Please provide contribution guidelines for your project.',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please provide test instructions for your project.',
    },
    {
        type : 'list',
        name : 'license',
        message :  'Choose a license for your project',
        choices : ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3', 'None']
    },
    {
        type : 'input',
        name : 'github',
        message : 'Enter is your GitHub username?'

    },
    {
        type : 'input',
        name : 'email',
        message : 'Enter your email address?'

    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('Success!')
    );
}


// Adds the license bade
function getLicenseBadge(license) {
    if (license === 'None') return '';
    return `![License](https://img.shields.io/badge/License-${license.replace(' ', '%20')}-blue.svg)`;
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        const licenseBadge = getLicenseBadge(answers.license);
        const licenseSection = answers.license !== 'None' ? `This project is licensed under the ${answers.license} license.` : '';
        const questionsSection = `For any questions, please contact me via [GitHub](https://github.com/${answers.github} or my email ${answers.email}).`;
        const readmeContent = `
# ${answers.title}

${licenseBadge}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Description
${answers.description}

## Installation
${answers.installation}

## Usage
${answers.usage}

## Contribution
${answers.contribution}

## Tests
${answers.tests}

## License
${licenseSection}

## Questions
${questionsSection}
   `;
        writeToFile('README.md', readmeContent);
    });
}

// Function call to initialize app
init();
