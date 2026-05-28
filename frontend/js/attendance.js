
const tableSection = document.getElementById("tableSection");

const openAttendanceBtn = document.getElementById("openAttendanceBtn");

const classSelect = document.getElementById("classSelect");

const sectionSelect = document.getElementById("sectionSelect");

const attendanceDate = document.getElementById("attendanceDate");

// OPEN ATTENDANCE TABLE

openAttendanceBtn.addEventListener("click", () => {

    const selectedClass = classSelect.value;

    const selectedSection = sectionSelect.value;

    const selectedDate = attendanceDate.value;

    if(
        selectedClass === "" ||
        selectedSection === "" ||
        selectedDate === ""
    ){

        alert("Please select class, section and date");
        return;

    }

    tableSection.style.display = "block";

});

// SAVE ATTENDANCE

const saveAttendanceBtn = document.getElementById("saveAttendanceBtn");

saveAttendanceBtn.addEventListener("click", () => {

    alert("Attendance Saved Successfully");

});

// HISTORY SIDEBAR

const historySidebar = document.getElementById("historySidebar");

const historyBtn = document.getElementById("historyBtn");

const closeHistoryBtn = document.getElementById("closeHistoryBtn");

// OPEN SIDEBAR

historyBtn.addEventListener("click", () => {

    historySidebar.classList.add("active");

});

// CLOSE SIDEBAR

closeHistoryBtn.addEventListener("click", () => {

    historySidebar.classList.remove("active");

});

// DASHBOARD

function goDashboard(){

    window.location.href = "dashboard.html";

}

