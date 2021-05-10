<template>
  <div>
    <section id="about" class="about">
			<div class="container">
				<div class="row no-gutters py-5">
					<div class="col-xl-5 col-lg-6 text-center align-self-center">
						<img class="img-fluid about-imgSize" :src="about" alt="">
					</div>
					<div class="col-xl-7 col-lg-6 px-4 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5">
						<h3 class="">關於我們</h3>
						<h4>以親切服務客戶，滿足客戶需求</h4>
						<h4>有效溝通，達到最大效益</h4>
						<router-link class="btn btn-outline-info btn-sm w-25" to="/company">了解更多</router-link>
					</div>
				</div>
			</div>
		</section>
  </div>
</template>

<style lang="scss" scoped>
	.about_box_bg{
		padding: 0px 10px;
		// border: 1px solid #000000;
		// border-radius: 10px;
	}
</style>

<script>
import about_img from '../../assets/img/member/member1.jpg'
export default {
	data() {
		return {
			about:about_img
		}
	},
}
</script>