const user = require('../Model/UserModel');

const getusers = async (req, res) => {
  try {
    const users = await user.find();
    res.status(200).json(users);
    } catch (error) {
    res.status(500).json({ message: error.message });
    }};


module.exports = { getusers };
