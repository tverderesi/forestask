const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  createdAt: {
    type: String,
    default: Date.now,
  },
  privilegeLevel: {
    type: String,
    required: true,
    enum: ['STUDENT', 'TEACHER', 'ADMIN'],
  },
  email: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  birthday: {
    type: String,
    required: true,
  },
  profilePicture: {
    type: String,
    required: true,
  },
  subjects: {
    type: [mongoose.Types.ObjectId],
    ref: 'Subject',
  },
  assignments: {
    type: [mongoose.Types.ObjectId],
    ref: 'Assignment',
  },
  password: {
    type: String,
    required: true,
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
