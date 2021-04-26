const express = require("express");
const bodyParser = require("body-parser");

const app =express();
app.use(bodyParser.json())
app.get("/products", (req, res) =>{
  
    res.json(products)
})

app.post("/products", (req,res) =>{
    products.push(req.body);
    res.send(products);
})
app.get("/products/:id", (req,res) =>{
   
    res.json(products.filter(el => el.id ===req.params.id));
})

app.post("/products/cart", (req,res) =>{
    products.push(req.body);
    res.send(addToCart);
})

app.listen(3000,( )=>{
    console.log("server running...")
});

let addToCart =[
{}
]





















































let products =[
    {
        id:"1",
        model : "3",
        name : "chryler",
        ave_price : "32971",
        ave_horsepower : "291.333"   
       
    },
    {
        id:"2",
        model : "8",
        name : "honda",
        ave_price : "27965",
        ave_horsepower : "190.625"   
       
    },
     {
        id:"3",
        model : "18",
        name : "mercedes-benz",
        ave_price : "80681",
        ave_horsepower : "333.944"   
       
    },
    {
        id:"1",
        model : "419",
        name : "ford",
        ave_price : "34998",
        ave_horsepower : "281.263"   
       
    },
]
























































































































/*const http =require("http");

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type' :"application/json"});
    if(req.url==="/users"){
    res.write(JSON.stringify(users));}
    else if (req.url ==="/products")
    {
        res.write("blalal");}
    res.end();
}).listen(3300, () =>{
    console.log("server running...")
});*/