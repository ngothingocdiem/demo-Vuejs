<template>
  <div class="container container-config">
    <div class="search">
      <form action="#">
        <input type="text" name="search" v-model="search" placeholder="search...">
        <i class="fas fa-search" @click="handsearch"></i>
      </form>
    </div>
    <div class="card">
      <div class="card-header">DANH SÁCH SINH VIÊN</div>
      <div class="card-body p-0">
        <table class="table table-hover mb-0">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Họ và Tên</th>
              <th scope="col">Tuổi</th>
              <th scope="col">Giới Tính</th>
              <th scope="col">Địa chỉ</th>
              <th scope="col">Lớp</th>
              <th scope="col">Điểm</th>
              <th scope="col">Thao tác</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="student in allStudents"
              :key="student.id"
              class="p-2"
              :class="{ unCompleted: student.completed == false }"
            >
              <th scope="row">{{ student.id }}</th>
              <td>{{ student.name }}</td>
              <td>{{ student.age }}</td>
              <td>{{ student.sex }}</td>
              <td>{{ student.address }}</td>
              <td>{{ student.classs }}</td>
              <td>{{ student.score }}</td>
              <td>
               <div class="edit" @click="editHanld(student)"><router-link to="/edit"><i class="fa fa-pencil-square-o text-primary mr-3" aria-hidden="true"></i></router-link></div> 
                  
                <i @click="deleteStudent(student.id)" class="fas fa-trash-alt text-danger"></i>

              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="card-footer"></div>
    </div>
  </div>
</template>

<script src="./public/js/Student.js"></script>
<style src="./public/sass/student.scss" lang="scss"></style>
