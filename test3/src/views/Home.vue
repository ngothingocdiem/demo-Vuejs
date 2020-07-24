<template>
  <div class="home">
    <div class="container">
      <Addproduct />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Addproduct from "@/components/addproducts/addproduct.vue";

export default {
  name: "Home",
  components: {
    Addproduct,
  },
};
</script>
