<template>
  <div>
    <Header :picture="img"></Header>
    <section class="bg-white">
      <div class="row p-5 serviceImg">
        <div class="col-md-3">
          123
        </div>
        <div class="col-md-9">
          <div class="text-center">
            <h4 class="pt-5 pb-4 border-bottom text-green">一般清潔服務</h4>
          </div>
          <div class="row p-md-5 p-0">
            <div class="col-4 py-2">
              <img src="../assets/img/environment/1-1.jpg" class="card-img-top" alt="...">
            </div>
            <div class="col-4 py-2">
              <img src="../assets/img/environment/1-2.jpg" class="card-img-top" alt="...">
            </div>
            <div class="col-4 py-2">
              <img src="../assets/img/environment/1-3.jpg" class="card-img-top" alt="...">
            </div>
            <div class="col-4 py-2">
              <img src="../assets/img/environment/1-4.jpg" class="card-img-top" alt="...">
            </div>
            <div class="col-4 py-2">
              <img src="../assets/img/environment/1-5.jpg" class="card-img-top" alt="...">
            </div>
            <div class="col-4 py-2">
              <img src="../assets/img/environment/1-6.jpg" class="card-img-top" alt="...">
            </div>
            <div class="col-12 text-green">
              <h5 class="text-center py-4">提供辦公室.大樓.房務.廠辦細清清潔服務</h5>
                <ul class="list-group list">
                  <li class="list-group-item align-self-center"><i class="material-icons">verified_user</i>客製化的人力規劃管理</li>
                  <li class="list-group-item align-self-center"><i class="material-icons">verified_user</i>提供更具效果的清潔方式和工具</li>
                  <li class="list-group-item align-self-center"><i class="material-icons">verified_user</i>提高整體生產力及貢獻度</li>
                  <li class="list-group-item align-self-center"><i class="material-icons">verified_user</i>持續研究開發專業清潔工具設備及技術</li>
                </ul>
            </div>
          </div>
          
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