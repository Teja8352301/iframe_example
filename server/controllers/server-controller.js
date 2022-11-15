const endpoints = require("../endpoints");
const { serviceReq } = require("../axios-calls");

module.exports = {
  loginService: async (req, res, next) => {
    res.send({message:'Welcome to my world'})
  },
};
