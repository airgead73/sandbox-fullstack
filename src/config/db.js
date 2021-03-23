const mongoose = require('mongoose');
const dbUri = process.env.DB_URI;

const connectDB = async () => {
  try {

    const conn = await mongoose.connect(dbUri, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    });    

    console.log(`*** MongoDB connected: ${conn.connection.host}... ***`);

  } catch(err) {

    console.error(err.message);

  }
}

module.exports = connectDB;