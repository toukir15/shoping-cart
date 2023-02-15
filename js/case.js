// update case number 
function updateCaseNumber(isIncreasing) {
    const caseNumberInput = document.getElementById('case__number__input');
    const caseNumberInputString = caseNumberInput.value;
    const previousCaseInputValue = parseInt(caseNumberInputString);
    let newNumberInputValue;
    if (isIncreasing === true) {
        newNumberInputValue = previousCaseInputValue + 1;
    }
    else {
        newNumberInputValue = previousCaseInputValue - 1;
    }
    caseNumberInput.value = newNumberInputValue;
    return newNumberInputValue;
}

function updateCaseTotal(newCaseNumber) {
    const caseTotalPrice = newCaseNumber * 59;
    const caseTotal = document.getElementById('case__total');
    caseTotal.innerText = caseTotalPrice;

}

// case plus 
document.getElementById("btn__case__plus").addEventListener('click', function () {
    const newCaseNumber = updateCaseNumber(true);
    updateCaseTotal(newCaseNumber);
    calculateSubTotal();

})

// case minus 
document.getElementById('btn__case__minus').addEventListener('click', function () {
    const newCaseNumber = updateCaseNumber(false);
    updateCaseTotal(newCaseNumber);
    calculateSubTotal();
})

// update phone number 
function updatePhoneNumber(isIncreasing) {
    const phoneNumberInput = document.getElementById('phone__number__input');
    const phoneNumberInputString = phoneNumberInput.value;
    const previousPhoneNumberValue = parseInt(phoneNumberInputString);
    let newPhoneNumberInput;
    if (isIncreasing === true) {
        newPhoneNumberInput = previousPhoneNumberValue + 1;
    }
    else {
        newPhoneNumberInput = previousPhoneNumberValue - 1;
    }
    phoneNumberInput.value = newPhoneNumberInput;
    return newPhoneNumberInput;
}



// phone plus 
document.getElementById('btn__phone__plus').addEventListener('click', function () {
    const newPhoneNumber = updatePhoneNumber(true);
    updatePhonePrice(newPhoneNumber);
    calculateSubTotal();


})

// phone minus 
document.getElementById('btn__phone__minus').addEventListener('click', function () {
    const newPhoneNumber = updatePhoneNumber(false);
    updatePhonePrice(newPhoneNumber);

    updateSubTotal('phone__total');
    calculateSubTotal();
})
