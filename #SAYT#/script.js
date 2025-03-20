document.getElementById("addRow").addEventListener("click", function () {
    let table = document.getElementById("invoiceBody");
    let row = document.createElement("tr");

row.innerHTML = `
<td>
<input type="text" class="item" placeholder="Xizmat">
</td>
<td>
<input type="number" class="quantity" placeholder="Miqdor">
</td>
<td>
<input type="number" class="price" placeholder="Narx">
</td>
<td>
<span class="total">0</span>
</td>
<td>
<button class="remove">Remove</button>
</td>
`;

table.appendChild(row);
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