<template>
  <div>
    <section id="values" class="values py-5">
			<div class="container">
				<div class="section-title">
					<!-- <h2>工作實景</h2> -->
					<p>以認真、為客戶做到至上服務</p>
				</div>
				<div class="row">
					<div class="col-md-4 d-flex align-items-stretch" v-for="(item,index) in img_Value_List" :key="index">
						<div class="card">
							<img :src="item.img" alt="">
							<div class="card-body">
								<h5 class="card-title"><a href="">Our Plan</a></h5>
								<p class="card-text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem
									doloremque laudantium, totam rem.</p>
								<div class="read-more"><a href="#"><i class="icofont-arrow-right"></i> Read More</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
  </div>
</template>
<script>
export default {
	data() {
		return {
			img_Value_List:[
        {img:require('../../assets/img/value/value-1.jpg')},
        {img:require('../../assets/img/value/value-2.jpg')},
      ],
		}
	},
}
</script>