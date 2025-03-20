document.getElementById("addRow").addEventListener("click", function () {
    let table = document.getElementById("invoiceBody");
    let row = document.createElement("tr");

row.innerHTML = `
        <td><input type="text" class="service" placeholder="Xizmat nomi"></td>
        <td><input type="number" class="quantity" value="1" min="1"></td>
        <td><input type="number" class="price" value="0" min="0"></td>
        <td class="total">0</td>
        <td><button class="remove">❌</button></td>`
    ;

    table.appendChild(row);
    updateTotal();
});

document.addEventListener("input", function (e) {
    if (e.target.classList.contains("quantity") || e.target.classList.contains("price")) {
        let row = e.target.parentElement.parentElement;
        let quantity = row.querySelector(".quantity").value;
        let price = row.querySelector(".price").value;
        row.querySelector(".total").textContent = quantity * price;
        updateTotal();
    }
});

document.addEventListener("click", function (e) {
    if (e.target.classList.contains("remove")) {
        e.target.parentElement.parentElement.remove();
        updateTotal();
    }
});

function updateTotal() {
    let totals = document.querySelectorAll(".total");
    let totalAmount = 0;
    totals.forEach((total) => {
        totalAmount += parseFloat(total.textContent);
    });
    document.getElementById("totalAmount").textContent = totalAmount;
}

document.getElementById("downloadPdf").addEventListener("click", function () {
    window.print();
});