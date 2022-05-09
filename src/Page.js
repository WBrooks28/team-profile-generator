const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

function Page() {
    this.manager
    this.engineer = [];
    this.intern = [];
}

// generate manager card html
Page.prototype.generateManager = function (manager) {
    return `
        <div class="card col-3 m-3 p-0">
            <div class="card-header bg-primary text-center text-light">
                <h3>${manager.name}</h3>
                <h4>${manager.getRole()}</h4>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${manager.id}</li>
                <li class="list-group-item">
                    Email:  <br/>
                    <a href="mailto:${manager.email}">${manager.email}</a>
                </li>
                <li class="list-group-item">
                    Office Number: <br/>
                    ${manager.getOfficeNumber()}
                </li>
            </ul>
        </div>
    `
}

// generate engineer card html
Page.prototype.generateEngineer = function (engineer) {
    let engineerCards = [];
    for (let i = 0; i < engineer.length; i++) {
        engineerCards.push(`
            <div class="card col-3 m-3 p-0">
                <div class="card-header bg-primary text-center text-light">
                    <h3>${engineer[i].name}</h3>
                    <h4>${engineer[i].getRole()}</h4>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${engineer[i].id}</li>
                    <li class="list-group-item">
                        Email:  <br/>
                        <a href="mailto:${engineer[i].email}">${engineer[i].email}</a>
                    </li>
                    <li class="list-group-item">
                        Github: <br/>
                        <a class="text-decoration-none" href="${engineer[i].getGitHub()}">${engineer[i].github}</a>
                    </li>
                </ul>
            </div>
        `);
    }
    return engineerCards.join('');
}

// generate intern card html
Page.prototype.generateIntern = function (intern) {
    let internCards = [];
    for (let i = 0; i < intern.length; i++) {
        internCards.push(`
            <div class="card col-3 m-3 p-0">
                <div class="card-header bg-primary text-center text-light">
                    <h3>${intern[i].name}</h3>
                    <h4>${intern[i].getRole()}</h4>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${intern[i].id}</li>
                    <li class="list-group-item">
                        Email:  <br/>
                        <a href="mailto:${intern[i].email}">${intern[i].email}</a>
                    </li>
                    <li class="list-group-item">
                        School:
                        ${intern[i].getSchool()}
                    </li>
                </ul>
            </div>
        `);
    }
    return internCards.join('');
}

Page.prototype.generateHtml = function (manager, engineer, intern) {
    this.manager = manager;
    this.engineer = engineer;
    this.intern = intern;

    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
        <title>Team Profile Generator</title>
    </head>
    <body>
        <header class="header header-fluid bg-primary p-3">
            <div class="container">
                <h1 class="text-center text-light">My Team</h1>
            </div>
        </header>
        <main class="container">
            <section class="row">
                ${this.generateManager(this.manager)}
                ${this.generateEngineer(this.engineer)}
                ${this.generateIntern(this.intern)}
            </section>
        </main>
    </body>
    </html>
    `;
};

module.exports = Page;