const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title:{
     type: String,
     required: true,  
    } ,
    description: String,
    image:{
       type: String,
       default:"https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fvilla&psig=AOvVaw3bQBsYXopLRSC3v8O9aexo&ust=1741699136162000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCMDwlYTN_4sDFQAAAAAdAAAAABAE" ,
       set: (v) => v === ""
        ? "https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fvilla&psig=AOvVaw3bQBsYXopLRSC3v8O9aexo&ust=1741699136162000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCMDwlYTN_4sDFQAAAAAdAAAAABAE"
        : v, 
    },
    price: Number,
    location: String,
    country: String,

});



const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;

