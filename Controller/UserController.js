const user = require("../Model/UserModel");
const upload = require("../middleware/upload");


// Get all users
const getallusers = async (req, res) => {
  try {
    const users = await user.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({
      message: "Users not found",
      error: error.message,
    });
  }
};


// Create a new user
const postusers = async (req, res) => {
  try {
    const { name, email, password } = req.body;
/*    if (email) 
    {
    
      const existingUser = await user.findOne({ email });
      if (existingUser) 
      {
        return res.status(400).json({ message: "User with this email already exists" });
      }
   }
*/
 // file info
    const file = req.file;

    if (!file) {
      return res.status(400).json({
        message: "File is required"
      });
    }
    const newUser = await user.create({name,email,password,file});

    res.status(201).json({message: "User created successfully", data: newUser,
    });
  } 
  catch (error) {
    res.status(500).json({ message: "User not created" });
  }
};



//update user
const updateusers = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, password } = req.body;

    const updatedUser = await user.findByIdAndUpdate(
      id,
      { name, email, password },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User updated successfully", data: updatedUser });
  } catch (error) {
    res.status(500).json({ message: "Error updating user" });
  }
};

module.exports = { getallusers, postusers, updateusers };
