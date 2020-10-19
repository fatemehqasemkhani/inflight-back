const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { MONGO_URI } = require('./config');
var cors = require('cors')

// Routes
const flightsRoutes = require('./routes/api/flights');
const statusesRoutes = require('./routes/api/status');

const app = express();
app.use(cors());

// BodyParser Middleware
app.use(express.json());

// Connect to MongoDB
mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
    .then(() => console.log('connected to mongoDB'))
    .catch(err => console.log(err));

app.get("/", (req, res) => {
    res.send("Hello from node");
})

// User routes
app.use('/api/flights', flightsRoutes);
app.use('/api/status', statusesRoutes);

const PORT = 5000;

app.listen(PORT, () => console.log(`started in ${PORT}`));