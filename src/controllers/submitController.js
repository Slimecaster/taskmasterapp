exports.submitData = (req, res) => {
    const data = req.body;
    res.json({
        message: "Data modtaget!",
        data: data
    })
}