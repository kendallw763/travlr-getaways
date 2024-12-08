const mongoose = require ('mongoose');// the application requires this for database connectivity
const Trip = require('../models/travlr');//the path to the trip logic implemented in the code
const Model = mongoose.model('trips');


//**REQUIRMENTS
//get the trips and list them all out.
//the response must include the HTML status codes
//JSON message to the requesting client** 

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
        tripsFindByCode
    };  
    
  







