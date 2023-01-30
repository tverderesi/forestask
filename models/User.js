const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  privilegeLevel: {
    type: String,
    required: true,
    enum: ['STUDENT', 'TEACHER', 'ADMIN'],
  },
  fullName: {
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
    required: true,
  },
  totalXP: {
    type: Number,
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
