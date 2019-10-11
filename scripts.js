window.onscroll = function() {
  let scrollPosY = window.pageYOffset;
  let transitionPoint = window.innerHeight;

  if (scrollPosY >= transitionPoint / 2) {
    // console.log("activate!");
    this.document.getElementById("meBubble").className = "meBubbleTrigger";
    this.document.getElementById("slideBar").className = "slideBarTrigger";
  } else {
    this.document.getElementById("meBubble").className = "";
    this.document.getElementById("slideBar").className = "";
  }
};
