<template>
    <div class="addTodo">
        <form action="#" @submit='submit'>
            <input type="text" v-model="name" placeholder="name...">
            <input type="text" v-model="age" placeholder="age...">
            <input type="text" v-model="sex" placeholder="sex...">
            <input type="text" v-model="address" placeholder="address...">
            <input type="text" v-model="classs" placeholder="classs...">
            <input type="text" v-model="score" placeholder="score...">
            
            <input type="submit" value="Submit">
        </form>
    </div>
</template>

<script src="./public/js/addStudent.js">

</script>

<style src="./public/sass/style.scss" lang="scss" scoped>

</style>