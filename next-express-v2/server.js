const express = require('express');
const next = require('next');
// const main = require('./routes/main.js');

let dev = process.env.NODE_ENV !== "production";
let port = 3000;
let app = next({ dev });
let handler = app.getRequestHandler();

app.prepare().then(()=>{
   let server = express();
   
   // server.use('/', main);

   server.get('/', (req,res)=>{
      res.redirect('/home');
   });
   
   server.get('/home', (req,res)=>{
      app.render(req, res, '/home');
   });

   server.get('*', (req,res)=>{
      return handler(req,res);
   });

   server.listen(port, console.log(`server listening on port ${port}`));
});