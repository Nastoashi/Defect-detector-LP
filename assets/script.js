const navbarMenu = document.getElementById('navbar');
const burgerMenu = document.getElementById('burger');
const overlayMenu = document.querySelector('.overlay');
const formPopup = document.getElementById("modal");
const formClose = document.getElementsByClassName("popup-close")[0];
var em = document.getElementById('email');
var emError = document.getElementById('error');
const submit = document.getElementById('submit');

// Show and Hide Navbar Function
const toggleMenu = () => {
	navbarMenu.classList.toggle('active');
	overlayMenu.classList.toggle('active');
};

// Fixed Resize Window Function
const resizeWindow = () => {
	if (window.innerWidth > 992) {
		if (navbarMenu.classList.contains('active')) {
			toggleMenu();
		}
		if (navbarMenu.querySelector('.menu-dropdown.active')) {
			collapseSubMenu();
		}
	}
};

// Initialize Event Listeners
burgerMenu.addEventListener('click', toggleMenu);
overlayMenu.addEventListener('click', toggleMenu);
window.addEventListener('resize', resizeWindow);

function openPopup() {
    formPopup.classList.add("show");
}

formClose.onclick = function() {
    formPopup.classList.remove("show");
}

window.onclick = function(event) {
  if (event.target == formPopup) {
    formPopup.classList.remove("show");
  }
}

function validateEmail() {
  if(!em.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
    emError.innerHTML = "Please enter a valid email";
    return false
  }
  emError.innerHTML = "";
  return true
}

submit.addEventListener('submit',(e)=>{
  e.preventDefault();
  if (validateEmail() == true) {
    let ebody = `
    <h1>Email: </h1>${em.value}
    `;

    Email.send({
        SecureToken : "b695515b-4e29-4846-b3ca-d08cbbdc752c", //add your token here
        To : 'defect.detector.landing@gmail.com', 
        From : "nastoashi.emm@gmail.com",
        Subject : "Submission from Defect detector LP",
        Body : ebody
    }).then(
      function thank() {
    document.getElementById('form-thankyou').style.display = "block";
    document.getElementById('form-submit').style.display = "none";
      }
    );
  }
});

