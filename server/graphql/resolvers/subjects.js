const mongoose = require('mongoose');
const Subject = require('models/subject');

async function getSubjects(args) {
  try {
    const subjects = await Subject.find(args);
    const totalCount = await Subject.countDocuments(args);
    return {
      subjects,
      totalCount,
    };
  } catch (error) {
    throw new Error(error);
  }
}

module.exports = {
  getSubjects,
};
