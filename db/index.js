const { prompt } = require("inquirer");
const logo = require("asciiart-logo");
const db = require(".");
require("console.table");

init();

function homePage(){
 prompt([
    {
        type: "list",
        message:"what would you like to do?",
        name:"choice",
        choices: [
            {
             name: "view all employees",
             value: "view all employees",   
            },
            {
                name: "view all departments",
                value: "view all departments",
            },
            {
                name: "add employee",
                value:"add employee",
            },
            {
                name: "update employee role",
                value: "update employee role",
            },
            {
                name: "view all roles",
                value:"view all roles",
            },
            {
                name: "add department",
                value:"ad department",
            },
            {
                name: "add role",
                value:"add role",
            },
            {
                name: "quit",
                value: "quit",
            },
        ],
    },
 ]).then((res) => {
    let choice = res. choice;
    switch (choice) {
        case "view all employees":
            viewEmployees();
            break;
        case "view all departments":
            viewDepartment();
            break;
        case "add employee":
            addEmployee();
            break;
        case "update employee role":
            updateEmployeeRole();
            break;
        case "view all roles":
            viewRoles();
            break;
        case "add role":
            addRole();
            break;
        case "add department":
            addDepartment();
            break;
        case "quit":
            quit();
            break;                            
    }
 });
}



function viewDepartment(){

}

function viewRoles(){

}

function viewEmployees(){

}

function addDepartment (){

}

function addRole(){

}

function addEmployee(){

}

function updateEmployeeRole(){

}

function quit(){
return process.exit();
}