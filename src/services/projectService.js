const Project = require('../models/projectModel');

module.exports = {
    getAllProjects: async () => {
        return await Project.find();
    },
    createProject: async (project) => {
        const project= new Project({title});
        return await project.save();
    },
    updateProject: async (id, project) => {
        return await Project.findByIdAndUpdate(_id, {completed});    
    },
    deleteProject: async (id) => {
        return await Project.findByIdAndDelete(_id);
    }
}