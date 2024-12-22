//get homepage
//var fs = require('fs');
//remeber to place the (utf8 back into the variable)
//var trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf-8')); 

const { L } = require("@angular/cdk/keycodes");

module.exports = {
    travel
};


//trips endpoint object
const tripsEndPoint = 'http://localhost5500/api/trips';
    const options = {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }
    }
    //var fs = require ('fs');
//var trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf-8'))

const travel = async function (req, res, next){

    //fetches the trips end point API along with options and json formatting
await fetch(tripsEndpoint, options)
    .then(res=> res.json())
    .then(json =>{ 
        let message = null;
            if(!(json instanceof Array)){
                message = 'API lookup error';
                json = [];//new json template to cover for no results due to look up error
            } else{//if the search is not the same as what is
                //in the original json template, results will be zero...
                if(!json.length){
                    message = 'no trips exist in put'
                }
            }

        res.render('travel', {title: 'Travlr Getaways', 'trips': json});
})

//an error will be caught, the resposnse will be err mesage 500 alonge with a message to the console.
.catch(err=> res.status(500).send(e.message));
//console.log(''TRAVEL CONTROLLER AFTER RENDER);

};

module.exports = {
    travel
};