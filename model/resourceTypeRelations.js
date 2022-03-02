const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const resourceTypeRelationsSchema = new Schema({
    name: {
        type: String,
        required: true
    },
})

const ResourceTypeRelations = mongoose.model("ResourceTypeRelations", resourceTypeRelationsSchema);
exports.ResourceTypeRelations = ResourceTypeRelations;