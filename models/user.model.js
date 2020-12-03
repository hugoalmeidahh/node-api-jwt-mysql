module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      username: DataTypes.STRING,
      password: DataTypes.STRING,
      permission: DataTypes.STRING,

    });
  
    return User;
  }