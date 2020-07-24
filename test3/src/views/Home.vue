<template>
  <div class="home">
    <filterStudent/>
    <Student/>
  </div>
</template>

<script>
// @ is an alias to /src
import Student from '@/components/Students/Student'
import filterStudent from '@/components/filterStudents/fileterStudent'

export default {
  name: "Home",
  components: {
    Student,
    filterStudent
  }
}
</script>
