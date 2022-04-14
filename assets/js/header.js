//= require simplebar
// Get the collapsible portion of the navbar and collapse button
var collapsibleRegion = document.getElementById("header");
var collapseButton = document.getElementsByClassName("navbar-toggle")[0];

// Modal components
var sponsorModal = document.getElementById("sponsor-modal"); // Sponsorship modal
var worldsModal = document.getElementById("worlds-modal"); // Worlds modal
//var btn = document.getElementById("supportBtn"); // Button that opens the modal
var sponsorshipButtons = [document.getElementById("supportBtn"), document.getElementById("indexBtn")]

var span = document.getElementById("sponsor-close"); // <span> element that closes the modal
var worldsCloseSpan = document.getElementById("worlds-close");

function closeSponsorModal() {
  console.log("closed sponsor");
  sponsorModal.style.display = "none";
}
function closeWorldsModal() {
  console.log("closed worlds");
  worldsModal.style.display = "none";
}

function openSponsorModal() {
  // Check to ensure that the navbar is closed; otherwise, close it
  if ($(collapsibleRegion).attr("aria-expanded")) {
    $(collapseButton).click();
  }
  // Now open the modal
  sponsorModal.style.display = "flex";
}
function openWorldsModal() {
  // Check to ensure that the navbar is closed; otherwise, close it
  if ($(collapsibleRegion).attr("aria-expanded")) {
    $(collapseButton).click();
  }
  // Now open the modal
  worldsModal.style.display = "flex";
}

// When the user clicks the button, open the modal
function toggleSponsorModal(btn){
  sponsorModal.style.display == "flex" ? closeSponsorModal() : openSponsorModal();
}
function toggleWorldsModal(btn){
  worldsModal.style.display == "flex" ? closeWorldsModal() : openWorldsModal();
}

// for (let btn of sponsorshipButtons) {
//   btn.onclick = () => {
//     modal.style.display == "flex" ? closeModal() : openModal();
// };
// When the user clicks on <span> (x), close the modal
span.onclick = () => {
  console.log("CLICKED SPONSOR")
  closeSponsorModal();
};
worldsCloseSpan.onclick = () => {
  console.log("CLICKED WORLDS")
  closeWorldsModal();
};

/*
* removed clicking outside of boxes while there are two
*/
// // When the user clicks anywhere outside of the modal, close it
// window.onclick = event => {
//   if (event.target == modal) {
//     closeSponsorModal();
//   }
// };

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
