
function openPage(page){

    window.location.href = page;

}

// Logout Button
const logoutBtn = document.getElementById("logoutBtn");

logoutBtn.addEventListener("click", () => {

    const confirmLogout = confirm("Are you sure you want to logout?");

    if(confirmLogout){

        window.location.href = "index.html";

    }

});

