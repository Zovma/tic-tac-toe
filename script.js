// let zero = document.getElementById('zero')
// let one = document.getElementById('one')
// let two = document.getElementById('two')
// let three = document.getElementById('three')
// let four = document.getElementById('four')
// let five = document.getElementById('five')
// let six = document.getElementById('six')
// let seven = document.getElementById('seven')
// let eight = document.getElementById('eight')
// let square = document.getElementById('square')
// zero.addEventListener('click', nol1)
// one.addEventListener('click', nol1)
// .addEventListener('click', nol1)
// one.addEventListener('click', nol1)
// one.addEventListener('click', nol1)
// one.addEventListener('click', nol1)
// one.addEventListener('click', nol1)
// one.addEventListener('click', nol1)
// one.addEventListener('click', nol1)
square.addEventListener('click', nol1)

function nol1(e) {
    let nol = document.createElement('IMG')
    nol.style.width = '14em'
    nol.style.height = '14em'
    nol.src = './img/nol.png'
    let elem = e.path[0]
    elem.appendChild(nol);
    console.log(e.path[0]);
    square.removeEventListener('click', nol1)
    square.addEventListener('click', cross1)
    console.log('+');
}

function cross1 (e) {
    let cross = document.createElement('IMG')
    cross.style.width = '14em'
    cross.style.height = '14em'
    cross.src = './img/krest.png'
    let elem = e.path[0]
    elem.appendChild(cross)
    console.log(e.path[0])
    square.removeEventListener('click', cross1)
    square.addEventListener('click', nol1)

}


// zero.addEventListener('mouseout',
//     img_x)
// zero.addEventListener("mouseout", function (e) {
//     img_x(), false
// })


// function img(e) {
//     let nol = document.createElement('IMG')
//     nol.style.width = '14em'
//     nol.style.height = '14em'
//     nol.src = './img/nol.png'
//     zero.appendChild(nol);
//     console.log('+');
//     zero.removeEventListener("mouseover",
//         img)
// // }


// function img_x() {
//     while (zero.firstChild) {
//         zero.removeChild(zero.firstChild);
//         console.log('-')
//         zero.addEventListener("mouseover",
//             img)
//     }
// }


