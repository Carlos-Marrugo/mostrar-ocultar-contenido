const aboutMeButton = document.getElementById("about-me-button");
const myWorkButton = document.getElementById("my-work-button");
const backButton = document.getElementById("back-button");
const aboutMeContent = document.getElementById("about-me-content");
const myWorkContent = document.getElementById("my-work-content");
const contentDiv = document.getElementById("content");

aboutMeButton.addEventListener("click", () => {
  contentDiv.style.display = "block";
  aboutMeContent.style.display = "block";
  myWorkContent.style.display = "none";
  backButton.style.display = "block";
});

myWorkButton.addEventListener("click", () => {
  contentDiv.style.display = "block";
  aboutMeContent.style.display = "none";
  myWorkContent.style.display = "block";
  backButton.style.display = "block";
});

backButton.addEventListener("click", () => {
  contentDiv.style.display = "none";
});