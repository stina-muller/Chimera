const express = require('express')
const fs = require('fs')
const path = require('path')
const data = require("./data.json")
const bodyParser = require('body-parser')

const router = express.Router()

const creaturesData= data.creatures

router.get('/', (req, res) => {
  res.render('doom')
})

router.get('/sacrifice', (req, res) => {
  res.render('sacrifice')
})

router.post('/creature', (req, res)=>{
    const postData = req.body
    const creatureKeys = Object.keys(postData)
  for (let i = 0; i < creaturesData.length; i++) {
    if(creaturesData[i].pairing[0] === creatureKeys[0] && creaturesData[i].pairing[1] === creatureKeys[1]){
      creature = creaturesData[i] 
      res.render('creature', creature)
    }
  }
})



module.exports = router