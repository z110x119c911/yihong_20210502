(function () {
	window.addEventListener('load', function () {
		// Fetch all the forms we want to apply custom Bootstrap validation styles to
		var forms = document.getElementsByClassName('needs-validation');
		// Loop over them and prevent submission
		var validation = Array.prototype.filter.call(forms, function (form) {
			form.addEventListener('submit', function (event) {
				if (form.checkValidity() === false) {
					event.preventDefault();
					event.stopPropagation();
				}
				form.classList.add('was-validated');
			}, false);
		});
	}, false);
})();

function sendEmail(){
	var Name = document.getElementById('Cus_Name').value;
	var Phone = document.getElementById('Cus_Phone').value;
	var mail = document.getElementById('Cus_Email').value;
	var Main = document.getElementById('Cus_main').value;
	var Content = document.getElementById('Cus_text').value;
	var space = '<br>';
	if((Name,Phone,mail,Main,Content) != ''){
		Email.send({
			SecureToken: "b44d0219-cc9d-4bae-8d92-f9c592c01930",
			To: 'james840525@gmail.com',
			From: `${mail}`,
			Subject: `${Main}`,
			Body: `姓名：${Name}${space}
							電話：${Phone}${space}
							信箱：${mail}${space}
							內容：${Content}			
				`
		}).then(
			alert('已送出，盡快為您回覆')
		);
	}
}