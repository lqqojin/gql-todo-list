import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const TodoSchema = new Schema({

    id: {
        type: Number,
    },
    desc: {
        type: String,
    },
    status: {
        type: String,
    }
})
TodoSchema.set('collection', 'todo_list')
const TodoList = mongoose.model('todo_list', TodoSchema);
export default TodoList;
