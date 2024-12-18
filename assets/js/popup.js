var popup = document.getElementById("popup-modal");
var span = document.getElementsByClassName("close")[1]; // <span> element that closes the modal

function closePopup() {
    popup.style.display = "none";
}

// When the user clicks on <span> (x), close the modal
span.onclick = () => {
    closePopup();
  };
// When the user clicks anywhere outside of the modal, close it
window.onclick = event => {
    if (event.target == popup) {
        closePopup();
    }
};