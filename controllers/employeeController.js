const Employee = require('../models/employeeModel');

const createEmployee = async (req, res) => {
    try {
        const { first_name, last_name, email, phone_number, hire_date, job_title, department, salary } = req.body;

        const employee = await Employee.create({
            first_name,
            last_name,
            email,
            phone_number,
            hire_date,
            job_title,
            department,
            salary,
            is_active: 1
        });

        res.status(201).json(employee);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error creating employee' });
    }
};

const getEmployees = async (req, res) => {
    try {
        const employees = await Employee.findAll();
        res.json(employees);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error fetching employees' });
    }
};

const updateEmployee = async (req, res) => {
    try {
        const { id } = req.params;
        const { first_name, last_name, email, phone_number, hire_date, job_title, department, salary } = req.body;

        const employee = await Employee.findByPk(id);

        await employee.update({
            first_name,
            last_name,
            email,
            phone_number,
            hire_date,
            job_title,
            department,
            salary,
            is_active:1
        });

        res.json(employee);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error updating employee' });
    }
};

const deleteEmployee = async (req, res) => {
    try {
        const { id } = req.params;

        const employee = await Employee.findByPk(id);

        await employee.destroy();
        res.status(204).end();
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error deleting employee' });
    }
};

module.exports = { createEmployee, getEmployees, updateEmployee, deleteEmployee };
