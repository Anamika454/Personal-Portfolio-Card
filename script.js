// Select the Dark Mode Button
const themeBtn = document.getElementById("themeBtn");

// Dark Mode Functionality
themeBtn.addEventListener("click", function () {

document.body.classList.toggle("dark-mode");

// Change Button Text
if (document.body.classList.contains("dark-mode")) {
    themeBtn.textContent = "Light Mode";
} else {
    themeBtn.textContent = "Dark Mode";
}

});