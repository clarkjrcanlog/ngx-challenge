const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../config/database');


const TaskSchema = mongoose.Schema({
    task: {type: String, required: true},
    desc: {type: String, required: true},
    status: {type: String, required: true},
    isDeleted: {type: Boolean, required: true},
    date: {type: Date, required: true},
})

const Task = module.exports =  mongoose.model('Task', TaskSchema);

module.exports.addNewTask = async (data, cb) => {
    Task.create(data, (err, createResult) => {
        if (err) {
            console.log(err);
            return cb({ success: false, message: err.message })
        } else {
            return cb({ success: true, message: 'Task added!', data: createResult });
        }
    })

}

module.exports.updateTask = (id, newData, cb) => {
    const filter = { _id: id };
    // const update = { data: newData };
    return Task.findOneAndUpdate(filter, newData)
        .then(updatedDocument => {
            if (updatedDocument) {
                console.log(`Successfully updated document that had the form: ${updatedDocument}.`)
                return cb({ success: true, message: "   success" });
            } else {
                console.log("No document matches the provided query.")
                return cb({ success: false, message: "ID not found!" });
            }
            return updatedDocument
        })
        .catch(err => console.error(`Failed to find and update document: ${err}`))
}

