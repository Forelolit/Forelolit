function getPrice(price, percent) {
    if (price > 0 && (percent > 0 && percent <= 100)) {
        const discount = price * (percent / 100);
        const discountedPrice = price - discount;
        return discountedPrice;
    } else {
        console.log('Price must be higher than 0 and the discount should be from 1 to 100');
        return null;
    };
};

function capitalizeString(name) {
    if (name === String(name) && name !== '') {
        return name[0].toUpperCase() + name.slice(1).toLowerCase();
    } else {
        console.log('Need a valid non-empty string');
        return null;
    };
};

function getRatingStars(num) {
    return (num >= 1 && num <= 5) ? '★'.repeat(num) : '';
};