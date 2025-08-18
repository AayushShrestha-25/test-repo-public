const express = require("express");
const app = express();
app.get("/", (req, res)=>{
	res.send("Hello from test");
});

const port = 8888;

app.listen(port, ()=>{console.log("App is running");});

