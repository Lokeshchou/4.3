module.exports = app => {
  const hobby = require("../controllers/hobby.controller.js");

  var router = require("express").Router();

  // Create a new Hobby
  router.post("/", hobby.create);

  // Retrieve all Hobby
  router.get("/", hobby.findAll);


  // Retrieve a single Hobby with id
  router.get("/:id", hobby.findOne);

  // Update a Tutorial with id
  router.put("/:id", hobby.update);

  // Delete a Tutorial with id
  router.delete("/:id", hobby.delete);

  // Create a new Tutorial
  router.delete("/", hobby.deleteAll);

  app.use("hobby", router);
};
