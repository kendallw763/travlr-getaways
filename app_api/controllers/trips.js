const mongoose = require ('mongoose');// the application requires this for database connectivity
const Trip = require('../models/travlr');//the path to the trip logic implemented in the code
const { yearsPerPage } = require('@angular/material/datepicker');
const Model = mongoose.model('trips');


//**REQUIRMENTS
//get the trips and list them all out.
//the response must include the HTML status codes
//JSON message to the requesting client** 

// PUT: /trips/:tripCode - Adds a new Trip
// Regardless of outcome, response must include HTML status code
// and JSON message to the requesting client
const tripsUpdateTrip = async(req, res) => {
// Uncomment for debugging
    console.log(req.params);
    console.log(req.body);
    const q = await Model
    .findOneAndUpdate({code: req.params.tripCode },
{
    code: req.body.code,
    name: req.body.name,
    length: req.body.length,
    start: req.body.start,
    resort: req.body.resort,
    perPerson: req.body.perPerson,
    image: req.body.image,
    description: req.body.description
}
)
.exec();

    if(!q)
    { // Database returned no data
    return res
    .status(400)
    .json(err);

    } else { // Return resulting updated trip
   return res
    .status(201)
    .json(q);
    } 
   
    // Uncomment the following line to show results of operation
     // on the console
   // console.log(q);
    };

const tripsAddTrip = async(req,res)=>{
    const newTrip = new Trip({
        code: req.body.code,
        name: req.body.name,
        length: req.body.length,
        start: req.body.start,
        resort: req.body.resort,
        perPerson: req.body.perPerson,
        image: req.body.image,
        description: req.body.description
    });

    const q = await newTrip.save();

    if(!q){//database returns no data
        return res
        .status(400)
        .json(err);
    }//return the new trip
    else{
        return res
        .status(201)
        .json(q);
        
    }
}


const tripsList = async(req, res) => { //[NOTE*** req is still not being used yet....]
    const q = await Model
    .find({})
    .exec();

    console.log(q); //show the query results on the console of the model

    if (!q){//if the log is not q (the await model instantiated at the very top), 
        return res //return the response with the status code 404 and json(error),
            .status (404)
            .json(error);
    } else{ //otherwise, return the response of status 200 and json(q) 
        return res  
            .status(200)
            .json(q);

    };
};


const tripsFindByCode = async(req, res) =>{
    const q = await Model
        .find({'code' : req.params.tripCode})// return a single query
        .exec();

        console.log(q);

        if(!q){//the database will return no data
            return res
                    .status(404)
                    .json(err);

        }else{ //Return the resulting trip list
            return res
            .statur(200)
            .json(q)
        }
};

    module.exports = {//exports the code above into other areas of the application
        tripsList,
        tripsFindByCode,
        tripsAddTrip,
        tripsUpdateTrip
    };  
    
  







