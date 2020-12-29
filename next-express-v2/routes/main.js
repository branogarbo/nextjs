const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const router = express.Router();

router.get('/', (req,res)=>{
   res.redirect('/home');
});

router.get('/home', (req,res)=>{
   app.render(req, res, '/home');
});

module.exports = router;