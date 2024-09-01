const AdmissionFm = require('../model/AdfModel');

// For admission form detail POST
exports.admissionFormDetailsPost = async (req, res, next) => {
    try {
        const form1 = await AdmissionFm.create(req.body);
        res.status(200).json({
            success: true,
            form1
        });
    } catch (error) {
        // Check for duplicate key error
        if (error.code === 11000) {
            res.status(400).json({
                success: false,
                message: 'Duplicate entry for email. Please use a different email.'
            });
        } else {
            res.status(500).json({
                success: false,
                message: 'Server Error',
                error: error.message
            });
        }
    }
};

exports.getAdmissionFormDetails = async (req, res, next) => {
    const orders = await AdmissionFm.find();

    res.status(200).json({
        sucess: true,
        orders,
    });
};
