let toggle = false;
window.onscroll = function() {
  let scrollPosY = window.pageYOffset;
  let transitionPoint = window.innerHeight;

  if (scrollPosY >= transitionPoint / 4) {
    // console.log("activate!");
    this.resetMenu();
  } else {
    this.resetMenu(true);
  }

  if (scrollPosY <= transitionPoint / 2) {
    this.document.getElementById("navButtons").className = "";
    toggle = !toggle;
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

function showMenu() {
  this.document.getElementById("meBubble").className =
    "meBubbleTrigger menuTrigger";
  this.document.getElementById("navButtons").className = "menuTrigger";
  this.document.getElementById("slideBar").className =
    "slideBarTrigger menuTrigger";
}

function resetMenu(hideMenu) {
  this.document.getElementById("navButtons").className = "";
  this.document.getElementById("slideBar").className = "slideBarTrigger";
  this.document.getElementById("meBubble").className = "meBubbleTrigger";
  toggle = false;

  if (hideMenu) {
    this.document.getElementById("slideBar").className = "";
    this.document.getElementById("meBubble").className = "";
  }
}

function mobileMenu() {
  toggle = !toggle;
  if (toggle) {
    showMenu();
  } else {
    resetMenu();
  }
}

window.addEventListener("click", function(event) {
  if (
    !this.document.getElementById("navButtons").contains(event.target) &&
    !this.document.getElementById("menuButton").contains(event.target) &&
    !this.document.getElementById("meBubble").contains(event.target)
  ) {
    resetMenu();
    toggle = false;
  }
});
