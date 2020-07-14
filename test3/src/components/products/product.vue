<template>
  <div class="Todos">
      <div class="completed">
          <p>COMPLETED</p>
          <div class="box-completed"></div>
      </div>
       <div class="uncompleted">
          <p>UNCOMPLETED</p>
          <div class="box-uncompleted"></div>
      </div>
      <div class="todos">
            <div v-for="todo in allTodos" 
            :key="todo.id" class="todo"
            :class="{unCompleted:(todo.completed == false)}"
            @click="changeCompletedTodo(todo.id)">
              {{todo.title}}
              <br/>
              {{todo.completed}}

              <i @click = "deleteTodo(todo.id)" class="fas fa-trash-alt"></i>
          </div>
      </div>
  </div>
</template>

<script src="./public/js/product.js"></script>
<style src="./public/sass/styles.scss" lang="scss"></style>