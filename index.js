// import inquirer from 'inquirer';
const { prompt } = require("inquirer");
// mysql2 is our db
const mysql = require("mysql2");
//const db = require("./db/connection");
const figlet = require("figlet");
const gradient = require("gradient-string");

const db = mysql.createConnection({
  host: "localhost",
  // Your MySQL username
  user: "root",
  // Your MySQL password
  password: "ghostpiss69",
  // Your MySQL database name
  database: "employees_db"
});

function init() {
  const message = "Employee Manager";
  figlet(message, (err, data) => {
    console.log(gradient.instagram.multiline(data));
    homePage();
  });
}
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
                value:"add department",
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



function viewDepartment() {
    prompt([
      {
        type: "input",
        message: "Enter department name:",
        name: "departmentName",
      },
    ]).then((res) => {
      const departmentName = res.departmentName;
      // Create an SQL query to retrieve the department ID
      const departmentIdQuery = `SELECT id FROM departments WHERE department_name = ?`;
  
      // Execute the department ID query with the provided department name as parameter
      db.query(departmentIdQuery, [departmentName], (error, departmentResults) => {
        if (error) {
          console.error('Failed to retrieve department ID:', error);
        } else {
          if (departmentResults.length === 0) {
            console.log(`Department "${departmentName}" not found.`);
          } else {
            const departmentId = departmentResults[0].id;
  
            // Create an SQL query to retrieve employees in the department
            const employeesQuery = `SELECT * FROM employees WHERE department_id = ?`;
  
            // Execute the employees query with the retrieved department ID as parameter
            db.query(employeesQuery, [departmentId], (error, employeesResults) => {
              if (error) {
                console.error('Failed to retrieve employees:', error);
              } else {
                if (employeesResults.length === 0) {
                  console.log(`No employees found in department "${departmentName}".`);
                } else {
                  console.log(`Employees in department "${departmentName}":`);
                  console.log(employeesResults);
                }
              }
            });
          }
        }
      });
    });
  }
  
  function viewRoles() {
    // Create an SQL query to retrieve all unique roles from the roles table
    const query = `SELECT DISTINCT role_title FROM roles`;
  
    // Execute the query
    db.query(query, (error, results) => {
      if (error) {
        console.error('Failed to retrieve employee roles:', error);
      } else {
        if (results.length === 0) {
          console.log('No employee roles found.');
        } else {
          console.log('Employee Roles:');
          results.forEach((row) => {
            console.log(row.role_title);
          });
        }
      }
    });
  }
  
  function viewEmployees() {
    // Create an SQL query to retrieve all employees from the employees table
    const query = `SELECT * FROM employees`;
  
    // Execute the query
    db.query(query, (error, results) => {
      if (error) {
        console.error('Failed to retrieve employees:', error);
      } else {
        if (results.length === 0) {
          console.log('No employees found.');
        } else {
          console.log('Employees:');
          console.log(results);
        }
      }
    });
  }
  
  function addDepartment() {
    prompt([
      {
        type: "input",
        message: "Enter department name:",
        name: "departmentName",
      },
    ]).then((res) => {
      const departmentName = res.departmentName;
    
      const query = `INSERT INTO departments (department_name) VALUES (?)`;
  

      db.query(query, [departmentName], (error, results) => {
        if (error) {
          console.error('Failed to add department:', error);
        } else {
          console.log(`Successfully added department: ${departmentName}`);
        }
      });
    });
  }
  
  function addRole() {
    prompt([
      {
        type: "input",
        message: "Enter role name:",
        name: "roleName",
      },
      {
        type: "input",
        message: "Enter department ID:",
        name: "departmentId",
      },
      {
        type: "input",
        message: "Enter role salary:",
        name: "roleSalary",
      },
    ]).then((res) => {
      const roleName = res.roleName;
      const departmentId = res.departmentId;
      const roleSalary = res.roleSalary;
      // Create an SQL query to insert a new role into the roles table
      const query = `INSERT INTO roles (role_title, department_id, salary) VALUES (?, ?, ?)`;
  
      // Execute the query with the role name, department ID, and salary as parameters
      db.query(query, [roleName, departmentId, roleSalary], (error, results) => {
        if (error) {
          console.error('Failed to add role:', error);
        } else {
          console.log(`Successfully added role: ${roleName}`);
        }
      });
    });
  }
  
  // Function to add a new employee
function addEmployee() {
    inquirer.prompt([
      {
        name: "firstName",
        type: "input",
        message: "Enter first name:"
      },
      {
        name: "lastName",
        type: "input",
        message: "Enter last name:"
      },
      {
        name: "roleId",
        type: "input",
        message: "Enter role ID:"
      },
      {
        name: "managerId",
        type: "input",
        message: "Enter manager ID (optional):"
      }
    ]).then(function (answers) {
      // Insert new employee into the database
      db.query("INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)", [answers.firstName, answers.lastName, answers.roleId, answers.managerId], function (err, results) {
        if (err) throw err;
        console.log("Employee added successfully!");
        homePage();
      });
    });
  }
  
  // Function to update an employee's role
  function updateEmployeeRole() {
    inquirer.prompt([
      {
        name: "employeeId",
        type: "input",
        message: "Enter employee ID:"
      },
      {
        name: "roleId",
        type: "input",
        message: "Enter new role ID:"
      }
    ]).then(function (answers) {
      // Update employee's role in the database
      db.query("UPDATE employees SET role_id = ? WHERE id = ?", [answers.roleId, answers.employeeId], function (err, results) {
        if (err) throw err;
        console.log("Employee role updated successfully!");
        homePage();
      });
    });
  }
  function quit() {
    console.log("goodbye");
    return process.exit();
  }