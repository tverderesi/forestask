const mongoose = require('mongoose');
const Subjects = require('models/subjects');

module.exports = {
  Query: {
    getSubjects: async (_, args, { mongoose }) => {
      const subjects = await Subjects.find();
      return subjects;
    },
  },
};
