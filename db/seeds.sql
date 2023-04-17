USE employees_db;

INSERT INTO department (name)
VALUES 
       ('Engineering'),
       ('Human Resources'),
       ('Production'),
       ('Distribution');

INSERT INTO role (title, salary, department_id)
VALUES ( 'Lead Engineer', 50000, 1),
       ( 'Junior Engineer', 50000, 1),
       ( 'Human Resources', 50000, 2),
       ( 'Production Manager', 50000, 3),
       ( 'Production Assistant', 50000, 3),
       ( 'Distribution Manager', 50000, 4),
       ( 'Distribution Assistant', 50000, 4);

INSERT INTO employees (id, first_name, last_name, role_id, manager_id)
VALUES  ('Vlad', 'Dracula', 1, NULL),
        ('Victor', 'Frankenstein', 2, 1),  
        ('Lawrence', 'Talbot', 3, NULL),  
        ('Scrooge', 'McDuck', 4, 3),  
        ('Freddy', 'Kreueger', 5, NULL),  
        ('Jason', 'Vorhees', 6, 5),  
        ('Darkwing', 'Duck', 7, NULL);

