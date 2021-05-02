<template>
  <div>
    <section id="about" class="about">
			<div class="container">
				<div class="row py-5">
					<div class="col-xl-5 col-lg-6 align-self-center">
						<img class="img-fluid" :src="about" alt="">
					</div>
					<div class="col-xl-7 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5">
						<h3 class="">關於我們</h3>
						<h4>以親切服務客戶，滿足客戶需求</h4>
						<h4>有效溝通，達到最大效益</h4>
						<div class="icon-box about_box_bg">
							<div class="icon"><i class="material-icons">opacity</i></div>
							<h4 class="title">專業清潔</h4>
							<p class="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias
								excepturi sint occaecati cupiditate non provident</p>
						</div>

						<div class="icon-box about_box_bg">
							<div class="icon"><i class="material-icons">search</i></div>
							<h4 class="title">細節處理</h4>
							<p class="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui
								blanditiis praesentium voluptatum deleniti atque</p>
						</div>

						<div class="icon-box about_box_bg">
							<div class="icon"><i class="material-icons">bubble_chart</i></div>
							<h4 class="title">消毒防疫</h4>
							<p class="description">Explicabo est voluptatum asperiores consequatur magnam. Et veritatis
								odit. Sunt aut deserunt minus aut eligendi omnis</p>
						</div>

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
import about_img from '../../assets/img/why_us.jpg'
export default {
	data() {
		return {
			about:about_img
		}
	},
}
</script>