const vif = require("../model/VIModel")

// Function use to send video data
exports.videoImageFomecontroller = async (req, res, next) => {

    const vifc = await vif.create(req.body);

    res.status(200).json({
        sucess: true,
        vifc
    })

}

// get ALL uploaded image and videos

exports.getvideoimagecontroller = async (req, res, next) => {
    try {
        const gvic = await vif.find();
        res.status(201).json({
            sucess: true,
            gvic
        })
    } catch (error) {
        console.log(error)
    }
}
// Get Year wise video image data 

exports.getvideoimagecontrollerYearWise = async (req, res, next) => {
    try {
        const year = req.params.year;

        if (isNaN(year) || year < 1900 || year > new Date().getFullYear()) {
            return res.status(400).json({
                success: false,
                message: "Invalid year parameter"
            });
        }
        const vidata = await vif.find({ year: year });

        if (vidata.length === 0) {
            return res.status(404).json({
                success: false,
                message: "Video Image not found for the specified year"
            });
        }

        res.status(201).json({
            sucess: true,
            vidata
        })
    } catch (error) {
        console.log(error)
    }
}