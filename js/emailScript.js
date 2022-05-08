const fullName = document.getElementById("name");
const userEmail = document.getElementById("email");
const userMessage = document.getElementById("message");
const submitBtn = document.getElementById("submit-btn");
const formButton = document.getElementById("submit-btn");
const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const formValidate = () => {
	const name = fullName.value;
	const email = userEmail.value;
	const message = userMessage.value;

	if (name.length < 3) {
		Swal.fire({
			title: 'Error!',
			text: 'Please enter a valid name',
			icon: 'error',
			confirmButtonText: 'Okay',
			background: '#EDEEE8',
      		color: '#151515'
		});
		return false;
	}

	if(!email.match(emailRegex)) {
		Swal.fire({
		title: 'Error!',
				text: 'Please enter a valid email',
				icon: 'error',
				confirmButtonText: 'Okay',
				background: '#EDEEE8',
      			color: '#151515'
		})
		return false
	}

	if(message < 3) {
		Swal.fire({
		title: 'Error!',
				text: 'Please enter a valid message',
				icon: 'error',
				confirmButtonText: 'Okay',
				background: '#EDEEE8',
      			color: '#151515'
		})
		return false
	}
	return true
}


(function() {
	emailjs.init("user_rQF8cs4fYnfBs2O7qJ0gs");
	})();
  
function sendEmail() {
	var contactParams = {
		user_name: fullName.value,
		user_email: userEmail.value,
		message: userMessage.value
	};
	if (formValidate()) {
		emailjs.send('gmail', 'portfolio', contactParams).then(function (res) {})
		Swal.fire({
		title: 'Success!',
		text: 'Thank you for your email.',
		icon: 'success',
		confirmButtonText: 'Okay',
		background: '#EDEEE8',
      	color: '#151515'
		})
		formButton.disabled = true;
	}
}