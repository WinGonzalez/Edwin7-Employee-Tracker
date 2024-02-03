-- Check if the 'employee_db' database exists and drop it if it does
DROP DATABASE IF EXISTS employee_db;

-- Create the 'employee_db' database
CREATE DATABASE employee_db;

-- Select the 'employee_db' as the database for subsequent operations
USE employee_db;

-- Create the 'department' table with an auto-incrementing ID as the primary key and a name field
CREATE TABLE department (
    -- Define 'id' as an integer that auto-increments and set it as the primary key
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    
    -- Define 'name' as a variable character string with a maximum length of 30 characters, CANNOT BE NULL
    name VARCHAR(30) NOT NULL
);
