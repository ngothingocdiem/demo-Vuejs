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

