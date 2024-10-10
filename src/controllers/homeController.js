const path = require("path");

exports.getHomePage = (req, res) => {
    res.sendFile(path.join('C:/Users/nd070/WebstormProjects/taskmasterapp/public/views/homepage.html'));
}

