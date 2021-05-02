<template>
	<section id="portfolio" class="portfolio section-bg py-5">
		<div class="container">
			<div class="section-title">
				<h2>Portfolio</h2>
				<p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid
					fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui
					impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
			</div>

			<div class="row">
				<div class="col-lg-12 d-flex justify-content-center">
					<ul id="portfolio-flters">
						<li data-filter="*" class="filter-active">All</li>
						<li data-filter=".filter-app">App</li>
						<li data-filter=".filter-card">Card</li>
						<li data-filter=".filter-web">Web</li>
					</ul>
				</div>
			</div>

			<div class="row portfolio-container">
				<div class="col-lg-4 col-md-6 portfolio-item filter-app">
					<img src="images/portfolio/portfolio-1.jpg" class="img-fluid" alt="">
					<div class="portfolio-info">
						<h4>App 1</h4>
						<p>App</p>
						<a href="images/portfolio/portfolio-1.jpg" data-gall="portfolioGallery" class="venobox preview-link"
							title="App 1"><i class="bx bx-plus"></i></a>
						<a href="portfolio-details.html" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	data() {
		return {
			portfolioImg:{
				
			},
			
		}
	},
}
</script>