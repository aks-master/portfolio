document.getElementById("changeTheme").addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.innerText === "Dark Mode") {
    event.target.innerText = "Light Mode";
    //apply dark mode theme
    document.documentElement.setAttribute("data-bs-theme", "dark");
  } else {
    event.target.innerText = "Dark Mode";
    //apply light mode theme
    document.documentElement.setAttribute("data-bs-theme", "light");
  }
});