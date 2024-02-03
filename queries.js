// Query to view all employees with their roles, salaries, departments, and managers
const ViewAllEmployees = `
SELECT 
    e.id, 
    e.first_name, 
    e.last_name,
    r.title,
    r.salary,
    d.name AS department,
    e.manager_id
FROM 
    employee e
    INNER JOIN role r ON e.role_id = r.id
    INNER JOIN department d ON r.department_id = d.id
ORDER BY 
    e.id;
`;

// Query to view all departments ordered by ID
const ViewAllDepartments = `
SELECT 
    * 
FROM 
    department 
ORDER BY 
    id;
`;
