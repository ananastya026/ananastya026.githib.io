let getName = () => {
    let sArray = document.location.pathname.split('/');
    return sArray[sArray.length - 1].split('.')[0];
}

let replaceStr = (line, name, value, price) => {
    let array = line.split(';');
    let result = '';
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i].includes(name)) {
            result += `${name}:${value}:${price}`
        }
        else {
            result += array[i];
        }
        result += ';';
    }
    return result;
}

let btn = document.getElementsByClassName('btn-default')[0];
btn.onclick = function () {
    let name = getName();
    let price = document.getElementById('price').innerHTML;
    let count = document.getElementById('amount');
    let lastLine = sessionStorage.getItem('order');
    if (lastLine == null)
        lastLine = '';
    if (name != null && count != null && price != null) {
        count = count.value;
        if (lastLine.includes(name)) {
            sessionStorage.setItem('order', replaceStr(lastLine, name, count, price));
        } else {
            sessionStorage.setItem('order', `${lastLine}${name}:${count}:${price};`);
        }
        let div = document.getElementsByTagName('h1')[0];
        alert(`"${div.innerHTML}" добавлено в корзину`);
    }
}