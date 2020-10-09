const db = require("../models");
const { request } = require("express");
const Perfume = db.perfumes;

const Op = db.sequelize.Op;

//create and save a perfume

exports.create = (req, res) => {
  //validate request

  if (!req.body.Name) {
    res.status(400).send({
      message: "Content cannot be empty",
    });
    return;
  }
  //create a perfume

  const perfume = {
    Name: req.body.Name,
    Brand: req.body.Brand,
    Notes: req.body.Notes,
    Content: req.body.Content,
    Entryname: req.body.Entryname,
  };

  //save the perfume
  Perfume.create(perfume)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Something occurred and the perfume couldn't be saved",
      });
    });
};

//retrieve all Perfumes from Database

exports.findAll = (req, res) => {
  const Name = req.query.Name;
  var condition = Name ? { Name: { [Op.like]: `%${Name}%` } } : null;

  Perfume.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          `Something happened and the perfumes couldn't be retrieved`,
      });
    });
};

//find a single perfume with Id
exports.findOne = (req, res) => {
  const id = req.params.id;
  Perfume.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Perfume with id=" + id,
      });
    });
};

//update a perfume with the id in the request
exports.update = (req, res) => {
  const id = req.params.id;
  Perfume.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Perfume was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Perfume with id=${id}. Maybe perfume was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating perfume with id=" + id,
      });
    });
};

//delete a perfume from the the database
exports.delete = (req, res) => {
    const id = req.params.id;

    Perfume.destroy({
        where: {id: id }
    })
    .then(num =>{
        if(num == 1){
            res.send({
                message: "Perfume Successfully deleted"
            });
        }
        else {
            res.send({
                message: `Cannot delete perfume with id = ${id}. maybe perfume was not found`

            })
        }
    } )
    .catch(err=>{
        res.status(500).send({
            message: "Could not delete perfume with id=" + id
        });
    });
};

//delete all tutorials from the database
exports.deleteAll = (req, res) => {
    Perfume.destroy({
        where:{},
        truncate: false
    })
    .then(nums => {
        res.send({message: `${nums} perfumes were deleted successfully`})
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || "Some error occurred while removing all perfumes"
        })
    })
};
