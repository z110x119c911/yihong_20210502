<template>
  <div>
    <Header :picture="img"></Header>
    <section>
      <b-card no-body>
        <h4 class="d-block d-md-none py-4 text-center mb-0 text-green font-weight-bold">專業服務項目</h4>
        <b-tabs pills card :vertical="vertical" nav-wrapper-class="py-4 nav-wrap text-center serviceImg">
          <b-tab no-body title="專業服務項目" disabled>
            <template #title>
              <p class="py-3 h4 text-green font-weight-bold d-none d-md-block">專業服務項目</p>
            </template>
          </b-tab>
          <b-tab no-body title="地板維護上蠟含樓梯" active>
            <b-card-text>
              <div class="card my-3">
                <div class="card-body">
                  <div class="text-center">
                    <h4 class="pt-5 pb-4 border-service text-green">地板維護上蠟含樓梯</h4>
                  </div>
                  <div class="row p-md-5 p-0">
                    <div class="col-6 col-md-6 col-lg-3 py-2">
                      <img src="../assets/img/specialize/floor1-1.jpg" class="card-img-top imgSize" alt="floor1" title="地板維護上蠟-1">
                    </div>
                    <div class="col-6 col-md-6 col-lg-3 py-2">
                      <img src="../assets/img/specialize/floor1-2.jpg" class="card-img-top imgSize" alt="floor2" title="地板維護上蠟-2">
                    </div>
                    <div class="col-6 col-md-6 col-lg-3 py-2">
                      <img src="../assets/img/specialize/floor2-1.jpg" class="card-img-top imgSize" alt="floor3" title="地板維護上蠟-3">
                    </div>
                    <div class="col-6 col-md-6 col-lg-3 py-2">
                      <img src="../assets/img/specialize/floor2-2.jpg" class="card-img-top imgSize" alt="floor4" title="地板維護上蠟-4">
                    </div>
                    <div class="col-6 col-md-6 col-lg-3 py-2">
                      <img src="../assets/img/specialize/floor3-1.jpg" class="card-img-top imgSize" alt="floor5" title="地板維護上蠟-5">
                    </div>
                    <div class="col-6 col-md-6 col-lg-3 py-2">
                      <img src="../assets/img/specialize/floor3-2.jpg" class="card-img-top imgSize" alt="floor6" title="地板維護上蠟-6">
                    </div>
                    <div class="col-6 col-md-6 col-lg-3 py-2">
                      <img src="../assets/img/specialize/floor4-1.jpg" class="card-img-top imgSize" alt="floor7" title="地板維護上蠟-7">
                    </div>
                    <div class="col-6 col-md-6 col-lg-3 py-2">
                      <img src="../assets/img/specialize/floor4-2.jpg" class="card-img-top imgSize" alt="floor8" title="地板維護上蠟-8">
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
          <b-tab no-body title="沙發及椅子清洗">
            <b-card-text>
              <div class="card my-3">
                <div class="card-body">
                  <div class="text-center">
                    <h4 class="pt-5 pb-4 border-service text-green">沙發及椅子清洗</h4>
                  </div>
                  <div class="row p-md-5 p-0">
                    <div class="col-6 col-md-6 col-lg-3 py-2">
                      <img src="../assets/img/specialize/sofa1-1.jpg" class="card-img-top imgSize" alt="sofa1" title="沙發及椅子清洗-1">
                    </div>
                    <div class="col-6 col-md-6 col-lg-3 py-2">
                      <img src="../assets/img/specialize/sofa1-2.jpg" class="card-img-top imgSize" alt="sofa2" title="沙發及椅子清洗-2">
                    </div>
                    <div class="col-6 col-md-6 col-lg-3 py-2">
                      <img src="../assets/img/specialize/sofa1-3.jpg" class="card-img-top imgSize" alt="sofa3" title="沙發及椅子清洗-3">
                    </div>
                    <div class="col-6 col-md-6 col-lg-3 py-2">
                      <img src="../assets/img/specialize/sofa1-4.jpg" class="card-img-top imgSize" alt="sofa4" title="沙發及椅子清洗-4">
                    </div>
                    <div class="col-6 col-md-6 col-lg-3 py-2">
                      <img src="../assets/img/specialize/sofa2-1.jpg" class="card-img-top imgSize" alt="sofa5" title="沙發及椅子清洗-5">
                    </div>
                    <div class="col-6 col-md-6 col-lg-3 py-2">
                      <img src="../assets/img/specialize/sofa2-2.jpg" class="card-img-top imgSize" alt="sofa6" title="沙發及椅子清洗-6">
                    </div>
                    <div class="col-12 text-green">
                      <!-- <h4 class="text-center py-5">沙發及椅子清洗</h4> -->
                        <ul class="list-group list">
                          <li class="list-group-item align-self-center"><i class="material-icons">verified_user</i>可清除髒汙</li>
                          <li class="list-group-item align-self-center"><i class="material-icons">verified_user</i>除塵蟎抗菌</li>
                          <li class="list-group-item align-self-center"><i class="material-icons">verified_user</i>保持表面乾淨</li>
                        </ul>
                    </div>
                  </div>
                </div>
              </div>
            </b-card-text>
          </b-tab>
          <b-tab no-body title="地毯清洗">
            <b-card-text>
              <div class="card my-3">
                <div class="card-body">
                  <div class="text-center">
                    <h4 class="pt-5 pb-4 border-service text-green">地毯清洗</h4>
                  </div>
                  <div class="row p-md-5 p-0">
                    <div class="col-6 col-md-6 py-2">
                      <img src="../assets/img/specialize/carpet1-1.jpg" class="card-img-top imgSize" alt="carpet1" title="地毯清洗-1">
                    </div>
                    <div class="col-6 col-md-6 py-2">
                      <img src="../assets/img/specialize/carpet1-2.jpg" class="card-img-top imgSize" alt="carpet2" title="地毯清洗-2">
                    </div>
                    <div class="col-6 col-md-6 py-2">
                      <img src="../assets/img/specialize/carpet2-1.jpg" class="card-img-top imgSize" alt="carpet3" title="地毯清洗-3">
                    </div>
                    <div class="col-6 col-md-6 py-2">
                      <img src="../assets/img/specialize/carpet2-2.jpg" class="card-img-top imgSize" alt="carpet4" title="地毯清洗-4">
                    </div>
                    <div class="col-6 col-md-6 py-2">
                      <img src="../assets/img/specialize/carpet3-1.jpg" class="card-img-top imgSize" alt="carpet5" title="地毯清洗-5">
                    </div>
                    <div class="col-6 col-md-6 py-2">
                      <img src="../assets/img/specialize/carpet3-2.jpg" class="card-img-top imgSize" alt="carpet6" title="地毯清洗-6">
                    </div>
                    <div class="col-12 text-green">
                      <!-- <h4 class="text-center py-5">沙發及椅子清洗</h4> -->
                        <ul class="list-group list">
                          <li class="list-group-item align-self-center"><i class="material-icons">verified_user</i>可清除髒汙</li>
                          <li class="list-group-item align-self-center"><i class="material-icons">verified_user</i>消除異味</li>
                          <li class="list-group-item align-self-center"><i class="material-icons">verified_user</i>除塵蟎抗菌</li>
                          <li class="list-group-item align-self-center"><i class="material-icons">verified_user</i>延長地毯使用壽命</li>
                        </ul>
                    </div>
                  </div>
                </div>
              </div>
            </b-card-text>
          </b-tab>
          <b-tab no-body title="電話消毒">
            <b-card-text>
              <div class="card my-3">
                <div class="card-body">
                  <div class="text-center">
                    <h4 class="pt-5 pb-4 border-service text-green">電話消毒</h4>
                  </div>
                  <div class="row p-md-5 p-0">
                    <div class="col-6 col-md-6 py-2">
                      <img src="../assets/img/specialize/phone-1.jpg" class="card-img-top imgSize" alt="phone1" title="電話消毒-1">
                    </div>
                    <div class="col-6 col-md-6 py-2">
                      <img src="../assets/img/specialize/phone-2.jpg" class="card-img-top imgSize" alt="phone2" title="電話消毒-2">
                    </div>
                    <div class="col-6 col-md-6 py-2">
                      <img src="../assets/img/specialize/phone-3.jpg" class="card-img-top imgSize" alt="phone3" title="電話消毒-3">
                    </div>
                    <div class="col-12 text-green">
                      <!-- <h4 class="text-center py-5">沙發及椅子清洗</h4> -->
                        <ul class="list-group list">
                          <li class="list-group-item align-self-center"><i class="material-icons">verified_user</i>電話是我們最親密的朋友，但忙碌的生活卻忽略了細菌就滋生在我們最常接觸的話機中，定期電話清潔消毒可避免我們的健康產生傷害</li>
                        </ul>
                    </div>
                  </div>
                </div>
              </div>
            </b-card-text>
          </b-tab>
          <b-tab no-body title="石材保養服務">
            <b-card-text>
              <div class="card my-3">
                <div class="card-body">
                  <div class="text-center">
                    <h4 class="pt-5 pb-4 border-service text-green">石材保養服務</h4>
                  </div>
                  <div class="row p-md-5 p-0">
                    <div class="col-6 col-md-6 py-2">
                      <img src="../assets/img/specialize/rock-1.jpg" class="card-img-top imgSize" alt="carpet1" title="石材保養服務-1">
                    </div>
                    <div class="col-6 col-md-6 py-2">
                      <img src="../assets/img/specialize/rock-2.jpg" class="card-img-top imgSize" alt="carpet2" title="石材保養服務-2">
                    </div>
                    <div class="col-12 text-green">
                      <!-- <h4 class="text-center py-5">沙發及椅子清洗</h4> -->
                        <ul class="list-group list">
                          <li class="list-group-item align-self-center"><i class="material-icons">verified_user</i>整體性的石材病變防制及處置規劃</li>
                          <li class="list-group-item align-self-center"><i class="material-icons">verified_user</i>結果性導向、標本兼顧的養護規劃</li>
                          <li class="list-group-item align-self-center"><i class="material-icons">verified_user</i>一次提供全面性石材養護技術</li>
                          <li class="list-group-item align-self-center"><i class="material-icons">verified_user</i>提升作業系統的快速執行及有效性</li>
                          <li class="list-group-item align-self-center"><i class="material-icons">verified_user</i>環保及MSDS安全性作業導向</li>
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
<style lang="scss">
  .border-service{
    border-bottom: 2px solid #000;
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
    var vm = this
    window.onresize = function() {
      vm.size = window.innerWidth
    }
  }
}
</script>