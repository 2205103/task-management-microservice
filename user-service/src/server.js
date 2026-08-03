const express = require('express');
const app = express();
const PORT = 3000;

const routes = require("./src/routes");
app.use("/service",routes);
app.use(express.json());

app.listen(PORT, ()=>{
    console.log('Server is listening on ${PORT}');
});