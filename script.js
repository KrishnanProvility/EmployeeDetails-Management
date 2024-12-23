function HideTheTable() {
    const table = document.querySelector(".head-table");
    const form = document.querySelector(".hidenForm");

    table.style.display = "none";
    form.style.display = "block";
}

function retriveTable(event)
{
    event.preventDefault();
    const empName = document.getElementById("empName").value;
    const department = document.querySelector("select[name='department']").value;
    const email = document.getElementById("email").value;
    const contact = document.getElementById("contact").value;
    const address = document.getElementById("address").value;
    const salary = document.getElementById("salary").value;

    const tableBody = document.querySelector(".table tbody");

    const newRow = document.createElement("tr");
    newRow.innerHTML = `
        <td>${Math.floor(Math.random() * 1000)}</td>
        <td>${empName}</td>
        <td>${department}</td>
        <td>${email}</td>
        <td>${contact}</td>
        <td>${address}</td>
        <td>${salary}</td>
        <td><button onclick= "editTable(this)">Edit</button> <button onclick="deleteData(this)">Delete</button></td>`;

    tableBody.appendChild(newRow);

    document.getElementById("empName").value = '';
    document.getElementById("email").value = '';
    document.getElementById("contact").value = '';
    document.getElementById("address").value = '';
    document.getElementById("salary").value = '';
    document.querySelector("select[name='department']").selectedIndex = 0;

    const table = document.querySelector(".head-table");
    const form = document.querySelector(".hidenForm");
    const noData =document.querySelector(".noData")

    table.style.display = "block";
    form.style.display = "none";
    noData.style.display = "none";
}

function editTable(button) {
    const row = button.closest("tr");
    const cells = row.querySelectorAll("td");

    const id = cells[0].textContent;
    const empName = cells[1].textContent;
    const department = cells[2].textContent;
    const email = cells[3].textContent;
    const contact = cells[4].textContent;
    const address = cells[5].textContent;
    const salary = cells[6].textContent;

    
    document.getElementById("empName").value = empName;
    document.querySelector("select[name='department']").value = department;
    document.getElementById("email").value = email;
    document.getElementById("contact").value = contact;
    document.getElementById("address").value = address;
    document.getElementById("salary").value = salary;

    
    const table = document.querySelector(".head-table");
    const form = document.querySelector(".hidenForm");

    table.style.display = "none";
    form.style.display = "block";

  
    form.onsubmit = function (event) {
        event.preventDefault();

        cells[1].textContent = document.getElementById("empName").value;
        cells[2].textContent = document.querySelector("select[name='department']").value;
        cells[3].textContent = document.getElementById("email").value.trim();
        cells[4].textContent = document.getElementById("contact").value.trim();
        cells[5].textContent = document.getElementById("address").value.trim();
        cells[6].textContent = document.getElementById("salary").value.trim();
        form.reset();
        table.style.display = "block";
        form.style.display = "none";
    };
}










