const mongoose = require("mongoose")
const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide a name"]
    },

    description: {
        type: String,
        required: [true, "Description is required."]
    },

    featuredImage: {
        type: String
    },

    tag: {
        type: String,
        enum: ["tech", "science", "religion", "business"]

    }

    // enum: ["buyer", "seller", "admin"],
    // default: "buyer"
    // type: Boolean,
})

const categoryModel = mongoose.model("categories", categorySchema)
module.exports = categoryModel

