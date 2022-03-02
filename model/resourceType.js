const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const resourceTypeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
})

const ResourceType = mongoose.model("ResourceType", resourceTypeSchema);
exports.ResourceType = ResourceType;