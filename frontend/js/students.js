
const tableSection = document.getElementById("tableSection");

const openStudentsBtn = document.getElementById("openStudentsBtn");

const classSelect = document.getElementById("classSelect");

const sectionSelect = document.getElementById("sectionSelect");

const modal = document.getElementById("studentModal");

const openModalBtn = document.getElementById("openModalBtn");

const closeModalBtn = document.getElementById("closeModalBtn");

const studentForm = document.getElementById("studentForm");

// OPEN TABLE

openStudentsBtn.addEventListener("click", () => {

    const selectedClass = classSelect.value;
    const selectedSection = sectionSelect.value;

    if(selectedClass === "" || selectedSection === ""){

        alert("Please select class and section");
        return;

    }

    tableSection.style.display = "block";

});

// OPEN MODAL

openModalBtn.addEventListener("click", () => {

    modal.style.display = "flex";

});

// CLOSE MODAL

closeModalBtn.addEventListener("click", () => {

    modal.style.display = "none";

});

// CLOSE OUTSIDE

window.addEventListener("click", (e) => {

    if(e.target === modal){

        modal.style.display = "none";

    }

});

// FORM SUBMIT

studentForm.addEventListener("submit", (e) => {

    e.preventDefault();

    alert("Student Saved Successfully");

    modal.style.display = "none";

});

// EDIT BUTTONS

const editButtons = document.querySelectorAll(".edit-btn");

editButtons.forEach((button) => {

    button.addEventListener("click", (e) => {

        modal.style.display = "flex";

        const row = e.target.closest("tr");

        const cells = row.querySelectorAll("td");

        document.getElementById("studentId").value = cells[0].innerText;

        document.getElementById("firstName").value = cells[1].innerText;

        document.getElementById("lastName").value = cells[2].innerText;

        document.getElementById("age").value = cells[3].innerText;

        document.getElementById("contactNumber").value = cells[4].innerText;

        document.getElementById("bloodGroup").value = cells[5].innerText;

    });

});

// DELETE BUTTONS

const deleteButtons = document.querySelectorAll(".delete-btn");

deleteButtons.forEach((button) => {

    button.addEventListener("click", (e) => {

        const confirmDelete = confirm("Are you sure you want to delete this student?");

        if(confirmDelete){

            const row = e.target.closest("tr");

            row.remove();

        }

    });

});

// SEARCH

const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", () => {

    const value = searchInput.value.toLowerCase();

    const rows = document.querySelectorAll("tbody tr");

    rows.forEach((row) => {

        const rowText = row.innerText.toLowerCase();

        if(rowText.includes(value)){

            row.style.display = "";

        } else {

            row.style.display = "none";

        }

    });

});

// DASHBOARD

function goDashboard(){

    window.location.href = "dashboard.html";

}

