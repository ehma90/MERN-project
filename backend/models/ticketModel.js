const mongoose = require('mongoose')

const ticketSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: 'User'
    },

    product: {
        type: String,
        require: [true, 'Please add an email'],
        enum: ['iPhone', 'Macbook Pro', 'iMac', 'iPad']
    },

    description: {
        type: String,
        require: [true, 'Please add a description of the issue'],
    },

    status: {
        type: String,
        require: true,
        enum: ['new', 'open', 'closed'],
        default: 'new',
    }, 
},
{
    timestamps: true,
})

module.exports = mongoose.model('Ticket', ticketSchema)