const asyncHandler = require ('express-async-handler')

// @desc    Home
// @route   GET /
// @access  Public
const home = asyncHandler(async (req, res) => {
    res.json({
        app: process.env.APP_NAME,
        server: process.env.APP_ENV
    })
})

module.exports = { home }
