module.exports = app => {
    const PATH_API_USERS = `/api/users`

    const users = require("../controllers/user.controller.js");
    
    var router = require("express").Router();
  
    // Create a new User
    router.post("/", users.create);
  
    // Get all users
    router.get("/", users.findAll);
  
    // Get a single User with id
    router.get("/:id", users.findOne);
  
    app.use(PATH_API_USERS, router);
  };