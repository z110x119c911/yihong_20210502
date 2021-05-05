<template>
  <div class="swiper-container">
      <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item,index) in img_Company_List" :key="index"><img :src="item.img" width="200" alt=""></div>
      </div>
  </div>
</template>
<style>
    html,
    body {
      position: relative;
      height: 100%;
    }

    body {
      background: #eee;
      font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
      font-size: 14px;
      color: #000;
      margin: 0;
      padding: 0;
    }

    .swiper-container {
      width: 100%;
      height: 100%;
    }

    .swiper-slide {
      text-align: center;
      font-size: 18px;
      background: #fff;

      /* Center slide text vertically */
      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;
    }

    @media (max-width: 760px) {
      .swiper-button-next {
        right: 20px;
        transform: rotate(90deg);
      }

      .swiper-button-prev {
        left: 20px;
        transform: rotate(90deg);
      }
    }
  </style>
<script>
import Swiper, {Autoplay, Navigation, Pagination } from 'swiper'
import 'swiper/swiper-bundle.css'

Swiper.use([ Navigation, Pagination ,Autoplay])

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
  mounted() {
    new Swiper('.swiper-container', {
      loop: true,
      slidesPerView: 4,
      autoplay:{
        delay: 2000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
      }
    })
  }
}
</script>

<style scoped>
.swiper-container {
  width: 100%;
  height: 300px;
}
</style>