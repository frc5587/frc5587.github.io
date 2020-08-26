//= require simplebar
// Get the collapsible portion of the navbar and collapse button
var collapsibleRegion = document.getElementById("header");
var collapseButton = document.getElementsByClassName("navbar-toggle")[0];

// Modal components
var modal = document.getElementById("sponsor-modal"); // Sponsorship modal
//var btn = document.getElementById("supportBtn"); // Button that opens the modal
var sponsorshipButtons = [document.getElementById("supportBtn"), document.getElementById("indexBtn")]
var span = document.getElementsByClassName("close")[0]; // <span> element that closes the modal

function closeModal() {
  modal.style.display = "none";
}

function openModal() {
  // Check to ensure that the navbar is closed; otherwise, close it
  if ($(collapsibleRegion).attr("aria-expanded")) {
    $(collapseButton).click();
  }
  // Now open the modal
  modal.style.display = "flex";
}

// When the user clicks the button, open the modal
function toggleModal(btn){
    modal.style.display == "flex" ? closeModal() : openModal();
}

// for (let btn of sponsorshipButtons) {
//   btn.onclick = () => {
//     modal.style.display == "flex" ? closeModal() : openModal();
// };
// When the user clicks on <span> (x), close the modal
span.onclick = () => {
  closeModal();
};
// When the user clicks anywhere outside of the modal, close it
window.onclick = event => {
  if (event.target == modal) {
    closeModal();
  }
};

function toggleHeader() {
  var classes = collapsibleRegion.classList
  if (!classes.contains("collapsing")) {
    if (classes.contains("collapsed")) {
      classes.add("show")
      classes.add("collapsing")

      classes.remove("collapsed")
    } else {
      classes.add("collapsed")
      classes.add("collapsing")

      classes.remove("show")
    }
    setTimeout(() => classes.remove("collapsing"), 295)
  }
}
