square.addEventListener('click', check)
let counter = 0
function check(e) {
    // console.log(e);
    console.log(e.path[0].attributes[0].nodeValue);
    let click = e.path[0]
    console.log(click.nodeName);

    if (click.nodeName === 'DIV') {
        if (counter % 2 == 0) {
            nol1(click)
            counter++
        }
        else{
            cross1(click)
            counter++
        }
    }
    else {
        console.log('условие не прошло');
        e.preventDefault()
    }
}


function nol1(e) {
    let elem = e
    let nol = document.createElement('IMG')
    nol.style.width = '14em'
    nol.style.height = '14em'
    nol.src = './img/nol.png'
    elem.appendChild(nol);

}



function cross1(e) {
    let elem = e
    let cross = document.createElement('IMG')
    cross.style.width = '14em'
    cross.style.height = '14em'
    cross.src = './img/krest.png'
    elem.appendChild(cross)
}


