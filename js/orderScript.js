const fullName = document.getElementById('name');
const email = document.getElementById('email');
const address = document.getElementById('address');
const city = document.getElementById('city');
const state = document.getElementById('state');
const zip = document.getElementById('zip');
const bookSelection = document.querySelectorAll('.book-selection');
const submitButton = document.getElementById('submit-btn');
const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


(function() {
	emailjs.init("user_rQF8cs4fYnfBs2O7qJ0gs");
	})();

const handleSubmit = () => {
    // inlcuding the below .forEach() to make the checkbox field scalable to account for more books in the future
    let book = [];
    bookSelection.forEach(bookOption => {
        if(bookOption.checked) {
            book.push(bookOption.id)
        }
    })

    let bookString = book.join(', ');
    
    // These contact params are the dynamic variables that will be submitted in the emailjs function and linked in the backend set up of the email template for email js via {{ param }}
    const params = {
        fullName: fullName.value,
        email: email.value,
        address: address.value,
        city: city.value,
        state: state.value,
        zip: zip.value,
        bookSelection: bookString
    }

    if(!fullName.value) {
        Swal.fire({
			title: 'Error!',
			text: 'Please enter a name',
			icon: 'error',
			confirmButtonText: 'Okay',
			background: '#EDEEE8',
      		color: '#151515'
		})

    } else if(!email.value.match(emailRegex)) {
        Swal.fire({
            title: 'Error!',
			text: 'Please enter a email',
			icon: 'error',
			confirmButtonText: 'Okay',
			background: '#EDEEE8',
			color: '#151515'
		})

    } else if (!address.value) {
        Swal.fire({
            title: 'Error!',
			text: 'Please enter an address',
			icon: 'error',
			confirmButtonText: 'Okay',
			background: '#EDEEE8',
			color: '#151515'
		})

    } else if (!city.value) {
        Swal.fire({
            title: 'Error!',
			text: 'Please enter a city',
			icon: 'error',
			confirmButtonText: 'Okay',
			background: '#EDEEE8',
			color: '#151515'
		})

    } else if(!state.value) {
        Swal.fire({
            title: 'Error!',
			text: 'Please select a state',
			icon: 'error',
			confirmButtonText: 'Okay',
			background: '#EDEEE8',
			color: '#151515'
		})

    } else if(zip.value.length !== 5 || !zip.value.match("^[0-9]+$")) {
        Swal.fire({
            title: 'Error!',
			text: 'Please enter a 5 digit zip code',
			icon: 'error',
			confirmButtonText: 'Okay',
			background: '#EDEEE8',
			color: '#151515'
		})

    } else if(!document.querySelector('input[type=checkbox]:checked')) {
        Swal.fire({
            title: 'Error!',
			text: 'Please select a book from list',
			icon: 'error',
			confirmButtonText: 'Okay',
			background: '#EDEEE8',
			color: '#151515'
		})

    } else {
        // console.log(params);
        emailjs.send('gmail', 'template_CUJlAxj2', params).then(function (res) {});
        Swal.fire({
			title: 'Success!',
			text: 'Thank you for your submission.',
			icon: 'success',
			confirmButtonText: 'Okay',
			background: '#EDEEE8',
      		color: '#151515'
		})
        submitButton.disabled = true;
        submitButton.classList.add('button-disabled-color');
        submitButton.value = 'Thank you!'
    }
}