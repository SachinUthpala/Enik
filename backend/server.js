const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDb = require("./config/db");

const inverterRoutes = require('./routes/inverters')


dotenv.config();

// express app
const app = express();

// middleware
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

//------
app.use((req, res, next) => {
  console.log(req.method, req.path);
  next();
});

// routes
app.use('/api/inverters', inverterRoutes)


// connect to db
connectDb();

const PORT = process.env.PORT || 5000;

// listen for requests
app.listen(PORT, console.log(`Server running on port ${PORT}`));
