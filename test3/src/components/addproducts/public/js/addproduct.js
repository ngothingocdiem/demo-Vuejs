import {mapActions} from 'vuex';
export default {
    name: 'addTodo',
    data(){
        return {
            title: ''
        }
    },
    methods:{
        ...mapActions(['addTodo']),
        submit(e){
            e.preventDefault();
            this.addTodo(this.title);
        }
    },
}