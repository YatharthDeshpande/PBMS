const express = require('express');
const app = express();
const bookRoutes = require('./routes/bookroutes');
require("./connections/conn");
app.use(express.json());
app.use('/api/v1/',bookRoutes);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
    });    