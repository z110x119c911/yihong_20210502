<template>
  <div>
    <section id="why-us" class="why-us">
			<div class="container">
				<div class="row py-5">
					<div class="col-md-4">
						<img class="img-fluid" :src="whyUs" alt="">
					</div>
					<div class="col-md-8">
						<div class="icon-boxes">
							<div class="row">
								<div class="col-md-4">
									<div class="icon-box mt-4 mt-xl-0">
										<div class="icon">
											<font-awesome-icon icon="check"></font-awesome-icon>
										</div>
										<h4>專業清掃</h4>
										<p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut
											aliquip</p>
									</div>
								</div>
								<div class="col-md-4">
									<div class="icon-box mt-4 mt-xl-0">
										<div class="icon">
											<font-awesome-icon icon="check"></font-awesome-icon>
										</div>
										
										<h4>細節處理</h4>
										<p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
											deserunt</p>
									</div>
								</div>
								<div class="col-md-4">
									<div class="icon-box mt-4 mt-xl-0">
										<div class="icon">
											<font-awesome-icon icon="check"></font-awesome-icon>
										</div>
										<h4>環境收善</h4>
										<p>Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis
											facere</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
  </div>
</template>

<style lang="scss" scoped>
	
</style>

<script>
import whyUs_img from '../../assets/img/why_us.jpg'
export default {
	data() {
		return {
			whyUs: whyUs_img,
		}
	},
}
</script>
