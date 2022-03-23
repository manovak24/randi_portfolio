const formValidate = () => {
	let fullName = document.getElementById("name").value;
	let userEmail = document.getElementById("email").value;
	let userMessage = document.getElementById("message").value;
	const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

	console.log(userMessage);
};


formValidate();