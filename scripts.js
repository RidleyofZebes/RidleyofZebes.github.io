window.onscroll = function() {
  let scrollPosY = window.pageYOffset;
  let transitionPoint = window.innerHeight;

  if (scrollPosY >= transitionPoint / 4) {
    const buttons = document.getElementsByClassName("navButton");
    // console.log("activate!");
    this.document.getElementById("meBubble").className = "meBubbleTrigger";
    this.document.getElementById("slideBar").className = "slideBarTrigger";
  } else {
    this.document.getElementById("meBubble").className = "";
    this.document.getElementById("slideBar").className = "";
  }

  if (scrollPosY <= transitionPoint / 2) {
    this.document.getElementById("buttonContainer").className = "";
  }
};

// function trueName(boolean) {
//   console.log("Swap!");
//   if (boolean) {
//     document.getElementById("myName").innerHTML = "Joey Honeycutt";
//   } else {
//     document.getElementById("myName").innerHTML = "Douglas J Honeycutt";
//   }
// }

let toggle = false;
function mobileMenu() {
  const buttons = document.getElementById("buttonContainer");
  console.log(toggle);
  toggle = !toggle;
  if (toggle) {
    buttons.className = "active";
  } else {
    buttons.className = "";
  }
}

window.addEventListener("click", function(event) {
  if (!this.document.getElementById("buttonContainer").contains(event.target) && !this.document.getElementById("menuButton").contains(event.target)) {
    this.document.getElementById("buttonContainer").className = "";
  }
});
