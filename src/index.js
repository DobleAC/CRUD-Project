const {ApolloServer} = require('apollo-server');
const mongoose = require('mongoose');
const typeDefs = require('./schema/projectSchema');
const resolvers = require('./resolvers/projectResolver');

const startServer = async () => {
    await mongoose.connect('mongodb+srv://ARON:Zxcasdqwe1@project.m4uae.mongodb.net/?retryWrites=true&w=majority&appName=PROJECT');
    const server = new ApolloServer({typeDefs, resolvers});
    server.listen().then(({url}) => {
        console.log(`Server ready at ${url}`);
    });
};      
startServer();