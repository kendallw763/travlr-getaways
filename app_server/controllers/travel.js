//get homepage
var fs = require('fs');
//remeber to place the (utf8 back into the variable)
var trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf-8')); 


const travel =(req, res) => {
    res.render('travel' , {title: "Travlr Getaways"})
};

module.exports = {
    travel
};