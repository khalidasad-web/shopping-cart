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
}

document.getElementById('phone-minus').addEventListener('click', function (event) {
    const unitPricePhone = 1219;
    updateItems('phone-qty', 'price-phone', unitPricePhone, 'minus');

})
document.getElementById('phone-plus').addEventListener('click', function (event) {
    const unitPricePhone = 1219;
    updateItems('phone-qty', 'price-phone', unitPricePhone, 'plus');
})
document.getElementById('case-minus').addEventListener('click', function (event) {
    const unitPriceCase = 59;
    updateItems('case-qty', 'price-case', unitPriceCase, 'minus');

})
document.getElementById('case-plus').addEventListener('click', function (event) {
    const unitPriceCase = 59;
    updateItems('case-qty', 'price-case', unitPriceCase, 'plus');
})