const mongoose = require('mongoose');


const formSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
        unique: true,
    },
    category: {
        type: String,
        required: true,
        unique: true,
    },
    status: {
        type: Boolean,
        required: true,
    },

})



// ----------- Collection creation --------------
const Form = new mongoose.model("FORM", formSchema);

module.exports = Form;