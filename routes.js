const express = require('express')
const fs = require('fs')
const path = require('path')

const router = express.Router()

router.get('/', (req, res) => {
  res.render('doom')
})

router.get('/sacrifice', (req, res) => {
  res.render('sacrifice')
})

router.get('/creature', (req, res) => {
  res.render('creature')
})

module.exports = router