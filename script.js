  // Main Factory Function:-
  function handleFlightNumbers(flightRate, isIncrease) {
    const flightInput = document.getElementById(flightRate + '-ticket-count');
    const flightCount = parseInt(flightInput.value);
    let flightNewCount = flightCount;
    if (isIncrease == true) {
        flightNewCount = flightCount + 1;
    }
    if (isIncrease == false && flightCount > 0) {
        flightNewCount = flightCount - 1;
    }
    flightInput.value = flightNewCount;
    totalFlightCalculate()
};

// Calculate Total Function:-
function totalFlightCalculate() {
    const firstClassTicketCount = getInputValue('vip');
    const economyTicketCount = getInputValue('economy');

    const totalPrice = firstClassTicketCount * 150 + economyTicketCount * 100;
    document.getElementById('sub-total').innerText = '$' + totalPrice;

    const tax = Math.round(totalPrice * 0.1);
    document.getElementById('tax-amount').innerText = '$' + tax;

    const grandTotal = totalPrice + tax;
    document.getElementById('grand-total').innerText = '$' + grandTotal;
};

// Get Input Value function:- 
function getInputValue(flightRate) {
    const flightInput = document.getElementById(flightRate + '-ticket-count');
    const flightCount = parseInt(flightInput.value);
    return flightCount;
}
