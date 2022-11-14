const mongoose = require('mongoose')


const connectDatabase = () => {
    const DB_URI = "mongodb+srv://sukhvindra:sukhvindra@cluster0.ywrtiwg.mongodb.net/centerdatabase?retryWrites=true&w=majority"
    mongoose
      .connect(DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then((data) => {
        console.log(`Mongodb connected with server: ${data.connection.host}`);
      });
  };
  
  module.exports = connectDatabase;
