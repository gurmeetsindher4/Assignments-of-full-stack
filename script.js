const toggleBtn = document.getElementById("toggleBtn");
const body = document.body;

// Load saved theme
if(localStorage.getItem("theme") === "dark"){
    body.classList.add("dark");
}

// Toggle dark mode
toggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark");

    if(body.classList.contains("dark")){
        localStorage.setItem("theme","dark");
    } else{
        localStorage.setItem("theme","light");
    }
});