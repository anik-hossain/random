const selector = (selector) => {
    return document.querySelector(selector);
};

const sliders = document.querySelectorAll('input[type="range"]');

// Displaying calculation
const output = (
    total,
    totalTip,
    tipPercent,
    noOfPeople,
    tipPerPerson,
    totalPerPerson
) => {
    selector('#total-amount').textContent = `\$ ${total}`;
    selector('#tip-amount').textContent = `\$ ${totalTip}`;

    selector('#tip-percent').textContent = `${tipPercent}%`;
    selector('#split-num').textContent = noOfPeople;

    selector('#tip-per-person').textContent = `\$ ${tipPerPerson}`;
    selector('#total-per-person').textContent = `\$ ${totalPerPerson}`;
};

// Calculation
const calculateTip = () => {
    let bill = parseFloat(billInput.value);
    let tipPercent = selector('#tip').value;
    let noOfPeople = selector('#no-of-people').value;

    billInput.value = bill.toFixed(2);

    let totalTip = parseFloat((bill * (tipPercent / 100)).toFixed(2));
    let total = parseFloat((bill + totalTip).toFixed(2));
    let tipPerPerson = (totalTip / noOfPeople).toFixed(2);
    let totalPerPerson = (total / noOfPeople).toFixed(2);

    output(
        total,
        totalTip,
        tipPercent,
        noOfPeople,
        tipPerPerson,
        totalPerPerson
    );
};

sliders.forEach((slider) => {
    slider.addEventListener('input', calculateTip);
});

const billInput = selector('#bill');
billInput.addEventListener('change', calculateTip);

calculateTip();
