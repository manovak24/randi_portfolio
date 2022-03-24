const fullName = document.getElementById("name").value;
const userEmail = document.getElementById("email").value;
const userMessage = document.getElementById("message").value;
const submitBtn = document.getElementById("submit-btn");
const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const formValidate = () => {
	if (fullName.length < 1) {
		Swal.fire({
			title: 'Error!',
			text: 'Please enter a valid name',
			icon: 'error',
			confirmButtonText: 'Okay'
		})
		return false;
	}
}

function sendEmail() {
	formValidate();
}