// // const mongoose = require('mongoose');

// // module.exports = async () => {
// //     const connectionParams = {
// //         useNewUrlParser: true,
// //         useUnifiedTopology: true,
// //     };
// //     try{
// //         await mongoose.connect(process.env.DB, connectionParams);
// //         console.log("Connected to DB successfully!");
// //     } catch(error)
// //     {
// //         console.log(error);
// //         console.log("Could not connect to DB!");
// //     } 
// // }

// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://taimurhassansarmadths:ucrlQVvNrjAKdpaa@cluster0.ewrcnip.mongodb.net/?retryWrites=true&w=majority&ssl=true";
// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }

// run().catch(console.dir);

// module.exports = run;

// const mongoose = require("mongoose");

// const connectDB = async () => {
//     try {
//       const conn = await mongoose.connect(process.env.DB);
//       console.log(`MongoDB Connected: ${conn.connection.host}`);
//     } catch (error) {
//       console.error(error.message);
//       process.exit(1);
//     }
//   }

// module.exports = connectDB