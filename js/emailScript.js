const fullName = document.getElementById("name");
const userEmail = document.getElementById("email");
const userMessage = document.getElementById("message");
const formButton = document.getElementById("submit-btn");
const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

(function() {
	emailjs.init("user_rQF8cs4fYnfBs2O7qJ0gs");
	})();
  
function sendEmail() {
	// contact parameters is required for the emailjs.send function
	const contactParams = {
		user_name: fullName.value,
		user_email: userEmail.value,
		message: userMessage.value
	};

	if (fullName.value.length === 0) {
		Swal.fire({
			title: 'Error!',
			text: 'Please enter a valid name',
			icon: 'error',
			confirmButtonText: 'Okay',
			background: '#EDEEE8',
      		color: '#151515'
		});
		return false;
	} else if(!userEmail.value.match(emailRegex)) {
		Swal.fire({
		title: 'Error!',
				text: 'Please enter a valid email',
				icon: 'error',
				confirmButtonText: 'Okay',
				background: '#EDEEE8',
      			color: '#151515'
		})
		return false
	} else if(userMessage.value.length === 0) {
		Swal.fire({
		title: 'Error!',
				text: 'Please enter a valid message',
				icon: 'error',
				confirmButtonText: 'Okay',
				background: '#EDEEE8',
      			color: '#151515'
		})
		return false
	} else {
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
		formButton.classList.add('button-disabled-color');
		// Below uses .value because it is an input tag. If it was a button tag it would be .innerText
		formButton.value = 'Thank you!';
	}
}