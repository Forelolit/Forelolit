// 1. function declaration;
// function setNewYearSkin() {
//     let newYearImageUrl = '';
//     document.body.style.backgroundImage = 'url(' + newYearImageUrl + ')';
//     document.body.style.backgroundRepeat = 'no-repeat';
//     document.body.style.backgroundSize = 'cover';
// };

// 2. function expression;
// let setValentinesDaySkin = function () {
//     let imageUrl = '';
//     document.body.style.backgroundImage = 'url(' + imageUrl + ')';
//     document.body.style.backgroundRepeat = 'no-repeat';
//     document.body.style.backgroundSize = 'cover';
// };

// setNewYearSkin();
// setValentinesDaySkin();

function setSkin(theme) {
    let imageUrl
    switch (theme) {
        case 'new-year':
            imageUrl = 'https://img.freepik.com/premium-psd/png-text-calligraphy-holiday-stroke_53876-655187.jpg?semt=ais_hybrid';
            break;
        case 'valentines-day':
            imageUrl = 'https://pngimg.com/d/valentines_day_PNG39600.png';
            break;
        default:
            imageUrl = 'https://i.etsystatic.com/32237469/r/il/72bad1/4009560313/il_fullxfull.4009560313_q4ps.jpg';
    };
    setBackground(imageUrl);
    return null;
};

function setBackground(imageUrl) {
    document.body.style.backgroundImage = 'url(' + imageUrl + ')';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = '0 0';
    return null;
};

function getCashback(amount, percent) {
    let cashback = 0;
    cashback = amount * (percent / 100);
    return cashback;
};

function getMbankName(name, surname) {
    let result = name + ' ' + surname[0].toUpperCase() + '.';
    return result;
};

console.log('My mbank name: ', getMbankName('Aki', 'mol'));