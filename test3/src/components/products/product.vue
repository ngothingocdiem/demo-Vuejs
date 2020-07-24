<template>
  <div class="container">
    <div class="card">
      <div class="card-header">Danh sách sinh viên</div>
      <div class="card-body p-0">
        <table class="table table-hover mb-0">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Họ và Tên</th>
              <th scope="col">Tuổi</th>
              <th scope="col">Điểm</th>
              <th scope="col">Thao tác</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="todo in allTodos"
              :key="todo.id"
              class="todo p-2"
              :class="{ unCompleted: todo.completed == false }"
              @click="changeCompletedTodo(todo.id)"
            >
              <th scope="row">{{ todo.id }}</th>
              <td>{{ todo.name }}</td>
              <td>{{ todo.age }}</td>
              <td>{{ todo.score }}</td>
              <td>
                  <i class="fa fa-pencil-square-o text-primary mr-3" aria-hidden="true"></i>
                <i @click="deleteTodo(todo.id)" class="fas fa-trash-alt text-danger"></i>

              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="card-footer"></div>
    </div>
  </div>
</template>

<script src="./public/js/product.js"></script>
<style src="./public/sass/styles.scss" lang="scss"></style>
