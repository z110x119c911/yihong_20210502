<template>
  <div>
    <section id="services" class="services section-bg serviceImg">
			<div class="container">
				<div class="section-title py-5">
					<h2>服務項目</h2>
				</div>
				<div class="row pb-5">
					<div class="col-lg-4 col-md-6" v-for="item in service" :key="item.id">
						<div class="icon-box">
							<div class="icon"><i class="material-icons">lightbulb_outline</i></div>
							<h4 class="title"><a href="">{{ item.name }}</a></h4>
							<p class="description">{{ item.describtion }}</p>
						</div>
					</div>
				</div>
			</div>
		</section>
  </div>
</template>
<style lang="scss" scoped>
	.serviceImg{
		background-image: url('~@/assets/img/img-1.jpeg');
		background-position: center center;
	}
	.icon-box{
		border-radius: 8%;
	}
</style>
<script>
export default {
	data() {
		return {
			service:[
				{
					name:'環境管理服務',
					describtion:'提供辦公室、大樓、房務、廠辦細清清潔服務'
				},
				{
					name:'環境清潔專案服務',
					describtion:'提供地板維護上蠟(含樓梯)、地毯清洗、沙發及椅子清洗，電話消毒服務'
				},
				{
					name:'外牆清洗服務',
					describtion:'str'
				},
				{
					name:'水塔清洗服務',
					describtion:'str'
				},
				{
					name:'病蟲害環境管理服務',
					describtion:'str'
				},
				// {
				// 	name:'環境管理服務',
				// },
			],
			img_person_List:[
        {img:require('../../assets/img/company/com1.png')},
        {img:require('../../assets/img/company/com2.png')},
      ],
		}
	},
}
</script>