<template>
  <div class="home">
<<<<<<< HEAD
    <div class="container">
      <Addproduct />
    </div>
=======
    <filterStudent/>
    <Student/>
>>>>>>> 8f8cdb09e6a4438572703cc2ddc5dab6e2cb97f5
  </div>
</template>

<script>
// @ is an alias to /src
<<<<<<< HEAD
import Addproduct from "@/components/addproducts/addproduct.vue";
=======
import Student from '@/components/Students/Student'
import filterStudent from '@/components/filterStudents/fileterStudent'
>>>>>>> 8f8cdb09e6a4438572703cc2ddc5dab6e2cb97f5

export default {
  name: "Home",
  components: {
<<<<<<< HEAD
    Addproduct,
  },
};
=======
    Student,
    filterStudent
  }
}
>>>>>>> 8f8cdb09e6a4438572703cc2ddc5dab6e2cb97f5
</script>
