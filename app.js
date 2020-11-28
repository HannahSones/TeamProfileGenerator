const Manager = require("./Lib/manager");
const Engineer = require("./Lib/engineer");
const Intern = require("./Lib/intern");
const Employee = require("./Lib/employee");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./Lib/htmlRenderer");

// Push all team members into a final array
let finalTeamArray = [];

// Start creating the team, first with a manager
function buildTeam() {
  inquirer.prompt([
    {
      type: "input",
      name: "teamName",
      message: "Welcome to your Team Generator! Please enter you team name.",
    }
  ])
    .then(function (data) {
      const teamName = data.teamName
      finalTeamArray.push(teamName)
      addManager();
    })
}

function addManager() {
  inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Please enter the manager's first name and surname",
    },
    {
      type: "input",
      name: "id",
      message: "What is the manager's ID number?",
    },
    {
      type: "input",
      name: "email",
      message: "What is the manager's email address?",
    },
    {
      type: "input",
      name: "officeNumber",
      message: "What is the office number?",
    },
  ]).then(function (data) {
    const name = data.name
    const id = data.id
    const email = data.email
    const officeNumber = data.officeNumber
    const teamMember = new Manager(name, id, email, officeNumber)
    finalTeamArray.push(teamMember)
    addNewEmployee();
  });
}


function addNewEmployee() {
  inquirer.prompt([
    {
      type: "list",
      name: "addNewEmployee",
      message: "Would you like to add more team members?",
      choices: ["Yes, add an engineer", "Yes, add an intern", "No, my team is complete"],
    }
  ]).then(function (data) {
    switch (data.addNewEmployee) {
      case "Yes, add an engineer":
        addEngineer();
        break;
      case "Yes, add an intern":
        addIntern();
        break;
      case "No, my team is complete":
        createTeam();
        break;
    }
  })
}

function addEngineer() {
  inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is the engineer's first name and surname?",
    },
    {
      type: "input",
      name: "id",
      message: "What is the engineer's ID number?",
    },
    {
      type: "input",
      name: "email",
      message: "What is the engineer's email address?",
    },
    {
      type: "input",
      name: "github",
      message: "What is the engineer's Github username?",
    }
  ]).then(function (data) {
    const name = data.name
    const id = data.id
    const email = data.email
    const github = data.github
    const teamMember = new Engineer(name, id, email, github)
    finalTeamArray.push(teamMember)
    addNewEmployee()
  });
}

function addIntern() {
  inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is the intern's name?",
    },
    {
      type: "input",
      name: "id",
      message: "What is the intern's ID number?",
    },
    {
      type: "input",
      name: "email",
      message: "What is the intern's email address?",
    },
    {
      type: "input",
      name: "school",
      message: "What school does the intern attend?",
    }
  ]).then(function (data) {
    const name = data.name
    const id = data.id
    const email = data.email
    const school = data.school
    const teamMember = new Intern(name, id, email, school)
    finalTeamArray.push(teamMember)
    addNewEmployee()
  });
}

function createTeam() {
  console.log("Success! Your team has been created.")

  const htmlArray = []
  const htmlHeading = `<!DOCTYPE html>
                      <html lang="en">
                        <head>
                            <meta charset="UTF-8" />
                            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                            <meta http-equiv="X-UA-Compatible" content="ie=edge" />

                            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                                integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
                            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css"
                                integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous">
                            <link rel="stylesheet" href="style.css">

                            <title>${finalTeamArray.teamName}</title>

                        </head>

                          <body class="backgroundPattern">

                              <div class="container-fluid">
                                  <div class="row teamHeader">
                                      <div class="col-md-12">
                                          <h1>${finalTeamArray.teamName}</h1>
                                          <hr />
                                      </div>
                                  </div>
                              </div>

                              <div class="container">
                                  <div class="row col-md-12 employeeBlock">`

                      htmlArray.push(htmlHeading);

                      for (let i = 1; i < finalTeamArray.length; i++) {
                        let employeeCard = `<div class="card employeeCard">
                <div class="card-header">
                    <h2 class="card-title">${finalTeamArray[i].name}</h2>
                    <h3 class="card-text"><i class="fas fa-user-tie"></i> ${finalTeamArray[i].role}</h3>
                </div>
                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item">ID: ${finalTeamArray[i].id}</li>
                        <li class="list-group-item">Email: <a href="mailto:${finalTeamArray[i].email}">${finalTeamArray[i].email}</a></li>`
                        
                        if (finalTeamArray[i].officeNumber) {
                          employeeCard += `<li class="list-group-item">Office number: ${finalTeamArray[i].officeNumber}</li>
                                        </ul>
                                    </div>
                                </div>`
                        }
                        if (finalTeamArray[i].github) {
                          employeeCard += `<li class="list-group-item">GitHub: <a href="https://github.com/${finalTeamArray[i].github}" target="_blank">${finalTeamArray[i].github}</a></li>
                                        </ul>
                                    </div>
                                </div>`
                        }
                        if (finalTeamArray[i].school) {
                          employeeCard +=
                                `<li class="list-group-item">School: ${finalTeamArray[i].school}</a></li>
                                </ul>
                            </div>
                        </div>`
                        }
                          employeeCard += `</div>
                                        </div>`
                                        
                        htmlArray.push(employeeCard)
                        }

                        const htmlEnd = `</body>
                                      </html>`
            

                        htmlArray.push(htmlEnd);

                        fs.writeFileSync(outputPath, htmlArray.join(""));
                      }

buildTeam();



