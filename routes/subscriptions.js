const router = require('express').Router();
const Subscription = require('../models/subscriptions');

router.post('/', async(req,res) => {
    console.log("SUBSSSS\n");
    try{
        await Subscription.findOneAndDelete({email: req.body.email});
        await new Subscription({email: req.body.email , plan: req.body.plan}).save();
        res.status(201).send({message: "Subscribed!!" , userPlan: req.body.plan});
    } catch(error){
        console.log(error);
        res.status(500).send({message: "Internal Server Error!" });
    }
});

module.exports = router;