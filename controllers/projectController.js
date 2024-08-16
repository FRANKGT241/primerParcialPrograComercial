const Project = require('../models/projectModel');

const createProject = async (req, res) => {
    try {
        const { project_name, start_date, end_date, completion_percentage } = req.body;

        const project = await Project.create({
            project_name,
            start_date,
            end_date,
            completion_percentage,
            is_active:1
        });

        res.status(201).json(project);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error creating project' });
    }
};

const getProjects = async (req, res) => {
    try {
        const projects = await Project.findAll();
        res.json(projects);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error fetching projects' });
    }
};

const updateProject = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, description, start_date, end_date, completion_percentage } = req.body;

        const project = await Project.findByPk(id);

        if (!project) {
            return res.status(404).json({ error: 'Project not found' });
        }

        await project.update({
            name,
            description,
            start_date,
            end_date,
            completion_percentage
        });

        res.json(project);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error updating project' });
    }
};

const deleteProject = async (req, res) => {
    try {
        const { id } = req.params;

        const project = await Project.findByPk(id);

        if (!project) {
            return res.status(404).json({ error: 'Project not found' });
        }

        await project.destroy();
        res.status(204).end();
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error deleting project' });
    }
};

module.exports = { createProject, getProjects, updateProject, deleteProject };
