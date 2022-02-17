const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const resourceLangSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    
    content: {
        type: String,
        required: true
    },
})

const ResourceLang = mongoose.model("ResourceLang", resourceLangSchema);
exports.ResourceLang = ResourceLang;