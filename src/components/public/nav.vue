<template>
  <div>
    <section id="topbar">
      <div class="container d-flex">
        <div class="contact-info mr-auto">
          <ul class="d-none d-md-block">
            <li><i class="icofont-envelope"></i><a href="mailto:contact@example.com">support@yihong-clean.com</a>
            </li>
            <li><i class="icofont-phone"></i> 0932-316-595</li>
            <li><i class="icofont-clock-time icofont-flip-horizontal"></i> AM 9:00 - PM 20:00</li>
          </ul>
					<ul class="d-block d-md-none">
            <li><i class="icofont-envelope"></i><a href="mailto:contact@example.com">support@yihong-clean.com</a>
            </li>
            <li class="d-none"><i class="icofont-phone"></i> 0932-316-595</li>
            <li><i class="icofont-clock-time icofont-flip-horizontal"></i> AM 9:00 - PM 20:00</li>
          </ul>
        </div>
      </div>
	  </section>
    <header id="header" class="position-relative py-0">
			<div class="container d-flex h-100">
				<div class="logo mr-auto align-self-center">
					<h1 class="text-light py-0">
						<router-link class="h5 py-0" to="/"><img class="logo" :src="Logo" alt="羿鴻企業有限公司"></router-link>
						<!-- 羿鴻企業有限公司 -->
					</h1>
				</div>
				<!-- mobile menu -->
				<Slide class="d-md-none" right>
					<router-link class="text-brown" to="/company">關於公司</router-link>
					<router-link class="text-brown" to="/service">環境管理服務</router-link>
					<router-link class="text-brown" to="/specialize">環境清潔專案服務</router-link>
					<router-link class="text-brown" to="/project">其他專業服務</router-link>
					<router-link class="text-brown" to="/contact">聯絡我們</router-link>
				</Slide>
				<!-- PC -->
				<nav class="nav-menu d-none d-md-block">
					<ul class="d-flex">
						<li><router-link class="py-4" to="/">首頁</router-link></li>
						<li><router-link class="py-4" to="/company">關於公司</router-link></li>
						<li class="drop-down">
							<router-link class="py-4" to="">服務項目</router-link>
							<ul>
								<li class="drop-down dropdown">
									<router-link to="/service">環境管理服務</router-link>
								</li>
								<li class="drop-down">
									<router-link to="/specialize">環境清潔專案服務</router-link>
								</li>
								<li class="drop-down">
									<router-link to="/project">其他專業服務</router-link>
								</li>
							</ul>
						</li>
						<li><router-link class="py-4" to="/contact">聯絡我們</router-link></li>
					</ul>
				</nav>
			</div>
		</header>
  </div>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100&family=Shippori+Mincho+B1&display=swap');
.nav-menu .drop-down > a:after{
	content: none;
}
</style>


<script>
// import $ from 'jquery'
import { Slide } from 'vue-burger-menu'
import Logo from '../../assets/img/logo2.png'
export default {
	components:{
		Slide
	},
	data() {
		return {
			Logo:Logo
		}
	},
  methods: {
		close(){
			
		}
	},
}
</script>