const cookieAcceptedKey = 'cookies-accepted';

function createNumberedColumn() {
    const numbersColumn = $('#numbers-col');

    const numberOfRows = getNumberOfRows();
    for (let i = 1; i < numberOfRows; i++) {
        const number = document.createElement('p');
        number.innerText = i;
        numbersColumn.append(number);
    }
}

function getNumberOfRows() {
    return Math.round($('.container-fluid').height()/15)
}

function acceptCookie() {
    document.cookie = cookieAcceptedKey;
}

$(document).ready(function () {
    createNumberedColumn();

    if (!document.cookie.includes(cookieAcceptedKey)) {
        $('.toast').toast('show')
    }

    $('.toast').on('hidden.bs.toast', acceptCookie);
});

$(window).resize(function () {
    $('#numbers-col').empty();
    createNumberedColumn()
});


