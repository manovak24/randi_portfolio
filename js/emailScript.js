const fullName = document.getElementById("name");
const userEmail = document.getElementById("email");
const userMessage = document.getElementById("message");
const submitBtn = document.getElementById("submit-btn");
const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const formButton = document.getElementById("submit-btn");

const formValidate = () => {
	const name = fullName.value;
	const email = userEmail.value;
	const message = userMessage.value;

	if (name.length < 3) {
		Swal.fire({
			title: 'Error!',
			text: 'Please enter a valid name',
			icon: 'error',
			confirmButtonText: 'Okay'
		});
		return false;
	}

  if(!email.match(emailRegex)) {
    Swal.fire({
      title: 'Error!',
			text: 'Please enter a valid email',
			icon: 'error',
			confirmButtonText: 'Okay'
    })
    return false
  }

  if(message < 3) {
    Swal.fire({
      title: 'Error!',
			text: 'Please enter a valid message',
			icon: 'error',
			confirmButtonText: 'Okay'
    })
    return false
  }
  return sendEmail();
}

(function() {
	emailjs.init("user_3pb4we0Di0cM55SGSampr");
	})();

const sendEmail = () => {
	const name = fullName.value;
	const email = userEmail.value;
	const message = userMessage.value;
	var contactParams = {
		user_name: name,
		user_email: email,
		message: message
	};
	
	emailjs.send('gmail', 'template_p5d2mln', contactParams).then(function (res) {})
	Swal.fire({
		title: 'Success!',
		text: 'Thank you for your email.',
		icon: 'success',
		confirmButtonText: 'Okay',
		background: '#2a3166ef',
		color: '#F27475'
	})
	formButton.disabled = true;
}
