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
							<h4 class="title text-green">
								{{ item.name }}
							</h4>
							<p class="description">{{ item.describtion }}</p>
							<router-link class="btn btn-sm btn-outline-info" :to="{path:item.link}">了解更多</router-link>
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
					describtion:'提供辦公室、大樓、房務、廠辦細清清潔服務',
					link:'/service'
				},
				{
					name:'環境清潔專案服務',
					describtion:'地板、樓梯清洗上腊、地毯清洗、沙發及椅子清洗，電話消毒服務',
					link:'/specialize'
				},
				{
					name:'石材保養服務',
					describtion:'整體性的石材病變防制及處置規劃，環保及MSDS安全性作業導向',
					link:'/project'
				},
				{
					name:'病蟲害環境管理服務',
					describtion:'有效控制及降低病蟲害的密度，規劃適當藥劑使用量保護您的健康及環境',
					link:'/project'
				},
				{
					name:'外牆清洗服務',
					describtion:'規劃符合客戶需求的清洗作業，適度防護保養、降低外牆侵蝕',
					link:'/project'
				},
				{
					name:'水塔清洗服務',
					describtion:'採取水質樣本，觀察進水是否順利，清洗後免費提供照片及水質檢驗報告書',
					link:'/project'
				},
			],
			img_person_List:[
        {img:require('../../assets/img/company/com1.png')},
        {img:require('../../assets/img/company/com2.png')},
      ],
		}
	},
}
</script>