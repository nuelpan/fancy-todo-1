const { Schema, model } = require('mongoose')

const TodoSchema = new Schema ({
  title: {
    type: String,
    required: [true, 'Title cannot be empty']
  },
  description: String,
  status: {
    type: String,
    enum: ['doing', 'done'],
    default: 'doing' 
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
}, 
{
  timestamps: true
})

const Todo = model('Todo', TodoSchema)
module.exports = Todo