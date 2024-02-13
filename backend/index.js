const express=require("express");
const cors=require("cors");
const axios = require('axios');

const port=3001;

const app=express();
app.use(express.json());
app.use(cors({origin:true}));

app.post("/authenticate",async(req,res)=>{
    const { username } = req.body;
    try{
        const r=await axios.put(
            'https://api.chatengine.io/users/',
            { username : username, secret:username, first_name:username},
            { headers : {"private-key":"32d22a91-9971-40da-8113-a29aa1fb373d"}}
        );
        return res.status(r.status).json(r.data);
    }
    catch(e){
        return res.status(e.response.status).json(e.response.data);
    }
});

app.listen(port);