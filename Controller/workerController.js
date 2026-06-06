const express = require('express');
const Worker = require("../Model/workersModel");

//add workers
const addWorkers = async (req,res) =>{
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

const getAllWorkers = async (req,res) =>{
  const allWorkers = await Worker.find();
console.log(allWorkers)
  if(!allWorkers){
    res.status(500).json({message:"workers not found"})
  }
  res.status(200).json({message:"all workers are here", data:allWorkers})
}

const getWorker = async (req, res) => {
  try {
    const  id  = req.params.id;
  console.log("API HIT");
  console.log("ID:", req.params.id);

    const workerData = await Worker.findById(id);

    if (!workerData) {
      return res.status(404).json({
        message: "Worker not found"
      });
    }

    res.status(200).json({
      message: "Worker is here",
      data: workerData
    });

  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error: error.message
    });
  }
};

module.exports = {addWorkers,getAllWorkers,getWorker};