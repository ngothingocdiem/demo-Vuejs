module.exports = app => {
    const students = require ("../controllers/StudentController.js");

    app.get("/students",students.findAll);
}

