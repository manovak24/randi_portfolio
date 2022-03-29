const fullName = document.getElementById("name");
const userEmail = document.getElementById("email");
const userMessage = document.getElementById("message");
const submitBtn = document.getElementById("submit-btn");
const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

// function to validate form but this might be changing to function for the entire form submit function
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

  return true
}
