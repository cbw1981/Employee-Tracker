DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;

USE employees_db;

CREATE TABLE role(
id INT AUTO_INCREMENT PRIMARY KEY,
title VARCHAR (30) NOT NULL,
salary DECIMAL NOT NULL,
department_id INT NOT NULL,
FOREIGN KEY (department_id) REFERENCES department_id
);

CREATE TABLE department(
id INT AUTO_INCREMENT PRIMARY KEY
name VARCHAR (30) NOT NULL,
);

CREATE TABLE employee(
id INT AUTO_INCREMENT,
first_name VARCHAR (30) NOT NULL,
last_name VARCHAR (30) NOT NULL,
role_id INT,
manager_id INT,
PRIMARY KEY (id),
FOREIGN KEY (role_id) REFERENCES role(id),
FOREIGN KEY (manager_id) REFERENCES employee(id)
ON DELETE SET NULL
);