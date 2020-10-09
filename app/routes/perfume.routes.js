module.exports = app =>{
    const perfumes = require('../controller/perfume.controller.js');

    var router = require("express").Router();
    
    //create a new perfume
    router.post("/", perfumes.create);

    //retrieve all perfumes
    router.get("/", perfumes.findAll);

    //retrieve a single fragrance with ID
    router.get("/:id", perfumes.findOne);

    //Update fragrance details(lol idk)
    router.put("/id", perfumes.update);

    //Delete a perfume with id
    router.delete("/:id", perfumes.delete);

    //Delete all Perfumes(why would i even want to do that)
    router.delete("/", perfumes.deleteAll);

    app.use('/api/perfumes', router);

}