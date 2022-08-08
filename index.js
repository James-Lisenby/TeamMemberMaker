var fs = require("fs")
var inquirer = require("inquirer")
var jest = require("jest")

let answerArray = [""];


function init() {
    manager();

}
// First function to fire off once user enters "node index.js" into there intergrated terminal.


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
            answerArray.push(answers);
            console.log(answerArray)
            engineer();

        });
};
// The above function asks for the managers information and push's the answers into the empty answer array and then iniates the engineer function.


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
        .then((answers) => {
            answerArray.push(answers);
            console.log(answerArray);
            intern();
        });
}
// The above function asks for the engineers information and push's the answers into the empty answer array and then iniates the intern function.


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
        .then((answers) => {
            answerArray.push(answers);
            console.log(answerArray);
            newMember();

        }

        )
};
// The above function asks for the interns information and push's the answers into the empty answer array and then iniates the newMember function.


function newMember() {
    inquirer.prompt([
        {
            name: "nextMember",
            message: "Would you like to add another team member? If yes select new member. Otherwise select done to finish.",
            type: "list",
            choices: ['Engineer', 'Intern', 'Done'],
            // Need to figure out how to use the users input to fire off the next function. Either another engineer or intern, or finishs and generates the html page.
        },
    ])
};



init();
// Iniates the program.



// Generate HTML - Different Module
// Write HTML to new file

