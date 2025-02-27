document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    window.location.href = "dashboard.html";
});
function searchCrop() {
    let condition = document.getElementById("searchBar").value;
    document.getElementById("cropResult").innerText = "Suggested Crop: Wheat";
}

