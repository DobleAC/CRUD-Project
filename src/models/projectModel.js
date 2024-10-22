const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    title: {type: String, required: true},
    completed: {type: Boolean, default: false},
    description: {type: String, required: true},
    fechaInicio: {type: Date, required: true},
    fechaFin: {type: Date, required: true},
    status: {type: String, required: true},
    presupuesto: {type: Number, required: true},
});

const Project = mongoose.model('Project', projectSchema);
module.exports= Project;