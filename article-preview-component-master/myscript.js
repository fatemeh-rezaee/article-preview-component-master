document.getElementById("button").addEventListener("click", function () {
  // First ---->
  document.querySelector(".share").style.display = "flex";

  // Second ---->
  document.getElementById("buttonclose").style.display = "inline-block";

  // Third ---->
  document.getElementById("button").style.display = "none";

  // console.log("hellooooo");
  // init();
});

document.getElementById("buttonclose").addEventListener("click", function () {
  document.querySelector(".share").style.display = "none";
  document.getElementById("buttonclose").style.display = "none";
  document.getElementById("button").style.display = "inline-block";
});
// document.getElementById("buttoncloseone").addEventListener("click", close);
