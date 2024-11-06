//GET the homepage by creating the functionality to send and receive requests and responses
//to and from the browser which, in turn renders the template engine 
//for travlr getaways with a title.
const index = (req, res)=> {
res.render('index' , {title: "Travlr Getaways"});
};

//the code below allow the homepage to render within the HBS template
module.exports = {
    index
}