

document.getElementById("menuIcon").addEventListener("click", function () {
  document.querySelector(".nav-links").classList.toggle("show-links");
  document.getElementById("blurBackground").style.display = "block";
});

document.getElementById("blurBackground").addEventListener("click", function () {
  document.querySelector(".nav-links").classList.remove("show-links");
  document.getElementById("blurBackground").style.display = "none";
});
