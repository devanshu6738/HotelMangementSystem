const mongoose=require("mongoose");
const menuItems=new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    taste: {
        type: String, 
        enum: ['sour', 'sweet', 'spicy'],
        required: true, 
    },
    isdrink: {
        type: Boolean,
        default: false,
    },
})
const Menu=mongoose.model('Menu',menuItems);
module.exports=Menu;