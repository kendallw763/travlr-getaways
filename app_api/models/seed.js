//Bring th database connection and the trip schema
//into the application
const Mongoose = require ('./db');
const Trip = require ('./travlr');

//Read the data of the seed json file


//delete any of the existing records, then insert the seed data
const seedDB = async () =>{
    await Trip.deleteMany({});
    await Trip.insertMany(trips);
};

//close the Mongoose connection and exit
seedDB().then(async () =>{
    await Mongoose.connection.close();
    process.exit(0);
});