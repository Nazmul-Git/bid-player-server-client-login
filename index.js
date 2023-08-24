const express = require('express')
const players=require('../shop-server/players.json')
const app=express()
const port = 5000


app.get('/', (req, res)=>{
    res.send('Welcome to my server.')
})

app.get('/players', (req, res)=>{
    res.send(players)
})

app.get('/players/:id',(req,res)=>{
    const id=parseInt(req.params.id);
    const getId=players.find(p=>p.id===id)||{}
    res.send(getId);
})

app.listen(port, ()=>{
    console.log(`app listening on port ${port}`)
})