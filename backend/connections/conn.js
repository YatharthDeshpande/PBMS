const mongoose = require('mongoose');
mongoose.connect(
    "mongodb+srv://YatharthDeshpande:Yatharth%401234@cluster0.q1l7c.mongodb.net/crudop?retryWrites=true&w=majority&appName=Cluster0"
).then(() => {console.log("Connection Successful")});
