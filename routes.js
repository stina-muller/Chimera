const express = require('express')
const fs = require('fs')
const path = require('path')
const data = require("./data.json")

const router = express.Router()

router.get('/', (req, res) => {
  res.render('doom')
})

router.get('/sacrifice', (req, res) => {
  res.render('sacrifice')
})

router.get('/creature', (req, res) => {
  let postDataTwo = "Bird"
  let postDataOne = "Snake"
  let postData = [postDataOne, postDataTwo]
  creaturesData= data.creatures
  for (let i = 0; i < creaturesData.length; i++) {
    if(creaturesData[i].pairing[0] === postData[0] && creaturesData[i].pairing[1] === postData[1]){
      creature = creaturesData[i] 
      res.render('creature', creature)
    }
  }
})



module.exports = router