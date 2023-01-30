const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  id: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
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
  dateBirth: {
    type: Date,
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
