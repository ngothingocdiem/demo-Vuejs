import Axios from "axios";


const state = {
    students: []

};

const getters = {
    allStudents: (state) => state.students
};

const actions = {
    async fetchStudents({ commit }) {
        const response = await Axios({
            method:'GET',
            url : "http://localhost:3000/students",
            headers :{'Access-Control-Allow-Origin': 'http://localhost:3000' }
        });
        commit('setStudents', response.data);
    },
    async addStudent({ commit },student) {
        //const response = await Axios.post('http://localhost:3000/students', { name,age,sex,address,classs,score });
        const response = await Axios({
            method: 'post',
            url: 'http://localhost:3000/students',
            data: {
                name : student.name,
                age : student.age,
                sex : student.sex,
                address : student.address,
                classs : student.classs,
                score : student.score
              }
        })
        commit('newStudent', response.data);
    },
    async editStudent({ commit },student) {
        const response = await Axios({
            method: 'put',
            url: `http://localhost:3000/students/${id}`,
            data: {
                name : student.name,
                age : student.age,
                sex : student.sex,
                address : student.address,
                classs : student.classs,
                score : student.score
              }
        })
        commit('editStudent', response.data, id);
    },
    async deleteStudent({ commit }, id) {
        await Axios.delete(`http://localhost:3000/students/${id}`);
        commit('remoStudent', id);
    },

    async filterStudent({ commit }, e) {
        const limit = parseInt(e.target.options[e.target.options.selectedIndex].innerText);
        const reponse = await Axios.get(`http://localhost:3000/students?_limit=${limit}`);
        commit('filterStudent', reponse.data);
    },

    async changeCompletedStudent(xxx, id) {
        //console.log(id);
        const response = await Axios.put(`http://localhost:3000/students/${id}`);
        console.log(response);
        //conmit('changeCompleted',response.data);
    }

};

const mutations = {
    setStudents: (state, data) => (state.students = data),
    newStudent: (state, student) => (state.students.unshift(student)),
    editStudent: (state, student, id) => (state.students.unshift(student).filter(student => student.id === id)),
    remoStudent: (state, id) => (state.students = state.students.filter(student => student.id !== id)),
    filterStudent: (state, data) => (state.students = data),
    //changCompleted: (state,data) => (state.todos = state.todos.map((todo,index) => todo.id.completed = true))
};

export default {
    state,
    getters,
    actions,
    mutations
};