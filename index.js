import express from "express";
import dotenv from "dotenv";
import { MongoClient } from "mongodb";
import { customerRouter } from "./api/customer.router";
import { CustomerController } from "./api/customer.controller";
dotenv.config();
/***************************************************************/
const client = new MongoClient(process.env.DB_URL); // connect server dev-be defined connect mongodb with BASE_URL
client.connect();
console.log("DB connect....")
const db = client.db(process.env.DB_NAME);

/***************************************************************/
const collection_customer = db.collection("sample");
const customerCTL = new CustomerController(collection_customer);

/***************************************************************/
const app = express();
app.use(express.json());
app.use("/api/customers", customerRouter(customerCTL));

/***************************************************************/
app.listen(process.env.PORT, (err) => {
    if (err) console.log(err)
    else console.log(`Server listen on port ${process.env.PORT}`)
})