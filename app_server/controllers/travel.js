//get homepage
var fs = require('fs');
var trips = JSON.parse(fs.readFileSync('./data/trips.json','uft8'));


const travel =(req, res) => {
    res.render('travel' , {title: "Travlr Getaways"})
};

module.exports = {
    travel
};