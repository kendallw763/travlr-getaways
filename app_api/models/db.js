//variables for database coommunication
const mongoose = require ('mongoose'); //comms between database and the server
const host = process.env.BD_HOST || '3000';
const dbURI = `mongodb://${host}/tralr`;
const readLine = require ('readLine'); 

//buld connection string and set the connection timeout.
//the timeout is calculated in miliseconds
const connect = () => {
    setTimeout(() => mongoose.connect(dbURI,{
    }), 1000);

}

//connection event monitoring
mongoose.connection.on('connected', () => {
    console.log(`Mongoose connected to ${dbURI}`);
});

mongoose.connection.on('error', err => {
    console.log('Mongoose connection error:' , err);
});

mongoose.connection.on('disconnected', () => {
    console.log('Moongoose disconnected');
});

//Windows specific listener
if(process.platform === 'win32'){
    const r1 = readLine.createInterface({
        input: process.stdin,
        output:process.stdout
    });
    r1.on('SIGINT', () => {
        process.emit("SIGINT");    
    });

}

//allow a gracefull shutdown
const gracefulShutdown = (msg) => {
    mongoose.connection.close(() =>{
        console.log(`Mongoose disconnected through ${msg}`);
    });
};

//event listeners too process gracefull shutdown
//shutdown invoked my nodemon signal
process.once('SIGUSR', () => {
    gracefulShutdown('nodemone restart');
    process.kill(process.pid, 'SIGUSR2');
});

//shutdown invoked by app termination
process.on('SIGINT', () => {
    gracefulShutdown('app termination');
    process.exit(0);
});

//shutdown invoked by container termination
process.on('SIGTERM', () =>{
    gracefulShutdown('app shutdown')
    process.exit(0);
});

//make the initial connection to the database
connect();

//Import Mongoose schema
require('./travlr');
module.exports = mongoose;





