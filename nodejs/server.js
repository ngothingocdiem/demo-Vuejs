// Thêm module express
const express = require ("express");

// Thêm module body-parser
const bodyParser = require ("body-parser");

// Tạo một server
const app = express();

// Nội dung nhận được là kiểu json
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended : true}));

// Tạo một route đơn giản
app.get("/",(req,res) => {
    res.json({message: "hello nodejs"})
});

require ("./app/routers/StudentRoute.js")(app);


// Tạo port và listen cho request
app.listen(3000,() => {
    console.log("server run port 3000");
});