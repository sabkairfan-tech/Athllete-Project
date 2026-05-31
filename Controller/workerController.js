const express = require('express');
const Worker = require("../Model/workersModel");


const Employee = async (req,res) =>{
try{
const userData = req.body;

if(!userData){
  return res.status(500).json({message:"check all required fields"})
}

const newData = await Worker.create(userData)
res.status(200).json({message:"Save Successfully"})

}
catch (error) {
    res.status(500).json({ message: error.message });
}

}

module.exports = {Employee};