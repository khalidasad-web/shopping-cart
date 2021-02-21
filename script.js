function updateItems(itemQty, itemPrice) {
    let tempPrice = document.getElementById(itemPrice).innerText.split('$');
    tempPrice.shift();
    const unitPrice = parseFloat(tempPrice);
    let currentItemQty = parseInt(document.getElementById(itemQty).value);
    console.log(unitPrice, currentItemQty);

}

document.getElementById('phone-minus').addEventListener('click', function (event) {
    updateItems('phone-qty', 'unit-price-phone');
})
document.getElementById('phone-plus').addEventListener('click', function (event) {

})