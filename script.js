
    const priceCells = document.querySelectorAll('.prices');
const totalPriceCell = document.querySelector('#grandTotal');

function calculateTotalPrice() {
  let totalPrice = 0;

  priceCells.forEach((cell) => {
    totalPrice += parseFloat(cell.textContent);
  });

  totalPriceCell.textContent = totalPrice.toFixed(2);
}

calculateTotalPrice();

priceCells.forEach((cell) => {
  cell.addEventListener('input', calculateTotalPrice);
});