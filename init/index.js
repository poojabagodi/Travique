const mongoose=require("mongoose");
const initdata=require("./data.js");
const Listing=require("../models/listing.js");

main().then(()=>{
    console.log("connected to db");
})
.catch((err)=>{
console.log(err);
});

async function main() {
    const mongo_url="mongodb://127.0.0.1:27017/wanderlust";
    await mongoose.connect(mongo_url);
}

const initDB=async()=>{
    await Listing.deleteMany({});
    initdata.data=initdata.data.map((obj) => ({...obj,owner:"67605f39edc9de799107feb7"}));
    await Listing.insertMany(initdata.data);
    console.log("data was initialized");
};
initDB();