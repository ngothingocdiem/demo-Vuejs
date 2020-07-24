<template>
  <div class="about">
    <div class="container">
      <filterproduct />
      <product />
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import product from "@/components/products/product";
import filterproduct from "@/components/filterproducts/fileterproduct";

export default {
  name: "Home",
  components: {
    product,
    filterproduct,
  },
};
</script>