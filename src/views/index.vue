<template>
  <div>
    <Header :picture="img"></Header>
    <About/>
    <!-- <Promise/> -->
    <Service/>
    <Value/>
    <!-- <Portfolio/> -->
    <Cooperate/>
    <Faq/>
    <!-- <Contact/> -->
  </div>
</template>

<script>
import header_picture from '../assets/img/header-1.jpg'
import Header from '../components/index/header';
import About from '../components/index/about';
import Service from '../components/index/service';
import Value from '../components/index/value';
// import Portfolio from '../components/index/portfolio';
import Cooperate from '../components/index/cooperate';
import Faq from '../components/index/faq';
// import Contact from '../components/index/contact';
export default {
  components:{
    // SidebarMenu,
    Header,
    About,
    // Promise,
    Service,
    Value,
    // Portfolio,
    Cooperate,
    Faq,
    // Contact,
  },
  data() {
    return {
      img:header_picture
    }
  },
  methods: {

  },
}
</script>