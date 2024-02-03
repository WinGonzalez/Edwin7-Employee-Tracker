const inquirer = require('inquirer');
const mysql = require('mysql2/promise');

const queries = require('./queries');

const dbConfig = {
    host: "localhost",
    user: "root",
    password: "HowAboutNo251",
    database: "employee_db",
};

