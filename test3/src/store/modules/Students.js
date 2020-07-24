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
        console.log(response.data);
        commit('setStudents', response.data);
    },
    async addStudent({ commit },[fname,fage,fsex,faddress,fclasss,fscore]) {
        //const response = await Axios.post('http://localhost:3000/students', { name,age,sex,address,classs,score });
        const response = await Axios({
            method: 'post',
            url: 'http://localhost:3000/students',
            data: {
                name : fname,
                age : fage,
                sex : fsex,
                address : faddress,
                classs : fclasss,
                score : fscore
              }
        })
        commit('newStudent', response.data);
        console.log(response.data);
    },
    async deleteStudent({ commit }, id) {
        await Axios.delete(`http://localhost:3000/students/${id}`);
        commit('remoStudent', id);
    },

    async filterStudent({ commit }, e) {
        const limit = parseInt(e.target.options[e.target.options.selectedIndex].innerText);
        const reponse = await Axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`);
        commit('filterStudent', reponse.data);
    },

    async changeCompletedStudent(xxx, id) {
        //console.log(id);
        const response = await Axios.put(`https://jsonplaceholder.typicode.com/todos/${id}`);
        console.log(response);
        //conmit('changeCompleted',response.data);
    }

};

const mutations = {
    setStudents: (state, data) => (state.students = data),
    newStudent: (state, student) => (state.students.unshift(student)),
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