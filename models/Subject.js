const { model, Schema } = require('mongoose');

const subjectSchema = new Schema({
  name: String,
  teacher: String,
  students: [{ student: String }],
});

module.exports = model('Subject', subjectSchema);
