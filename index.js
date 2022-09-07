const fs = require('fs'); 
const inquirer = require('inquirer');
const path = require("path");
const generateHTML = require('./src/generateHTML');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const teamArray = []; 
