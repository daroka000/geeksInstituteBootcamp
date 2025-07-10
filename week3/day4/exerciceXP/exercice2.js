//Q1
const form = document.querySelector('form');
console.log("Form:", form);
//Q2
const firstNameInput = document.getElementById('fname');
const lastNameInput = document.getElementById('lname');
console.log("First Name (by id):", firstNameInput);
console.log("Last Name (by id):", lastNameInput);
//Q3
const firstNameInput1 = document.getElementsByName('firstname')[0];
const lastNameInput1 = document.getElementsByName('lastname')[0];
console.log("First Name (by name):", firstNameInput1);
console.log("Last Name (by name):", lastNameInput1);
//Q4
form.addEventListener('submit', function (event) {
    event.preventDefault(); 
  
    const firstName = firstNameInput.value.trim();
    const lastName = lastNameInput.value.trim();
  
    if (firstName === '' || lastName === '') {
      alert('Please fill in both first and last name.');
      return;
    }
 
    const ul = document.querySelector('.usersAnswer');
    ul.innerHTML = ''; 
  
    const li1 = document.createElement('li');
    li1.textContent = firstName;
  
    const li2 = document.createElement('li');
    li2.textContent = lastName;
    ul.appendChild(li1);
    ul.appendChild(li2);
  });

