const uri="mongodb+srv://sample:S*mple@cluster0.khiubqn.mongodb.net/?retryWrites=true&w=majority";
const mongoose=require('mongoose');

mongoose.connect(uri,{
    dbName:"myDB"
}).then(
    ()=>{console.log("Done")}
).catch((err)=>{console.error(err)}
); 