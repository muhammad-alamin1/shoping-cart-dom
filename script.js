// phone increment
function increasePhoneCount() {
    const phoneIncrementCount = document.getElementById('phone-count').value;
    const newPhoneCount = parseInt(phoneIncrementCount) + 1;
    document.getElementById('phone-count').value = newPhoneCount;

    updatePhonePrice();
}


// phone decrement
function decreasePhoneCount() {
    const phoneDecrementCount = document.getElementById('phone-count').value;
    let newPhoneCount = parseInt(phoneDecrementCount) - 1;
    if (newPhoneCount <= 0) {
        newPhoneCount = 0;

    }
    document.getElementById('phone-count').value = newPhoneCount;

    updatePhonePrice();
}


// case increment
function increaseCaseCount(){
    const caseIncrementCount = document.getElementById('case-count').value;
    const newCaseCount = parseInt(caseIncrementCount) + 1;
    document.getElementById('case-count').value = newCaseCount;

    updateCasePrice();
}


// case decrement
function decreaseCaseCount(){
    const caseDecrementCount = document.getElementById('case-count').value;
    let newCaseCount = parseInt(caseDecrementCount) - 1;
    if(newCaseCount <= 0){
        newCaseCount = 0;
        
    }
    document.getElementById('case-count').value = newCaseCount;

    updateCasePrice();
}


// update phone price
function updatePhonePrice(){
    const phoneCount = document.getElementById('phone-count').value;
    const phonePrice = parseInt(phoneCount) * 1219;
    const phonePriceElement = document.getElementById('phone-price');
    phonePriceElement.innerText =`$ ${phonePrice}`;

    updateTotalPrice();
}


// update case price
function updateCasePrice(){
    const caseCount = document.getElementById('case-count').value;
    const casePrice = parseInt(caseCount) * 59;
    const casePriceElement = document.getElementById('case-price');
    casePriceElement.innerText = `$ ${casePrice}`;

    updateTotalPrice();
}


// total update price
function updateTotalPrice(){
    const phonePrice = document.getElementById('phone-count').value;
    const casePrice = document.getElementById('case-count').value;
    const totalPrice = parseInt(phonePrice) * 1219 + parseInt(casePrice) * 59;

    const tax = parseInt(((totalPrice / 100) * 5).toFixed(4));

    const grandTotal = totalPrice + tax;


    const totalPriceElement = document.getElementById('total-price');
    const taxElement = document.getElementById('tax-amount');
    const grandTotalElement = document.getElementById('grand-total');
    totalPriceElement.innerText = `$ ${totalPrice}`;
    taxElement.innerText = `$ ${tax} (5%)`;
    grandTotalElement.innerText = `$ ${grandTotal}`;

}