import Axios from "axios";


const state = {
    todos:[
    ]

};

const getters ={
    allTodos: (state) => state.todos
};

const actions = {
    async fetchTodos({ commit }){
        const response = await Axios.get('https://jsonplaceholder.typicode.com/todos');
        commit('setTodos',response.data);
    },
    async addTodo({commit},title){
        const response = await Axios.post('https://jsonplaceholder.typicode.com/todos',{title, completed: false});
        commit('newTodo',response.data);
        console.log(response.data);
    },
    async deleteTodo({commit},id){
        await Axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
        commit('remoTodo',id);
    },

    async filterTodo({commit},e){
        const limit = parseInt(e.target.options[e.target.options.selectedIndex].innerText);
        const reponse = await Axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`);
        commit('filterTodo',reponse.data);
    },

    async changeCompletedTodo(xxx,id){
        //console.log(id);
        const response = await Axios.put(`https://jsonplaceholder.typicode.com/todos/${id}`);
        console.log(response);
        //conmit('changeCompleted',response.data);
    }
    
};

const mutations = {
    setTodos: (state, lala) => (state.todos = lala),
    newTodo: (state,todo) => (state.todos.unshift(todo)),
    remoTodo: (state,id) => (state.todos = state.todos.filter(todo => todo.id !== id)),
    filterTodo: (state,data) => (state.todos = data),
    //changCompleted: (state,data) => (state.todos = state.todos.map((todo,index) => todo.id.completed = true))
};

export default {
    state,
    getters,
    actions,
    mutations
};