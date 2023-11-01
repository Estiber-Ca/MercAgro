document.getElementById("loginButton").addEventListener("click", function () {
  document.getElementById("loginPopup").style.display = "block";
  document.getElementById("blurBackground").style.display = "block";
});

document.getElementById("closeLoginPopup").addEventListener("click", function () {
  document.getElementById("loginPopup").style.display = "none";
  document.getElementById("blurBackground").style.display = "none";
});

document.getElementById("registroButton").addEventListener("click", function () {
  document.getElementById("registroPopup").style.display = "block";
  document.getElementById("blurBackground").style.display = "block";
});

document.getElementById("closeRegistroPopup").addEventListener("click", function () {
  document.getElementById("registroPopup").style.display = "none";
  document.getElementById("blurBackground").style.display = "none";
});

document.getElementById("menuIcon").addEventListener("click", function () {
  document.querySelector(".nav-links").classList.toggle("show-links");
  document.getElementById("blurBackground").style.display = "block";
});

document.getElementById("blurBackground").addEventListener("click", function () {
  document.querySelector(".nav-links").classList.remove("show-links");
  document.getElementById("blurBackground").style.display = "none";
});
