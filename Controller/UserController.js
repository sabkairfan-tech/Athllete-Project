const user = require("../Model/UserModel");




const getallusers = async (req, res) => {
  
  try {
    const users = await user.find();
    res.status(200).json(users);
  } 
  
 catch (error) {
    res.status(500).json({
      message: "Users not found",
      error: error.message,
    });

  }};


  const postusers = async (req, res) => {
    try{
       console.log("API called");
      const { name, email, password } = req.body;

      const newUser = await user.create({
      name,
      email,
      password,
    });

    res.status(201).json({
      message: "User created successfully",
      data: newUser,
    });

    }
   catch(error){
    res.status(500).json({
      message: "User not created"});
    
    }};


module.exports = { getallusers,postusers };
