<template>
  <div>
    <section id="contact" class="contact section-bg py-5">
			<div class="section-title text-green px-3">
				<h2 class="d-none d-md-block">聯絡我們</h2>
				<h4 class="d-block d-md-none">聯絡我們</h4>
				<p>若有其他問題，以及報價細節需求，歡迎填寫表單聯絡我們。</p>
			</div>
			<div class="container bg-white">
				<div class="row justify-content-center">
					<div class="col-xl-3 col-lg-4 mt-4">
						<div class="info-box h-100">
							<i class="bx bx-map"></i>
							<h3>地址</h3>
							<p>台北市士林區延平北路六段176巷6弄15號1F</p>
						</div>
					</div>

					<div class="col-xl-3 col-lg-4 mt-4">
						<div class="info-box h-100">
							<i class="bx bx-envelope"></i>
							<h3>Email</h3>
							<p>info@example.com<br>contact@example.com</p>
						</div>
					</div>
					<div class="col-xl-3 col-lg-4 mt-4">
						<div class="info-box h-100">
							<i class="bx bx-phone-call"></i>
							<h3>聯絡我們</h3>
							<p>+886 932-316-595<br></p>
						</div>
					</div>
				</div>

				<div class="row justify-content-center">
					<div class="col-xl-9 col-lg-12 mt-4">
						<form action="forms/contact.php" method="post" role="form" class="php-email-form">
							<div class="form-row">
								<div class="col-md-6 form-group">
									<input type="text" name="name" class="form-control" id="name" placeholder="Your Name"
										data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
									<div class="validate"></div>
								</div>
								<div class="col-md-6 form-group">
									<input type="email" class="form-control" name="email" id="email" placeholder="Your Email"
										data-rule="email" data-msg="Please enter a valid email" />
									<div class="validate"></div>
								</div>
							</div>
							<div class="form-group">
								<input type="text" class="form-control" name="subject" id="subject" placeholder="Subject"
									data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
								<div class="validate"></div>
							</div>
							<div class="form-group">
								<textarea class="form-control" name="message" rows="5" data-rule="required"
									data-msg="Please write something for us" placeholder="Message"></textarea>
								<div class="validate"></div>
							</div>
							<div class="mb-3">
								<div class="loading">Loading</div>
								<div class="error-message"></div>
								<div class="sent-message">Your message has been sent. Thank you!</div>
							</div>
							<div class="text-center"><button type="submit">送出</button></div>
						</form>
					</div>
				</div>
			</div>
		</section>
  </div>
</template>