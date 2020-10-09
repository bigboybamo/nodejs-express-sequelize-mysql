module.exports = {
    HOST: "localhost",
    USER: "bamiji",
    PASSWORD: "test1234",
    DB: "perfumehouse",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };