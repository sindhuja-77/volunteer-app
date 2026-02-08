let volunteer = {};

function login() {
  window.location.href = 'contact.html';
}

function saveContact() {
  volunteer.name = document.getElementById('name').value;
  volunteer.email = document.getElementById('email').value;
  volunteer.contact = document.getElementById('contact').value;
  volunteer.dob = document.getElementById('dob').value;

  localStorage.setItem('volunteer', JSON.stringify(volunteer));
  window.location.href = 'other-details.html';
}

function submitDetails() {
  volunteer = JSON.parse(localStorage.getItem('volunteer'));

  volunteer.location = document.getElementById('location').value;

  volunteer.languages = [...document.querySelectorAll('.lang:checked')]
    .map(cb => cb.value);

  volunteer.availability = [...document.querySelectorAll('.day:checked')]
    .map(cb => cb.value);

  fetch('https://volunteer-app-7.onrender.com/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(volunteer)
  })
  .then(() => alert('Registration Successful'));
}

