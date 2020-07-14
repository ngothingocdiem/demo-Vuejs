<template>
  <div class="about">
    <filterproduct/>
    <product/>
  </div>
</template>
<script>
// @ is an alias to /src
import product from '@/components/products/product'
import filterproduct from '@/components/filterproducts/fileterproduct'

export default {
  name: 'Home',
  components: {
    product,
    filterproduct
  }
}
</script>