import Vue from 'vue'
import Vuex from 'vuex'
import students from './modules/Students'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        Student: {
            id: "",
            name: "",
            age: "",
            sex: "",
            address: "",
            classs: "",
            score: ""
        }
    },
    mutations: {
        setStudent(state, value) {
            state.Student.id = value.id;
            state.Student.name = value.name;
            state.Student.age = value.age;
            state.Student.sex = value.sex;
            state.Student.address = value.address;
            state.Student.classs = value.classs;
            state.Student.score = value.score;
        }
    },
    actions: {},
    modules: {
        students
    }
})