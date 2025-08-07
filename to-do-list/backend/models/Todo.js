const mongoose = require('mongoose')

const TodoSchema = new mongoose.Schema({
    text: {
    type: String,       // Data type: String
    required: true,     // Mandatory field (cannot be empty)
    trim: true          // Automatically removes whitespace
  },
    completed: {
    type: Boolean,      // Data type: Boolean
    default: false      // Default value if not provided
  },
    createdAt: {
    type: Date,         // Data type: Date
    default: Date.now   // Automatically set to current time
}
})

module.exports = mongoose.model('Todo', TodoSchema);