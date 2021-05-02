<template>
  <div>
    <section>
			<img class="w-100 headerImg" :src="picture" :alt="description" :title="title">
		</section>
  </div>
</template>

<style lang="scss" scoped>
	.headerImg{
		height: 400px;
	}
</style>

<script>
export default {
	props:{
		picture: String,
		title: String,
		description: String
	},
	data() {
		return {

		}
	},
}
</script>
