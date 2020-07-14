<template>
    <div class="addTodo">
        <form action="#" @submit='submit'>
            <input type="text" v-model="title" placeholder="addTodo...">
            <input type="submit" value="Submit">
        </form>
    </div>
</template>

<script>
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
</script>

<style scoped>
form{
    display: flex;
}
input[type='text']{
    flex: 10;
    padding: 10px;
    border: 1px solid #41b883;
    outline: 0;
}
input[type='submit']{
    flex: 2;
    background: #41b883;
    color: #fff;
    border: 1px solid #41b883;
    cursor: pointer;
}
input[type='submit']:hover{
    opacity: 0.8;
    transition: all ease .5s;
}

</style>