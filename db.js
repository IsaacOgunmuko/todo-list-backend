const mongoose = require('mongoose')


const url = `mongodb+srv://opeeyemiisaac:7CDVCdj8kLhzatvy@cluster0.0ofjr4f.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

const mongoDB = async () => {

    await mongoose.connect(url)
        .then(async () => {
            console.log('Connected to the database ')
            


        }).catch ( (err) => {
    console.error(`Error connecting to the database. n${err}`);
})
}
module.exports = mongoDB;


