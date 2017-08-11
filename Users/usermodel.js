const express = require('express')
const app = express()

app.get('/login', function (req, res) {
  var user_name = req.query.email;
  var pwd = req.query.password;

  if (user_name == 'testuser' && pwd == 'test_pwd') {
    res.status(200).json('Login success');
  }
  else {
    res.status(400).json('Login failed');
  }
})

app.get('/user', function (req, res) {
  res.status(200).json({
    "fullName": "sundar pichai",
    "company": "Google",
    "age": 45,
    "address": "MountainView, CA",
    "profilePic": "http://searchengineland.com/figz/wp-content/seloads/2015/05/sundar-pichai-2-1920-800x450.jpg"
  });
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
