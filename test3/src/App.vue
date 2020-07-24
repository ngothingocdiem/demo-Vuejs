<template>
<div class="container">
  <div id="app">
    <div class="menu">
      <div class="dark container-fluid">
        <nav class="navigation" role="navigation">
          <a href="javascript:void(0);" class="ic menu">
            <span class="line"></span>
            <span class="line"></span>
            <span class="line"></span>
          </a>
          <a href=".">
            <img src="./assets/hinhvue.png" alt />
          </a>
          <a href="javascript:void(0);" class="ic close"></a>
          <!-- </div> -->
          <ul class="main-nav">
            <li class="top-level-link">
              <a href="#" class="active">
                <router-link to="/">HOME</router-link>
              </a>
            </li>
            <li class="top-level-link">
              <a href="#">
                <router-link to="/about">ABOUT</router-link>
              </a>
            </li>
            <li class="top-level-link">
              <a href="#">
                <router-link to="/">PRODUCT</router-link>
              </a>
            </li>
            <li class="top-level-link">
              <a href="#">
                <router-link to="/">CONTACT</router-link>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <router-view />
  </div>
</div>
  
</template>

 <script>
</script>

<style src="./assets/style.scss" lang="scss" scoped>
</style>

