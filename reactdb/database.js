const express = require('express');
const mongoose = require('mongoose');
const app = express();

const url =
"mongodb+srv://Test:root123456@test.qprumxk.mongodb.net/?retryWrites=true&w=majority"

async function connect() {
    try {
        await mongoose.connect(uri);
        console.log("Connected MongoDB");
    } catch (error) {
        console.error(error);
    }
}

connect();

app.listen(8000, () => {
    console.log("Server started on port 8000");
});