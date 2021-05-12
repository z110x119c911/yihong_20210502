<template>
  <div>
    <Header :picture="img"></Header>
    <section>
      <b-card no-body>
        <h4 class="d-block d-md-none py-4 text-center mb-0 text-green font-weight-bold">其他專業服務</h4>
        <b-tabs id="#other" pills card :vertical="vertical" nav-wrapper-class="py-4 nav-wrap text-center serviceImg">
          <b-tab title-item-class="w-100" no-body title="其他專業服務" disabled>
            <template #title>
              <p class="py-3 h4 text-green font-weight-bold d-none d-md-block">其他專業服務</p>
            </template>
          </b-tab>
          <b-tab title-item-class="w-100" no-body title="石材保養服務" active>
            <b-card-text>
              <div class="text-center p-3 bg-light">
                <h2 class="py-3 text-green font-weight-bold d-none d-md-block">其他專業服務</h2>
                <p class="text-muted mb-0 mt-4">依據現場需求提供適當的專案規劃，針對專案項目提供專業的處理</p>
                <p class="text-muted mb-0">SOP標準化專案作業流程，品管督檢，服務精緻化，員工專業訓練，品質穩定度高</p>
              </div>
              <div class="my-3">
                <div class="card-body">
                  <div class="text-center">
                    <h4 class="pt-5 pb-4 border-service text-green">石材保養服務</h4>
                  </div>
                  <div class="row p-md-5 p-0">
                    <div class="col-12 text-center text-muted">
                      <p>整體性的石材病變防制及處置規劃，結果性導向、標本兼顧的養護規劃，一次提供全面性石材養護技術，
                        提升作業系統的快速執行及有效性，環保及MSDS安全性作業導向</p>
                    </div>
                    <div class="col-6 col-md-4 py-2">
                      <img src="../assets/img/rock/rock1-1.jpg" class="card-img-top imgSize" alt="石材保養服務1" title="石材保養服務">
                    </div>
                    <div class="col-6 col-md-4 py-2">
                      <img src="../assets/img/rock/rock1-2.jpg" class="card-img-top imgSize" alt="石材保養服務2" title="石材保養服務">
                    </div>
                    <div class="col-6 col-md-4 py-2">
                      <img src="../assets/img/rock/rock1-3.jpg" class="card-img-top imgSize" alt="石材保養服務3" title="石材保養服務">
                    </div>
                    <div class="col-6 col-md-4 py-2">
                      <img src="../assets/img/rock/rock2-1.jpg" class="card-img-top imgSize" alt="石材保養服務4" title="石材保養服務">
                    </div>
                    <div class="col-6 col-md-4 py-2">
                      <img src="../assets/img/rock/rock2-2.jpg" class="card-img-top imgSize" alt="石材保養服務3" title="石材保養服務">
                    </div>
                    <div class="col-6 col-md-4 py-2">
                      <img src="../assets/img/rock/rock2-3.jpg" class="card-img-top imgSize" alt="石材保養服務4" title="石材保養服務">
                    </div>
                  </div>
                </div>
              </div>
            </b-card-text>
          </b-tab>
          <b-tab title-item-class="w-100" no-body title="病蟲害環境管理服務">
            <b-card-text>
              <div class="text-center p-3 bg-light">
                <h2 class="py-3 text-green font-weight-bold d-none d-md-block">其他專業服務</h2>
                <p class="text-muted mb-0 mt-4">依據現場需求提供適當的專案規劃，針對專案項目提供專業的處理</p>
                <p class="text-muted mb-0">SOP標準化專案作業流程，品管督檢，服務精緻化，員工專業訓練，品質穩定度高</p>
              </div>
              <div class="my-3">
                <div class="card-body">
                  <div class="text-center">
                    <h4 class="pt-5 pb-4 border-service text-green">病蟲害環境管理服務</h4>
                  </div>
                  <div class="row p-md-5 p-0">
                    <div class="col-12 text-center text-muted">
                      <p>使用環保署核准之環境藥劑與器材，適當及有效的防治規劃及諮詢，有效控制及降低病蟲害的密度，
                        規劃適當藥劑使用量保護您的健康及環境
                      </p>
                    </div>

                    <div class="col-12 border-top col-md-6 py-2">
                      <img src="../assets/img/fomite/space.jpg" class="card-img-top imgSize" alt="空間噴灑" title="空間噴灑">
                    </div>
                    <div class="col-12 border-top col-md-6 py-2">
                      <h6>空間噴灑</h6>
                      <p>使用煙霧機將溶解於柴油中之藥劑，油注射熱空氣(高過於200c)之高速氣流，
                        使之汽化噴出後擬縮而成煙霧，漂浮於密閉空間中，施工後可迅速飛翔性害蟲殺死針對飛翔性害蟲。</p>
                    </div>

                    <div class="col-12 border-top col-md-6 py-2">
                      <img src="../assets/img/fomite/spray.jpg" class="card-img-top imgSize" alt="殘效噴灑" title="殘效噴灑">
                    </div>
                    <div class="col-12 border-top col-md-6 py-2">
                      <h6>殘效噴灑</h6>
                      <p>將藥劑成帶狀噴灑於牆角、細縫或害蟲可能藏匿處，施工後藥效維持長期效果，害蟲接觸有至死效果，此針對爬行性害蟲。</p>
                    </div>

                    <div class="col-12 border-top col-md-6 py-2">
                      <img src="../assets/img/fomite/gel.jpg" class="card-img-top imgSize" alt="蟑螂餌膠" title="蟑螂餌膠">
                    </div>
                    <div class="col-12 border-top col-md-6 py-2">
                      <h6>蟑螂餌膠</h6>
                      <p>使用殺蟑凝膠餌劑，針對電器用品、廚櫃抽屜.....等無法噴灑藥劑處做細部處理，以提升蟑螂防治效果。</p>
                    </div>

                    <div class="col-12 border-top col-md-6 py-2">
                      <img src="../assets/img/fomite/disen.jpg" class="card-img-top imgSize" alt="迪森防治" title="迪森防治">
                    </div>
                    <div class="col-12 border-top col-md-6 py-2">
                      <h6>迪森防治</h6>
                      <p>針對空間及區域環境噴灑消毒，施作後無須再以清水清洗即可直接使用。</p>
                    </div>

                    <div class="col-12 border-top col-md-6 py-2">
                      <img src="../assets/img/fomite/medicine.jpg" class="card-img-top imgSize" alt="藥磚法" title="藥磚法">
                    </div>
                    <div class="col-12 border-top col-md-6 py-2">
                      <h6>藥磚法</h6>
                      <p>在下水道、污水池、化糞池、水溝等投入殘效性藥磚，以殺死孑孓，防止其再孳生繁殖。</p>
                    </div>

                    <div class="col-12 border-top col-md-6 py-2">
                      <img src="../assets/img/fomite/mouse.jpg" class="card-img-top imgSize" alt="鼠害防治" title="鼠害防治">
                    </div>
                    <div class="col-12 border-top col-md-6 py-2">
                      <h6>鼠害防治</h6>
                      <p>將粘鼠板沿牆腳置於鼠隻走動之鼠徑上，老鼠通過時即被粘捕，粘鼠板中央置放香餌，其效果更佳。
                        本方法用以對付拒食毒餌或抗藥性較強之鼠隻成效極佳。
                        尤其是鼠屍容易發現，容易處理，不虞死鼠到處死而腐爛生蟲，是近年來防鼠必用的方法。</p>
                    </div>
                  </div>
                </div>
              </div>
            </b-card-text>
          </b-tab>
          <b-tab title-item-class="w-100" no-body title="外牆清洗服務">
            <b-card-text>
              <div class="text-center p-3 bg-light">
                <h2 class="py-3 text-green font-weight-bold d-none d-md-block">其他專業服務</h2>
                <p class="text-muted mb-0 mt-4">依據現場需求提供適當的專案規劃，針對專案項目提供專業的處理</p>
                <p class="text-muted mb-0">SOP標準化專案作業流程，品管督檢，服務精緻化，員工專業訓練，品質穩定度高</p>
              </div>
              <div class="my-3">
                <div class="card-body">
                  <div class="text-center">
                    <h4 class="pt-5 pb-4 border-service text-green">外牆清洗服務</h4>
                  </div>
                  <div class="row p-md-5 p-0">
                    <div class="col-12 text-center text-muted">
                      <p>規劃符合客戶需求的清洗作業，適度防護保養、降低外牆侵蝕，符合政府法規之安全施工程序
                        ，使用不傷材質的環保化學藥劑，完備及安全的工具設備</p>
                    </div>
                    <div class="col-12 col-md-6 py-2">
                      <img src="../assets/img/wall/wall-1.jpg" class="card-img-top imgSize" alt="外牆清洗服務" title="外牆清洗服務">
                    </div>
                    <div class="col-12 col-md-6 py-2">
                      <img src="../assets/img/wall/wall-2.jpg" class="card-img-top imgSize" alt="外牆清洗服務" title="外牆清洗服務">
                    </div>
                    <div class="col-12 col-md-6 py-2">
                      <img src="../assets/img/wall/wall-3.jpg" class="card-img-top imgSize" alt="外牆清洗服務" title="外牆清洗服務">
                    </div>
                  </div>
                </div>
              </div>
            </b-card-text>
          </b-tab>
          <b-tab title-item-class="w-100" no-body title="水塔清洗服務">
            <b-card-text>
              <div class="text-center p-3 bg-light">
                <h2 class="py-3 text-green font-weight-bold d-none d-md-block">其他專業服務</h2>
                <p class="text-muted mb-0 mt-4">依據現場需求提供適當的專案規劃，針對專案項目提供專業的處理</p>
                <p class="text-muted mb-0">SOP標準化專案作業流程，品管督檢，服務精緻化，員工專業訓練，品質穩定度高</p>
              </div>
              <div class="my-3">
                <div class="card-body">
                  <div class="text-center">
                    <h4 class="pt-5 pb-4 border-service text-green">水塔清洗服務</h4>
                  </div>
                  <div class="row p-md-5 p-0">
                    <div class="col-12 text-center text-muted">
                      <p>清洗前公告通知，關閉總水源開關，清洗前拍照及採取水質樣本，進行人員手工刷洗，
                        清洗後拍照及採取水質樣本，觀察進水是否順利，清洗後免費提供照片及水質檢驗報告書</p>
                    </div>
                    <div class="col-6 col-md-6 py-2">
                      <img src="../assets/img/tower/tower1-1.jpg" class="card-img-top imgSize" alt="水塔清洗服務" title="水塔清洗服務">
                    </div>
                    <div class="col-6 col-md-6 py-2">
                      <img src="../assets/img/tower/tower1-2.jpg" class="card-img-top imgSize" alt="水塔清洗服務" title="水塔清洗服務">
                    </div>
                    <div class="col-6 col-md-6 py-2">
                      <img src="../assets/img/tower/tower2-1.jpg" class="card-img-top imgSize" alt="水塔清洗服務" title="水塔清洗服務">
                    </div>
                    <div class="col-6 col-md-6 py-2">
                      <img src="../assets/img/tower/tower2-2.jpg" class="card-img-top imgSize" alt="水塔清洗服務" title="水塔清洗服務">
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
