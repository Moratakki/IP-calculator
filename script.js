
function square(){
    let answer = '';
    let a = +document.getElementById('A').value;
    let b = +document.getElementById('B').value;
    let c = +document.getElementById('C').value;
    let D = b**2 - 4 * a * c;
    if (D < 0) {
        answer = "Корней нет";
    } else if (D == 0) {
        answer = `x = ${-b/(2*a)}`
    } else {
        x1 = (( -b + Math.sqrt(D) ) / ( 2 * a ));
        x2 = (( -b - Math.sqrt(D) ) / ( 2 * a ));
        answer = `x1 = ${x1}, x2 = ${x2}`;
    }
    let x = document.getElementById('korni');
    x.innerHTML = answer;
}

function calculate(){
    let sum = +form.money.value;
    let stavka = +form.stavka.value / 100;
    document.getElementById("mon-before").innerHTML = sum;
    let years = +form.months.value/12;
    console.log(years);
    let result = Math.round(sum * (1 + stavka) ** years);
    document.getElementById("mon-after").innerHTML = result;
    let gistHeight = ( result / sum ) * 100;
    document.getElementById("gist").style.height = `${gistHeight}px`;
}

let form = document.forms.calculator;
form.money.onchange = calculate;
form.months.onchange = calculate;
form.stavka.onchange = calculate;