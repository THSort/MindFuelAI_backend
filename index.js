require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
// const connection = require('./db');
const userRoutes = require('./routes/users');
const authRoutes = require('./routes/auth');
const subscriptionRoutes = require('./routes/subscriptions');
const mongoose = require("mongoose");

// database connection
// connection();
mongoose.connect(process.env.DB_MONGO, { useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>console.log("DB Connection Successful!"))
.catch((err)=>{console.log(err)});

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use("/api/users" , userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/subscriptions", subscriptionRoutes);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`))