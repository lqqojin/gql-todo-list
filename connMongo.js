import mongoose from 'mongoose';
const mongoURI= process.env.MONGO_URL;
const dbName = process.env.MONGO_DB || 'test';

const uri = 'mongodb://127.0.0.1:27017/test'
mongoose.Promise = global.Promise; // new ( 비동기 처리 )
mongoose.connect(uri, { useNewUrlParser: true }); // new

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    // we're connected!
    console.log('MongoDB connection complete');
});
