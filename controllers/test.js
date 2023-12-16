const Test = require("../models/test");

module.exports = {
  getTest: async (req, res) => {
    try {
      const users = await Test.find();
      res.send({
        status: 200,
        message: "success",
        data: users,
      });
    } catch (error) {
      console.log(error);
    }
  },
  postTest: async (req, res) => {
    const user = {
      name: "test",
      age: 10,
    };
    const newUser = new Test(user);
    await newUser.save();
  },
};

// exports.getTest = async (req, res) => {
//     const users = await Test.find();
//     res.send(users);
// }
