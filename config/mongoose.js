const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://toreturkmen:1234567890@cluster0.rf5vqbk.mongodb.net/?retryWrites=true&w=majority') 
    .then( () => console.log("DB is connected"))
    .catch(err => console.log(err));