'use strict';
module.exports = (sequelize, DataTypes) => {
  var Post = sequelize.define('Post', {
    author: DataTypes.STRING,
    title: DataTypes.STRING,
    message: DataTypes.STRING,
    url: DataTypes.STRING,
    likes: DataTypes.INTEGER,
    rating: DataTypes.FLOAT
    postLocation: DataTypes.STRING,
  }, {});
  Post.associate = function(models) {
    // associations can be defined here
  };
  return Post;
};
