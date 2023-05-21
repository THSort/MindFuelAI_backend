const mongoose = require('mongoose');

const subscriptionsSchema = new mongoose.Schema({
    email: {type: String, required: true},
    plan: {type: String, required: true},
});


// var Subscription = mongoose.model("subscriptions", subscriptionsSchema);

module.exports = mongoose.model("subscriptions", subscriptionsSchema);