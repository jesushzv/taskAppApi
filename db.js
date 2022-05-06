const { connect } = require("mongoose");
require("dotenv").config();
const uri = process.env.MONGO_DB_URI;
const connectDB = async () => {
    await connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log("Connected to MongoDB");
    }
    ).catch((err) => {
        console.log(err);
    }
    );
}

module.exports = {
    connectDB
};