<template>
  <div>
    <footer id="footer">
      <div class="footer-top">
        <div class="container">
          <div class="row no-gutters">

            <div class="col-lg-4 col-md-6 footer-contact">
              <h4>羿鴻企業有限公司</h4>
              <p>
                台北市士林區延平北路六段176巷6弄15號1F<br>
                <strong>聯絡電話:</strong> 0932-316-595<br>
                <strong>Email:</strong> info@example.com<br>
              </p>
            </div>

            <div class="col-lg-2 col-md-6 footer-links">
              <h4>了解我們</h4>
              <ul>
                <li><i class="bx bx-chevron-right"></i><router-link to="/">首頁</router-link></li>
                <li><i class="bx bx-chevron-right"></i><router-link to="/company">關於公司</router-link></li>
                <li><i class="bx bx-chevron-right"></i><router-link to="/contact">聯絡我們</router-link></li>
                <li><i class="bx bx-chevron-right"></i><router-link to="/service">服務項目</router-link></li>
              </ul>
            </div>
            <!-- <div class="col-lg-3 col-md-6 footer-links">
              <h4>服務項目</h4>
              <div class="row">
                <div class="col-md-4 col-12"></div>
                <div class="col-md-4 col-12"></div>
                <div class="col-md-4 col-12"></div>
              </div>
            </div> -->
          </div>
        </div>
      </div>
      <div class="d-lg-flex py-4 footer-top">
        <div class="container">
          <div class="mr-lg-auto text-white text-lg-left">
            <div class="copyright text-center">
              &copy; Copyright <strong><span>yihong</span></strong>. All Rights Reserved
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>