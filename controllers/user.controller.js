const db = require('../models');
const User = db.User
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    if(!req.body.username){
        res.status(400).send({
            message: "USERNAME can not be empty!"
        });
        return;
    }

    const user = {
        username: req.body.username,
        password: req.body.password,
        permission: req.body.permission
    }

    User.create(user).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Error creating User"
        });
    });
};

exports.findAll = (req, res) => {
    const username = req.query.username;
    var condition = username ? { username: { [Op.like]: `%${username}%` } } : null;
  
    User.findAndCountAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occured to retrieving users."
        });
    });
};

exports.findOne = (req, res) => {
    const id = req.params.id;

    Uer.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving user with id=" + id
        });
      });
};

exports.update = (req, res) => {};

exports.delete = (req, res) => {};

exports.deleteAll = (req, res) => {};
