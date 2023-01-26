const { model, Schema } = require('mongoose');

const subjectSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
});

module.exports = {
  Subject: model('Subject', subjectSchema),
};
