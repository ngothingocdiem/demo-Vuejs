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

<script>

</script>

<style scoped>
    .todos{
        display: grid;
        grid-template-columns: repeat(4,1fr);
        grid-gap: 10px;
    }
    .todo{
        border: 1px solid #ccc;
        background: #41b883;
        padding: 10px;
        border-radius: 5px;
        text-align: center;
        position: relative;
    }
    i{
        font-size: 20px;
        position: absolute;
        bottom: 30%;
        right: 0;
        color: #fff;
        cursor: pointer;
    }
    p{
        margin: 20px 20px 20px 0;
        display: inline-block;
        
    }
    .completed{
        display: inline-block;
    }
     .uncompleted{
         display: inline-block;
     }
    .box-completed{
        display: inline-block;
        width: 20px;
        height: 20px;
        background: #41b883;
    }
      .box-uncompleted{
        display: inline-block;
        width: 20px;
        height: 20px;
        background: red;
    }
    .unCompleted{
        background: red;
    }
</style>