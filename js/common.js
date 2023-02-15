// update phone price
function updatePhonePrice(newPhoneNumber) {
    const phonePrice = newPhoneNumber * 1219;
    const phoneTotalElement = document.getElementById('phone__total');
    phoneTotalElement.innerText = phonePrice;
}

function updateSubTotal(elementId) {
    const elementTotal = document.getElementById(elementId);
    const elementTotalString = elementTotal.innerText;
    const elementTotalValue = parseInt(elementTotalString);
    return elementTotalValue;
}

function textElementTotal(elementId, value) {
    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText = value;
}
function calculateSubTotal() {
    const currentPhoneTotal = updateSubTotal('phone__total');
    const currentCaseTotal = updateSubTotal('case__total');

    const currentSubTotal = currentPhoneTotal + currentCaseTotal;
    textElementTotal('sub__total', currentSubTotal);

    // tax amount 
    const taxAmountString = (currentSubTotal * 0.1).toFixed(2);
    const taxAmount = parseFloat(taxAmountString);

    textElementTotal('tax__amount', taxAmount);

    // total amount 
    const totalAmount = currentSubTotal + taxAmount;
    textElementTotal('total__amount', totalAmount);

}