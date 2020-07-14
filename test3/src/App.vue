<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
  <!-- <div id="app">
    <div class="container">
      <h1 class="title">TODO LIST</h1>
      <Addproduct/>
      <Filterproduct/>
      <Product/>
    </div>
  </div> -->
</template>

 <script>
// import Product from './components/products/product';
// import Addproduct from './components/addproducts/addproduct';
// import Filterproduct from './components/filterproducts/fileterproduct';

// export default {
//   name: 'App',
//   components: {
//     Product,
//     Addproduct,
//     Filterproduct
//   }
// }
 </script>

<style lang="scss">

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

/* body{
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  line-height: 1.6;
  background: #e8f7f0;
}
.container{
  max-width: 1100px;
  margin: auto;
  overflow: auto;
  padding: 0 20px;
} */
</style>

