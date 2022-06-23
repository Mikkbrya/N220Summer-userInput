const sliders =
document.querySelectorAll("input[type='range']");
sliders.forEach(function(slider){
slider.addEventListener("input",calculateTip);
});
const billinput = document.getElementByld ("bill");
billinput.addEventListener("change",calculateTip);

function calculateTip(){
    let bill = parseFloat(billInput.value);
    let tipPercent =
document.getElementByld("tip").value;
    let noOfPeople =
document.getElementByld("no-of-people").value;
    billInput.value = bill.toFixed(2);
    let totalTip = parseFloat((bill *
(tipPercent/100)).toFixed(2));
    let total = parseFloat( (bill + totalTip).toFixed(2));
    let tipPerPerson = (totalTip /
noOfPeople).toFixed(2);
    let totalPerPerson = (total /
noOfPeople).toFixed(2);
    document.getElementByld("tip-amount").textContent = '\$ ${totalTip}':
    document.getElementByld("total-amount").textContent = '\$ ${total}';
    document.getElementByld("tip-percent").textContent = ${tipPercent}%';
    document.getElementByld("split.num").textContent = noOfPeople;
    document.getElementByld("tip-per-person").textContent = '\$ ${tipPerPerson}';
    document.getElementByld("total-per-person").textContent='\$ ${totalPerPerson}';
}
calculateTip():