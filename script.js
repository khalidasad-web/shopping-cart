const unitPricePhone = 1219;
const unitPriceCase = 59;

function updateItems(itemQty, itemPriceTag, itemPrice, action) {
    let currentPrice = itemPrice;
    let currentItemQty = parseInt(document.getElementById(itemQty).value);
    switch (action) {
        case 'minus':
            if (currentItemQty > 1) {
                currentItemQty--;
                currentPrice = currentItemQty * currentPrice;
            } else {
                console.log('Minimum quatity reached', currentItemQty);
            }
            break;
        case 'plus':
            currentItemQty++;
            currentPrice = currentItemQty * currentPrice;
            break;
    }
    document.getElementById(itemQty).value = currentItemQty;
    document.getElementById(itemPriceTag).innerText = '$' + currentPrice;
    updateTotal();
}
function updateTotal() {
    let temp = document.getElementById('price-phone').innerText.split('$');
    temp.shift();
    const pricePhone = parseFloat(temp);
    temp = document.getElementById('price-case').innerText.split('$');
    temp.shift();
    const priceCase = parseFloat(temp);
    temp = document.getElementById('tax').innerText.split('$');
    temp.shift();
    const taxTotal = parseFloat(temp);

    document.getElementById('subtotal').innerText = '$' + (pricePhone + priceCase);
    document.getElementById('total').innerText = '$' + (pricePhone + priceCase + taxTotal);
}

document.getElementById('phone-minus').addEventListener('click', function (event) {
    updateItems('phone-qty', 'price-phone', unitPricePhone, 'minus');
})
document.getElementById('phone-plus').addEventListener('click', function (event) {
    updateItems('phone-qty', 'price-phone', unitPricePhone, 'plus');
})
document.getElementById('case-minus').addEventListener('click', function (event) {
    updateItems('case-qty', 'price-case', unitPriceCase, 'minus');
})
document.getElementById('case-plus').addEventListener('click', function (event) {
    updateItems('case-qty', 'price-case', unitPriceCase, 'plus');
})