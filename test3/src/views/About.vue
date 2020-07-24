<template>
  <div class="about">
<<<<<<< HEAD
    <div class="container">
      <filterproduct />
      <product />
    </div>
=======
    <AddStudent/>
>>>>>>> 8f8cdb09e6a4438572703cc2ddc5dab6e2cb97f5
  </div>
</template>
<script>
// @ is an alias to /src
<<<<<<< HEAD
import product from "@/components/products/product";
import filterproduct from "@/components/filterproducts/fileterproduct";

export default {
  name: "Home",
  components: {
    product,
    filterproduct,
  },
};
=======
import AddStudent from '@/components/addStudents/addStudent.vue'

export default {
  name: 'About',
  components: {
    AddStudent
  }
}
>>>>>>> 8f8cdb09e6a4438572703cc2ddc5dab6e2cb97f5
</script>