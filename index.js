const portfolioContent = document.getElementById("portfolioContent");
const skills = document.getElementById("skills");
const skillsTab = document.getElementById("skillsTab");
const portfolioTab = document.getElementById("portfolioTab");

skillsTab.addEventListener("click", event=> {
    skills.style.display = "flex"
    portfolioContent.style.display = "none"
})

portfolioTab.addEventListener("click", event=> {
    portfolioContent.style.display = "grid"
    skills.style.display = "none"
})