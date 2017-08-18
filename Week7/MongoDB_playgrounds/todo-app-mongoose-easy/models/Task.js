const mongoose = require('mongoose')

const collection = 'tasks'

var TaskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  done: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: new Date()
  }
}, { collection })

module.exports = mongoose.model('Task', TaskSchema)
