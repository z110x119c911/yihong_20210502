<template>
  <div class="container-fluid py-4 bg-light d-none d-md-block">
    <div class="row">
      <div class="col-md-3 col-lg-2 p-3 d-flex justify-content-center align-self-center" v-for="(item,index) in img_Company_List" :key="index">
        <img class="" :src="item.img" width="150" alt="">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      img_Company_List:[
        {img:require('../../assets/img/company/com1.png')},
        {img:require('../../assets/img/company/com2.png')},
        {img:require('../../assets/img/company/com3.png')},
        {img:require('../../assets/img/company/com4.png')},
        {img:require('../../assets/img/company/com5.png')},
        {img:require('../../assets/img/company/com6.png')},
        {img:require('../../assets/img/company/com7.png')},
        {img:require('../../assets/img/company/com8.png')},
        {img:require('../../assets/img/company/com9.png')},
        {img:require('../../assets/img/company/com10.png')},
        {img:require('../../assets/img/company/com11.png')},
        {img:require('../../assets/img/company/com12.png')},
        {img:require('../../assets/img/company/com13.png')},
        {img:require('../../assets/img/company/com14.png')},
        {img:require('../../assets/img/company/com15.png')},
        {img:require('../../assets/img/company/com16.png')},
        {img:require('../../assets/img/company/com17.png')},
      ],
    }
  },
}
</script>