const express = require('express');
const router = express.Router();

const employeeController = require('../controllers/employeeController');
const projectController = require('../controllers/projectController');
const employeeProjectController = require('../controllers/assignamentController');

// Rutas de empleados
router.post('/employee', employeeController.createEmployee);
router.get('/employees', employeeController.getEmployees);
router.put('/employees/:id', employeeController.updateEmployee);
router.delete('/employees/:id', employeeController.deleteEmployee);

// Rutas de proyectos
router.post('/project', projectController.createProject);
router.get('/projects', projectController.getProjects);
router.put('/projects/:id', projectController.updateProject);
router.delete('/projects/:id', projectController.deleteProject);

// Rutas para asignar empleados a proyectos
router.post('/assignments', employeeProjectController.assignEmployeeToProject);

module.exports = router;
