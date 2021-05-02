<template>
  <div>
    <Header :picture="img"></Header>
    <section>
      <b-card no-body>
        <h4 class="d-block d-md-none py-4 text-center mb-0 text-green font-weight-bold">一般清潔服務</h4>
        <b-tabs pills card :vertical="vertical" nav-wrapper-class="py-4 nav-wrap text-center serviceImg">
          <b-tab no-body title="一般清潔服務" disabled>
            <template #title>
              <p class="py-3 h4 text-green font-weight-bold d-none d-md-block">一般清潔服務</p>
            </template>
          </b-tab>
          <b-tab no-body title="環境管理服務" active>
            <b-card-text>
              <div class="card border_corner my-3">
                <div class="card-body">
                  <div class="text-center">
                    <h4 class="pt-5 pb-4 border-service text-green">提供辦公室.大樓.房務.廠辦細清清潔服務</h4>
                  </div>
                  <div class="row p-md-5 p-0">
                    <div class="col-6 col-md-6 col-lg-3 py-2">
                      <img src="../assets/img/environment/1-1.jpg" class="card-img-top imgSize" alt="floor1" title="地板維護上蠟-1">
                    </div>
                    <div class="col-6 col-md-6 col-lg-3 py-2">
                      <img src="../assets/img/environment/1-2.jpg" class="card-img-top imgSize" alt="floor2" title="地板維護上蠟-2">
                    </div>
                    <div class="col-6 col-md-6 col-lg-3 py-2">
                      <img src="../assets/img/environment/1-3.jpg" class="card-img-top imgSize" alt="floor3" title="地板維護上蠟-3">
                    </div>
                    <div class="col-6 col-md-6 col-lg-3 py-2">
                      <img src="../assets/img/environment/1-4.jpg" class="card-img-top imgSize" alt="floor4" title="地板維護上蠟-4">
                    </div>
                    <div class="col-6 col-md-6 col-lg-3 py-2">
                      <img src="../assets/img/environment/1-5.jpg" class="card-img-top imgSize" alt="floor5" title="地板維護上蠟-5">
                    </div>
                    <div class="col-6 col-md-6 col-lg-3 py-2">
                      <img src="../assets/img/environment/1-6.jpg" class="card-img-top imgSize" alt="floor6" title="地板維護上蠟-6">
                    </div>
                    <div class="col-12 text-green">
                      <!-- <h4 class="text-center py-5">地板維護上蠟含樓梯</h4> -->
                        <ul class="list-group list">
                          <li class="list-group-item align-self-center"><i class="material-icons">verified_user</i>可清除髒汙</li>
                          <li class="list-group-item align-self-center"><i class="material-icons">verified_user</i>止滑增豔</li>
                          <li class="list-group-item align-self-center"><i class="material-icons">verified_user</i>防護維護</li>
                          <li class="list-group-item align-self-center"><i class="material-icons">verified_user</i>延長地板生命週期</li>
                        </ul>
                    </div>
                  </div>
                </div>
              </div>
            </b-card-text>
          </b-tab>
        </b-tabs>
      </b-card>
    </section>
  </div>
</template>
<script>
import service_picture from '../assets/img/header-1.jpg'
import Header from '../components/index/header'
export default {
  components:{
    Header
  },
  data() {
    return {
      img:service_picture,
      size: 1000
    }
  },
  computed: {
    vertical() {
      if (this.size > 992)
        return true
      return false
    }
  },
  mounted() {
    var that = this
    window.onresize = function() {
      that.size = window.innerWidth
    }
  }
}
</script>