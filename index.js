var fs = require("fs")
var inquirer = require("inquirer")



function init() {
    manager();

}

function manager() {
    inquirer.prompt([
        {
            name: "managerName",
            message: "What is the name of the manager for this project?",
            type: "input",
        },
        {
            name: "id",
            message: "What is the managers ID #?",
            type: "input",
        },
        {
            name: "email",
            message: "What is the managers email?",
            type: "input",

        },
        {
            name: "office",
            message: "What is the office number for the manager?",
            type: "input",
        }
    ])
        .then((answers) => {
            console.log(answers)


        });
};


function engineer() {
    inquirer.prompt([
        {
            name: "engineerName",
            message: "What is the selected engineers name?",
            type: "input",
        },
        {
            name: "engineerId",
            message: "What is the selected engineers id number?",
            type: "input",
        },
        {
            name: "engineerEmail",
            message: "What is the email for the selected engineer?",
            type: "input",
        },
        {
            name: "engineerGithub",
            message: "What is the github link for the selected engineer?",
            type: "input",
        },
    ])
};


function intern() {
    inquirer.prompt([
        {
            name: "internName",
            message: "What is the name of the selected intern?",
            type: "input",
        },
        {
            name: "internId",
            message: "What is the selected interns Id #?",
            type: "input",
        },
        {
            name: "internEmail",
            message: "What is the email of the selected intern?",
            type: "input",
        },
        {
            name: "internSchool",
            message: "What is the name of the school the intern attends?",
            type: "input",
        }
    ])
};


function newMember() {
    inquirer.prompt([
        {
            name: "nextMember",
            message: "Would you like to add another team member? If yes select new member.",
            type: "list",
            choices: ['Engineer', 'Intern', 'Done'],
        },
    ])
};



init();

// Ask what type of team member to be added or complete.
    // Loop back and add more team members
    // or
    // Be done selecting team


// Generate HTML - Different Module
// Write HTML to new file

// Create an empty array list that holds our data somewhere in the global scope.
