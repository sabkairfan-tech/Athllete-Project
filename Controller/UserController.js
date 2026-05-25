const user = require("../Model/UserModel");
const upload = require("../middleware/upload");
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

module.exports = { getallusers, postusers };
