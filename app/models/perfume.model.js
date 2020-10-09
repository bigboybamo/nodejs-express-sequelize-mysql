module.exports = (sequelize, Sequelize) => {
  const Perfume = sequelize.define("perfume", {
    Name: {
      type: Sequelize.STRING
    },
    Brand: {
      type: Sequelize.STRING,
    },
    Notes: {
      type: Sequelize.STRING
    },

    Content: {
      type: Sequelize.STRING
    },

    Entryname: {
      type: Sequelize.STRING
    },
  });

  return Perfume;
};
