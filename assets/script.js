const navbarMenu = document.getElementById('navbar');
const burgerMenu = document.getElementById('burger');
const overlayMenu = document.querySelector('.overlay');
const formPopup = document.getElementById("modal");
const formClose = document.getElementsByClassName("popup-close")[0];
const em = document.getElementById('email');
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
    formPopup.style.display = "block";
}

formClose.onclick = function() {
    formPopup.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == formPopup) {
    formPopup.style.display = "none";
  }
}

submit.addEventListener('submit',(e)=>{
    e.preventDefault();
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
});
