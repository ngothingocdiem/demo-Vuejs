<template>
  <div class="create">
    <AddStudent/>
  </div>
</template>
<script>
// @ is an alias to /src
import AddStudent from '@/components/addStudents/addStudent.vue'

export default {
  name: 'Create',
  components: {
    AddStudent
  }
}
</script>