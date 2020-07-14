import {mapGetters, mapActions} from 'vuex';
export default {
    name: 'Todos',
    methods:{
        ...mapActions(['fetchTodos','deleteTodo','changeCompletedTodo'])
    },
    computed: mapGetters(['allTodos']),
    created(){
        this.fetchTodos()
    } 
}