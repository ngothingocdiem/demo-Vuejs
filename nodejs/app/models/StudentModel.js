const sql = require ('./db.js');

// Tạo hàm khởi tạo sinh viên

const Student = function(student){
    this.name = student.name;
    this.age = student.age;
    this.sex = student.sex;
    this.address = student.address;
    this.class = student.class;
    this.score = student.score;
}

// tạo sinh viên mới
// Student.create = (newStudent, result) =>{
//     sql.query("INSERT INTO students SET ?", newStudent,(err,res) => {
//         if(err) {
//             console.log("error: ", err);
//             result(err,null);
//             return;
//         }
//         console.log("Creat student: ", {id:res.insertId,...newStudent});
//         result(null,{id:res.insertId,...newStudent});
//     });
// };

// tìm sinh viên theo id
Student.findById = (studentId, result) => {
    sql.query(`SELECT * FROM students WHERE id = ${studentId}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      
      // nếu tìm được sinh viên 
      if (res.length) {
        console.log("found customer: ", res[0]);
        result(null, res[0]);
        return;
      }
  
      // không có id được tìm thấy
      result({ kind: "not_found" }, null);
    });
  };

//xoá một sinh viên theo id
Student.remove = (id, result) => {
    sql.query("DELETE FROM students WHERE id = ?", id, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
//       if (res.affectedRows == 0) {
//         // not found Customer with the id
//         result({ kind: "not_found" }, null);
//         return;
//       }
  
//       console.log("deleted customer with id: ", id);
//       result(null, res);
//     });
//   };

// lấy tất cả các sinh viên
Student.getAll = result => {
    sql.query("SELECT * FROM students", (err,res) => {
        if(err){
            console.log("error: ", err);
            result(null,err);
            return;
        }

        console.log("students: ", res);
        result(null,res);
    });
};

// Student.updateById = (id, student, result) => {
//     sql.query(
//       "UPDATE customers SET name = ?, age = ?, sex = ?, address = ?, class = ?, score = ?, WHERE id = ?",
//       [student.name, student.age, student.sex, student.address, student.class, student.score, id],
//       (err, res) => {
//         if (err) {
//           console.log("error: ", err);
//           result(null, err);
//           return;
//         }
  
//         if (res.affectedRows == 0) {
//           // not found Customer with the id
//           result({ kind: "not_found" }, null);
//           return;
//         }
  
//         console.log("updated customer: ", { id: id, ...customer });
//         result(null, { id: id, ...customer });
//       }
//     );
//   };

module.exports = Student;