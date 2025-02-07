"use strict";
module.exports = (sequelize, DataTypes) => {
  const Message = sequelize.define(
    "Message",
    {
      title: DataTypes.STRING,
      content: DataTypes.STRING,
    },
    {}
  );
  Message.associate = function (models) {
    // associations can be defined here
  };
  return Message;
};
