<template>
  <div class="students">
      <div class="completed">
          <p>COMPLETED</p>
          <div class="box-completed"></div>
      </div>
       <div class="uncompleted">
          <p>UNCOMPLETED</p>
          <div class="box-uncompleted"></div>
      </div>
      <div class="Students">
            <div v-for="student in allStudents" 
            :key="student.id" class="Student"
            :class="{unCompleted:(student.completed == false)}"
            @click="changeCompletedStudent(student.id)">
              {{student.name}}
              <br/>
              {{student.age}}
              <br/>
              {{student.score}}

              <i @click = "deleteStudent(student.id)" class="fas fa-trash-alt"></i>
          </div>
      </div>
  </div>
</template>

<script src="./public/js/Student.js"></script>
<style src="./public/sass/styles.scss" lang="scss"></style>