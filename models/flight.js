const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');
const schema = mongoose.Schema;

const flightSchema = new mongoose.Schema({
    flightId: { type: String, default: uuidv4(), },
    flightCode: { type: String, required: true },
    flightProvider: { type: String, required: true },
    sourcePortName: { type: String, required: true },
    sourcePortCode: { type: String, required: true },
    destinationPortName: { type: String, required: true },
    destinationPortCode: { type: String, required: true },
    delayTime: { type: Date },
    scheduledArrival: { type: Date, default: Date.now() },
    scheduledDeparture: { type: Date, default: Date.now() },
    status: { type: String, required: true },
    statusType: { type: String, enum: ['LANDED', 'ON_SCHEDULE', 'DELAYED'], required: true } 
}, {versionKey: false}, {timestamps: true}
);

module.exports = mongoose.model('Flights', flightSchema);