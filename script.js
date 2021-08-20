square.addEventListener('click', check)
let counter = 0
function check(e) {
    console.log('click');
    let click = e.path[0]
    console.log(click.nodeName);

    if (click.nodeName === 'DIV') {
        nol1(click)
    }
    else {
        console.log('условие не прошло');
        e.preventDefault()
    }
}


function nol1(e) {
    let elem = e
    // if (!elem.firstChild) {
    let nol = document.createElement('IMG')
    nol.style.width = '14em'
    nol.style.height = '14em'
    nol.src = './img/nol.png'
    elem.appendChild(nol);
    // console.log('X');
    // square.removeEventListener('click', nol1)
    // square.addEventListener('click', cross1)
    // }
    // else {
    //     console.log('return x');
    //     return
    // }
}



function cross1(e) {
    let elem = e
    // if (!elem.firstChild) {
    let cross = document.createElement('IMG')
    cross.style.width = '14em'
    cross.style.height = '14em'
    cross.src = './img/krest.png'
    elem.appendChild(cross)
    // console.log('0');
    //     square.removeEventListener('click', cross1)
    //     square.addEventListener('click', nol1)
    // }
    // else {
    //     console.log('return 0');
    //     return
    // }
}
