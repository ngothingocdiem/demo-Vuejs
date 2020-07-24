<template>
  <div class="edit">
    <EditStudent/>
  </div>
</template>
<script>
// @ is an alias to /src
import EditStudent from '@/components/editStudents/editStudent.vue'

export default {
  name: 'Edit',
  components: {
    EditStudent
  }
}
</script>