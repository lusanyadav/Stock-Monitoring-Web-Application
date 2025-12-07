if (process.env.NODE_ENV != "production") {
    require("dotenv").config();
}
const express = require("express");
const mongoose = require("mongoose");
const HoldingsModel = require("./model/HoldingsModel");
const PositionsModel = require("./model/PositionsModel");
const OrdersModel = require("./model/OrdersModel");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 8080;
const url = process.env.MONGO_URL;


app.use(cors());
app.use(bodyParser.json());


main().
    then(() => {
    console.log("Connection with mongodb is successfull")
    }).
    catch((err) => console.log(err));

async function main() {
    await mongoose.connect(url);
}

app.get("/", (req, res) => {
    res.send("Welcome to my stock trading apllication")
})
app.get("/allHoldings", async (req, res) => {
    let allHoldings = await HoldingsModel.find({});

    res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
  let allPositions = await PositionsModel.find({});

  res.json(allPositions);
});

app.get("/allOrders", async (req, res) => {
    let allOrders = await OrdersModel.find({});

    res.json(allOrders);
})

app.post("/newOrder", async(req, res) => {
    
    let newOrder = new OrdersModel({
        name: req.body.name,
        qty: req.body.qty,
        price: req.body.price,
        mode: req.body.mode
    });

    await newOrder.save();
    
})




app.listen(PORT, () => {
    console.log("App is launched succesfully");
})