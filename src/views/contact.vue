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
							<p>support@yihong-clean.com</p>
						</div>
					</div>
					<div class="col-xl-3 col-lg-4 mt-4">
						<div class="info-box h-100">
							<i class="bx bx-phone-call"></i>
							<h3>聯絡我們</h3>
							<p>0932-316-595<br></p>
						</div>
					</div>
				</div>

				<div class="row justify-content-center">
					<div class="col-xl-9 col-lg-12 mt-4">
						<form class="php-email-form" @submit.prevent="sendEmail">
							<div class="form-row">
								<div class="col-md-6 form-group">
									<input type="text" v-model="name" name="name" class="form-control" id="name" placeholder="姓名" required />
								</div>
								<div class="col-md-6 form-group">
									<input type="email" v-model="email" class="form-control" name="email" id="email" placeholder="E-mail" required />
								</div>
							</div>
							<div class="form-group">
								<input type="text" class="form-control" name="subject" id="subject" placeholder="標題" required />
							</div>
							<div class="form-group">
								<textarea class="form-control" v-model="message" name="message" rows="5" placeholder="Message" required></textarea>
							</div>
							<div class="text-center"><button type="submit">送出</button></div>
						</form>
					</div>
				</div>
			</div>
		</section>
  </div>
</template>
<script>
import emailjs from 'emailjs-com';
export default {
	data() {
		return {
			name: '',
			email:'',
			message:''
		}
	},
	methods: {
    sendEmail(){
			const templateParams = {
				user:this.name,
				userEmail:this.email,
				userContent: '<h2>成功收信<h2>'
			}
			emailjs.send('service_eini648','template_5x4u05z',templateParams,'user_UUrmqEOi6G5WYBekLqBeU')
			.then(()=>{
				alert('已經收到您的回覆，盡快回覆您')
			})
			.catch(()=>{
				alert('傳送錯誤')
			})
		}
  }
}
</script>