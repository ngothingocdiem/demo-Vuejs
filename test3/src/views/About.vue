<template>
  <div class="about">
    <AddStudent/>
  </div>
</template>
<script>
// @ is an alias to /src
import AddStudent from '@/components/addStudents/addStudent.vue'

export default {
  name: 'About',
  components: {
    AddStudent
  }
}
</script>