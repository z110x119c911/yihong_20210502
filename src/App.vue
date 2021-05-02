<template>
  <div id="app">
    <Nav/>
      <router-view></router-view>
    <Footer/>
  </div>
</template>
<style lang="scss">
  @import './assets/scss/all';
</style>  
<script>
import Nav from './components/public/nav';
import Footer from './components/public/footer';
export default {
  components:{
    Nav,
    Footer,
  },
  data() {
    return {
      
    }
  },
}
</script>