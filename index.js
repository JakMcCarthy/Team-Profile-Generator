const fs = require('fs'); 
const inquirer = require('inquirer');
const generateHTML = require('./src/generateHTML');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const teamArray = []; 

const addManager = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'What is the managers name?'
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter manager's ID."
        },

        {
            type: 'input',
            name: 'email',
            message: "Enter manager's email."
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Enter manager's office number."
        }
    ])
    .then(managerInput => {
        const  { name, id, email, officeNumber } = managerInput; 
        const manager = new Manager (name, id, email, officeNumber);

        teamArray.push(manager); 
        console.log(manager); 
    })
};
// Employee data - role, name, id, email, GitHub username, school
const addEmployee = () => {
    console.log('Add team employees');

    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: "Choose the employee's role.",
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: "What's the employee's name?"
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter employee's ID."
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter employee's email."
        },
        {
            type: 'input',
            name: 'github',
            message: "What is the employee's GitHub?",
            when: (input) => input.role === "Engineer"
        },
        {
            type: 'input',
            name: 'school',
            message: "What is the intern's school?",
            when: (input) => input.role === "Intern"
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Do you want to add more team members?',
            default: false
        }
    ])
    .then(employeeData => {
        let { name, id, email, role, github, school, confirmAddEmployee } = employeeData; 
        let employee; 

        if (role === "Engineer") {
            employee = new Engineer (name, id, email, github);
            console.log(employee);
        } else if (role === "Intern") {
            employee = new Intern (name, id, email, school);
            console.log(employee);
        }
        teamArray.push(employee); 
        if (confirmAddEmployee) {
            return addEmployee(teamArray); 
        } else {
            return teamArray;
        }
    })
};
// To generate the HTML 
const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("You have successfully created the team profile.")
        }
    })
}; 

addManager()
  .then(addEmployee)
  .then(teamArray => {
    return generateHTML(teamArray);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .catch(err => {
 console.log(err);
  });


