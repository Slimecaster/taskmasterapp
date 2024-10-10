const path = require("path");

exports.getHomePage = (req, res) => {
    res.sendFile(path.join('../views/homepage.html'));
}

