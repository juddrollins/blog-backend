blog-backend

Login:
  -API: http://localhost:3000/user/login
  -Body: 
  {
    "username": "",
    "password": ""
  }
  
Register:
  -API: http://localhost:3000/user/create
  -Body:
  {
    "username": "",
    "password": "",
    "firstname": "",
    "lastname": ""
  }
  
Make Blog Post:
  -API: http://localhost:3000/blog/post
  -Body: 
  {
    "title": "Post2",
    "content": "Test Post number 2"
  }
  -Authorization: Bearer Token
  
Get Blog Post:
  -API: http://localhost:3000/blog/getAll
  -Body: none
  -Authorization: Bearer Token
