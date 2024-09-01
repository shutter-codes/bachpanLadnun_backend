const mongoose = require("mongoose");
//const validator = require("validator");

const AdfModel = new mongoose.Schema({
    admissionClass: {
        type: String,
        required: [true, "Please enter your class"],
        trim: true
    },
    firstName: {
        type: String,
        required: [true, "Please enter your first name"],
        trim: true
    },
    lastName: {
        type: String,
        required: [true, "Please enter your last name"],
        trim: true
    },
    dob: {
        type: String,
        required: [true, "Please enter your DOB"],
        trim: true
    },
    gender: {
        type: String,
        required: [true, "Please enter your gender"],
        trim: true
    },
    email: {
        type: String,
        require: [true, "Please enter your email"],
        unique: true,

    },
    mobileNo: {
        type: String,
        require: [true, "Please enter your mobile number"],
        trim: true
    },
    mother_name: {
        type: String,
        require: [true, "Please enter your mother name"],
        trim: true
    },
    father_name: {
        type: String,
        require: [true, "Please enter your father name"],
        trim: true
    },
    address: {
        type: String,
        required: [true, "Please enter your address"],
        trim: true
    },
    description: {
        type: String,
        required: [true, "Please enter product description"]
    },

})

module.exports = mongoose.model("AdmissionFM", AdfModel);