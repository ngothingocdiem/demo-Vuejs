const sql = require ('./db.js');

// Tạo hàm khởi tạo

const Student = function(student){
    this.name = student.name;
    this.age = student.age;
    this.sex = student.sex;
    this.address = student.address;
    this.class = student.class;
    this.score = student.score;
}

// Student.create = (newStudent, result) =>{
//     sql.query("INSERT INTO students SET ?", newStudent,(req,res) => {
//         if(err) {
//             console.log("error: ", err);
//             result(err,null);
//             return;
//         }
//         console.log("Creat student: ", {id:res.insertId,...newStudent});
//         result(null,{id:res.insertId,...newStudent});
//     })
// }

Student.getAll = result => {
    sql.query("SELECT * FROM students", (err,res) => {
        if(err){
            console.log("error: ", err);
            result(null,err);
            return;
        }

        console.log("students: ", res);
        result(null,res);
    })
}

module.exports = Student;