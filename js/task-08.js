const form = document.querySelector('.login-form');

form.addEventListener('submit', validationCheck);
function validationCheck(evt) {
  evt.preventDefault();
  const { email, password } = evt.currentTarget.elements;
  if (email.value === '' || password.value === '') {
    alert('Please enter yor email and password');
  } else {
    const user = new Object();
    user.Email = email.value;
    user.Password = password.value;
    console.log(user);
    evt.currentTarget.reset();
  }
}
