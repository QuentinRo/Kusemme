<template>
  <div id="app">
    <nav>
      <div class="nav-wrapper">
        <a href="#" class="brand-logo center">Kusemme</a>
        <ul class="left hide-on-med-and-down">
          <li><router-link to="/">Quizz</router-link></li>
          <li><router-link to="/Login">Login</router-link></li>
          <li><router-link to="/Subscribe">Subscribe</router-link></li>
        </ul>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
