const router = require("express").Router();
const { User } = require("../models/user");
const Subscription = require("../models/subscriptions");
const bcrypt = require("bcrypt");
const Joi = require("joi");

router.post("/", async (req, res) => {
	console.log("\nAUTHING\n");
	try {
		const { error } = validate(req.body);
		if (error)
			return res.status(400).send({ message: error.details[0].message });

		const user = await User.findOne({ email: req.body.email });
		if (!user)
			return res.status(401).send({ message: "Invalid Email or Password" });

		const validPassword = await bcrypt.compare(
			req.body.password,
			user.password
		);
		if (!validPassword)
			return res.status(401).send({ message: "Invalid Email or Password" });

		const token = user.generateAuthToken();

		console.log("\n\nBefore checking for subscription!!\n");

		const subscribed_plan = await Subscription.findOne({email: req.body.email});
		console.log("\nSUBSCRIBED PLAN: " , subscribed_plan.plan);

		if(subscribed_plan)
			res.status(200).send({ data: token, message: "logged in successfully", userEmail: req.body.email, userPlan: subscribed_plan.plan });
		else
			res.status(200).send({ data: token, message: "logged in successfully", userEmail: req.body.email, userPlan: "None" });
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
});

const validate = (data) => {
	const schema = Joi.object({
		email: Joi.string().email().required().label("Email"),
		password: Joi.string().required().label("Password"),
	});
	return schema.validate(data);
};

module.exports = router;