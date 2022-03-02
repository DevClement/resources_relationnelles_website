const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const resourceCategoriesSchema = new Schema({
    name: {
        type: String,
        required: true
    },
})

const ResourceCategories = mongoose.model("ResourceCategories", resourceCategoriesSchema);
exports.ResourceCategories = ResourceCategories;