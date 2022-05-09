const inquirer = require('inquirer');
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const Page = require('./Page')
const writeFile = require('./writeFile');

function Prompt() {
    this.manager;
    this.engineers = [];
    this.interns = [];
}

// initial prompt
Prompt.prototype.init = function() {
    inquirer
        .prompt([
            {
                type: 'text',
                name: 'name',
                message: 'Enter the manager\'s name.'
            },
            {
                type: 'text',
                name: 'id',
                message: 'Enter the manager\'s employee ID.'
            },
            {
                type: 'text',
                name: 'email',
                message: 'Enter the manager\'s email address.'
            },
            {
                type: 'text',
                name: 'officeNumber',
                message: 'Enter the manager\'s office number.'
            }
        ])
        .then(response => {
            this.manager = new Manager(response.name, response.id, response.email, response.officeNumber);
            this.newTeamMember();
        })
}

// add another team member or exit prompt
Prompt.prototype.newTeamMember = function () {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'newMember',
                message: 'Add a new team member or finish the team.',
                choices: [
                    'Add Engineer',
                    'Add Intern',
                    'Finish Team'
                ]
            }
        ])
        .then(response => {
            if (response.newMember === 'Add Engineer') {
                this.addEngineer();
            } else if (response.newMember === 'Add Intern') {
                this.addIntern();
            } else {
                this.dataHandler();
            }
        })
}

// Engineer prompt
Prompt.prototype.addEngineer = function () {
    inquirer
        .prompt([
            {
                type: 'text',
                name: 'name',
                message: 'Enter the engineer\'s name.'
            },
            {
                type: 'text',
                name: 'id',
                message: 'Enter the engineer\'s employee ID.'
            },
            {
                type: 'text',
                name: 'email',
                message: 'Enter the engineer\'s email address.'
            },
            {
                type: 'text',
                name: 'github',
                message: 'Enter the engineer\'s GitHub username.'
            },
        ])
        .then(response => {
            engineerInput = new Engineer(response.name, response.id, response.email, response.github);
            this.engineers.push(engineerInput);
            this.newTeamMember();
        })
}

// Intern prompt
Prompt.prototype.addIntern = function () {
    inquirer
        .prompt([
            {
                type: 'text',
                name: 'name',
                message: 'Enter the intern\'s name.'
            },
            {
                type: 'text',
                name: 'id',
                message: 'Enter the intern\'s employee ID.'
            },
            {
                type: 'text',
                name: 'email',
                message: 'Enter the intern\'s email address.'
            },
            {
                type: 'text',
                name: 'school',
                message: 'Enter the intern\'s school.'
            },
        ])
        .then(response => {
            internInput = new Intern(response.name, response.id, response.email, response.school);
            this.interns.push(internInput);
            this.newTeamMember();
        })
}

// send inquirer info to Page and writeFile
Prompt.prototype.dataHandler = function () {
    let page = new Page().generateHtml(this.manager, this.engineers, this.interns);
    writeFile(page)
        .then(writeFileResponse => {
            console.log(writeFileResponse);
        })
        .catch(err => {
            console.log(err);
        });
}

module.exports = Prompt;