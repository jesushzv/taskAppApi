const {gql} = require('apollo-server-express');

const typeDefs = gql`
    type Query {
        hello: String
        getAllTasks: [Task]
        getTask(id: ID!): Task
    }
    type Task {
        id: ID
        title: String
        description: String
        completed: Boolean
    }

    type Mutation {
        createTask(title: String, description: String): Task
        updateTask(id: ID!, title: String, description: String, completed: Boolean): Task
        deleteTask(id: ID!): Task
    }
    
    
    
    `;

module.exports = {typeDefs};