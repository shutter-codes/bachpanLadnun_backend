const mongoose = require("mongoose");

const videoImageFomeSchema = mongoose.Schema({
    image: {
        type: Buffer,
        require: [true, "Please enter the image url"],
        trim: true
    },
    description: {
        type: String,
        require: [true, "Please enter the image url"],
        trim: true
    },
    year: {
        type: Number,
        require: [true, "Please enter the image url"],
        min: [1900, 'Year must be at least 1900'],
        max: [new Date().getFullYear(), 'Year cannot be in the future']
    }
});

module.exports = mongoose.model("vif" , videoImageFomeSchema);