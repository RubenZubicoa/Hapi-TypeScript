import mongoose from "mongoose";

mongoose.connect('mongodb://localhost/hapi-typescript', {
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(db => console.log('DB is connected'))
.catch(err => console.log(err))

