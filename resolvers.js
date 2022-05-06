const Task = require("./models/Task");

const resolvers = {
  Query: {
    hello: () => "Hello world!",
    getAllTasks: async () => {
      const tasks = await Task.find();
      return tasks;
    },
    getTask: async (root, args) => {
      const task = await Task.findById(args.id);
      return task;
    },
  },
  Mutation: {
    createTask: async (_, args) => {
      const task = await new Task({
        title: args.title,
        description: args.description,
        completed: false,
      }).save();
      return task;
    },
    updateTask: async (_, args) => {
      const task = await Task.findByIdAndUpdate(
        args.id,
        {
          $set: {
            title: args.title,
            description: args.description,
            completed: args.completed,
          }
        },
        { new: true }
      );
      return task;
    },
    deleteTask: async (_, args) => {
      const task = await Task.findByIdAndDelete(args.id);
      return task;
    },
  },
};

module.exports = { resolvers };
