import Vue from 'vue'
import Vuex from 'vuex'
import students from './modules/Students'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        edit:{
            id : ""
        }
    },
    mutations: {
        setid(state,value){
            state.edit.id = value;
        }
    },
    actions: {},
    modules: {
        students
    }
})