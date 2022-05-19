let basis = document.getElementById('basis');
let schnittpunkt = document.getElementById('schnittpunkt');
let davor = document.getElementById('davor');
let danach = document.getElementById('danach');
let vordererTeil = document.getElementById('vordererTeil');
let hintererTeil = document.getElementById('hintererTeil');

let trennen = () => {
    // console.log(basis.value);
    let basisArray = basis.value.split(' ');
    // console.log(basisArray);
    let schnittpunktIndex = basisArray.indexOf(schnittpunkt.value);
    // console.log(schnittpunktIndex);

    if (schnittpunktIndex >= 0) {
        schnittpunkt.setCustomValidity('');

        if (davor.checked) {

            let vT = basisArray.slice(0, schnittpunktIndex);
            let vTend = vT.join(' ');
            // console.log(vTend);
            let hT = basisArray.slice(schnittpunktIndex);
            let hTend = hT.join(' ');
            // console.log(hTend);

            vordererTeil.innerHTML = vTend;
            hintererTeil.innerHTML = hTend;
        }

        else if (danach.checked) {
            let schnittpunktIndexDanach = Number(schnittpunktIndex) + 1;

            let vTdanach = basisArray.slice(0, schnittpunktIndexDanach);
            let vTendDanach = vTdanach.join(' ');
            // console.log(vTendDanach);
            let hTdanach = basisArray.slice(schnittpunktIndexDanach);
            let hTendDanach = hTdanach.join(' ');
            // console.log(hTendDanach);

            vordererTeil.innerHTML = vTendDanach;
            hintererTeil.innerHTML = hTendDanach;
        }
    }

    else {
        schnittpunkt.setCustomValidity('Bitte trage ein Wort ein, dass auch im Satz enthalten ist.');
    }
}

let loeschen = () => {
    basis.value = '';
    schnittpunkt.value = '';
    danach.checked = false;
    davor.checked = false;
    vordererTeil.innerHTML = '';
    hintererTeil.innerHTML = '';
    schnittpunkt.setCustomValidity('');
}