const {Query} = require('mongoose');
const projectService = require('../services/projectService');

const resolvers ={
    Query: {
        projects: async (parent, args) => {
            return await projectService.getAllProjects();        
        }
    },
    Mutation: {
        createProject: (_,{title, completed, description, fechaInicio, fechaFin, status, presupuesto}) => {
            return projectService.createProject({title, completed, description, fechaInicio, fechaFin, status, presupuesto});
        },
        updateProject: (_,{_id, completed, description, fechaInicio, fechaFin, status, presupuesto}) => {
            return projectService.updateProject(_id, {completed}, description, fechaInicio, fechaFin, status, presupuesto);
        },
        deleteProject: (_,{_id}) => {
            return projectService.deleteProject(_id);
        }
    }
};

module.exports = resolvers;