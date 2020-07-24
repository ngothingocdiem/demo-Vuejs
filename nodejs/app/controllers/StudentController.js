const Student = require ("../models/StudentModel.js");

exports.findAll = (req,res) => {
    Student.getAll((err,data) => {
        if(err)
        res.status(500).send({
            massage : err.massage || "Some error occurred while retrieving student"
        });
        else{
            res.send(data);
        }
    });
};

exports.findById = (req, res) => {
    Student.findById(req.params.studentId, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Student with id ${req.params.studentId}.`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving Student with id " + req.params.studentId
          });
        }
      } else res.send(data);
    });
  };

