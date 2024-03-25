const Subject = require('../../models/Subject');

module.exports = {
  Query: {
    async getSubjects() {
      try {
        const subjects = await Subject.find();
        return subjects;
      } catch (err) {
        throw new Error(err);
      }
    },
  },

  Mutation: {
    async addSubject(_, { name, teacher, students }) {
      if (!name) {
        throw new Error('Subject name must not be empty.');
      }

      // Check if subject with the same name already exists
      const existingSubject = await Subject.findOne({ name });
      if (existingSubject) {
        throw new Error(`Subject with name ${name} already exists.`);
      }

      const newSubject = new Subject({
        name,
        teacher,
        students,
      });
      const subject = await newSubject.save();
      return subject;
    },

    async deleteSubject(_, { id }) {
      // Find the subject by its _id and remove it
      const subject = await Subject.findByIdAndRemove(id);

      if (!subject) {
        throw new Error(`Subject not found`);
      }
      return 'Subject deleted successfully.';
    },
  },
};
