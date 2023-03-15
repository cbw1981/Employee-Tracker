INSERT INTO department (name)
VALUES 
       ('Engineering'),
       ('Human Resources'),
       ('Production'),
       ('Distribution');

INSERT INTO role (id, title, salary, department_id)
VALUES (1, 'Lead Engineer', 50000, 1),
       (2, 'Junior Engineer', 50000, 1),
       (3, 'Human Resources', 50000, 2),
       (4, 'Production Manager', 50000, 3),
       (5, 'Production Assistant', 50000, 3),
       (6, 'Distribution Manager ', 50000, 4),
       (7, 'Distribution Assistant', 50000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  ('Vlad', 'Dracula', 1, NULL),
        ('Victor', 'Frankenstein', 2, 1),  
        ('Lawrence', 'Talbot', 3, NULL),  
        ('Scrooge', 'McDuck', 4, 3),  
        ('Freddy', 'Kreueger', 5, NULL),  
        ('Jason', 'Vorhees', 6, 5),  
        ('Darkwing', 'Duck', 7, NULL);    