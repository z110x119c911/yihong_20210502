<template>
  <div>
    <Header :picture="img"></Header>
    <section class="bg-white">
      <div class="row p-5 serviceImg">
        <div class="col-md-3">
          123
        </div>
        <div class="col-md-9">
          
        </div>
      </div>
    </section>
  </div>
</template>
<style lang="scss">
  .serviceImg{
    background: url(~@/assets/img/serviceBg1.png);
    background-position: center center;
  }
  .list-group-item{
    background: transparent;
    border: none
  }
  .list{
    font-size: 18px;
  }
</style>
<script>
import service_picture from '../assets/img/header-1.jpg'
import Header from '../components/index/header'
export default {
  components:{
    Header
  },
  data() {
    return {
      img:service_picture
    }
  },
}
</script>