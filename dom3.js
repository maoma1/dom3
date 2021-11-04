//create a r


function addRow() {
    const table = document.getElementById("myTable");
    var newRow = table.insertRow(1);
    var newCell1 = newRow.insertCell(0)
    var newCell2 = newRow.insertCell(1)
    newCell1.innerHTML = "new cell 1";
    newCell2.innerHTML = "new cell 2";
 }