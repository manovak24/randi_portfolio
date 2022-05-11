const fullName = document.getElementById('name');
const email = document.getElementById('email');
const address = document.getElementById('address');
const city = document.getElementById('city');
const state = document.getElementById('state');
const zip = document.getElementById('zip');
const bookSelection = document.querySelectorAll('.book-selection');

const handleSubmit = () => {
    //inlcuding the below .forEach() to make the checkbox field scalable to account for more books in the future
    let book = [];
    bookSelection.forEach(bookOption => {
        if(bookOption.checked) {
            book.push(bookOption.id)
        }
    })
    
    const params = {
        fullName: fullName.value,
        email: email.value,
        address: address.value,
        city: city.value,
        state: state.value,
        zip: zip.value,
        bookSelection: book
    }

    console.log(params)
}