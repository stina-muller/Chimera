const express = require('express')
const fs = require('fs')
const path = require('path')

const router = express.Router()

router.get('/', (req, res) => {
  res.render('doom')
})

module.exports = router