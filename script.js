let array0 = []
let arrayX = []
let counter = 0

let winO = 0
let winX = 0

let arrayWin = ["one", "two", "zero"]
let arrayWin1 = ["five", "four", "three"]
let arrayWin2 = ["eight", "seven", "six"]
let arrayWin3 = ["six", "three", "zero"]
let arrayWin4 = ["four", "one", "seven"]
let arrayWin5 = ["eight", "five", "two"]
let arrayWin6 = ["eight", "four", "zero"]
let arrayWin7 = ["four", "six", "two"]
let arrayWin8 = ["tree", "four", "five"]

let generalArrayWin = [
    arrayWin,
    arrayWin1,
    arrayWin2,
    arrayWin3,
    arrayWin4,
    arrayWin5,
    arrayWin6,
    arrayWin7,
    arrayWin8,
]

square.addEventListener('click', check)
btn.addEventListener('click', nextGame)

function check(e) {
    let click = e.path[0]

    if (click.nodeName === 'DIV') {
        if (counter % 2 == 0) {
            nol1(click)
            let param = e.path[0].attributes[0].nodeValue
            console.log(param);
            array0.push(param)
            let example = []
            let example2 = []
            counterFnc()

            for (let i = 0; i < generalArrayWin.length; i++) {



                for (let z = 0; z < generalArrayWin[i].length; z++) {
                    example.push(array0.includes(generalArrayWin[i][z], 0))
                    example2.push(generalArrayWin[i][z])
                }


                if (example.join() == ('true,true,true')) {
                    redBorder(example2)
                    winO++
                    document.getElementById('winO').childNodes[3].innerHTML = winO
                    document.getElementById('winO').childNodes[5].innerHTML = 'Победа нулей!'

                    // document.getElementById('winO').childNodes[5].innerHTML = 'Победа нулей!'
                    console.log(example2);
                    console.log(example.join());
                    console.log('Совпадение найдено, Победа нулей')
                    square.removeEventListener('click', check)
                }
                // console.log(example)
                example = []
                example2 = []

            }

        }
        else {
            cross1(click)
            let param = e.path[0].attributes[0].nodeValue
            console.log(param);
            arrayX.push(param)
            let example = []
            let example2 = []
            counterFnc()

            for (let i = 0; i < generalArrayWin.length; i++) {



                for (let z = 0; z < generalArrayWin[i].length; z++) {
                    example.push(arrayX.includes(generalArrayWin[i][z], 0))
                    example2.push(generalArrayWin[i][z])
                }

                if (example.join() == ('true,true,true')) {
                    winX++
                    document.getElementById('winX').childNodes[3].innerHTML = winX
                    document.getElementById('winX').childNodes[5].innerHTML = 'Победа крестов!'
                    redBorder(example2)
                    console.log(example2);
                    console.log(example.join());
                    console.log('Совпадение найдено, Победа Крестов')
                    square.removeEventListener('click', check)
                }
                // console.log(example)
                example = []
                example2 = []
            }

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

function counterFnc() {
    counter++
    if (counter == 9) {
        console.log("Ничья, игра закончена");
        alert('Ничья, игра закончена')
    }
}

function redBorder(param) {
    for (let i = 0; i < param.length; i++)
        document.getElementById(param[i]).style.border = "2px solid red"
}

function nextGame() {
    let arrayWithAllId = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight']
    for (let i = 0; i < arrayWithAllId.length; i++) {
        document.getElementById(arrayWithAllId[i]).innerHTML = ''
    }
    document.getElementById('zero').style.borderRight = '2px solid black'
    document.getElementById('zero').style.borderLeft = ''
    document.getElementById('zero').style.borderTop = ''
    document.getElementById('zero').style.borderBottom = '2px solid black'

    document.getElementById('one').style.borderBottom = '2px solid black'
    document.getElementById('one').style.borderTop = ''
    document.getElementById('one').style.borderLeft = '2px solid black'
    document.getElementById('one').style.borderRight = '2px solid black'

    document.getElementById('two').style.borderRight = ''
    document.getElementById('two').style.borderLeft = '2px solid black'
    document.getElementById('two').style.borderBottom = '2px solid black'
    document.getElementById('two').style.borderTop = ''

    document.getElementById('three').style.borderTop = '2px solid black'
    document.getElementById('three').style.borderBottom = '2px solid black'
    document.getElementById('three').style.borderRight = '2px solid black'
    document.getElementById('three').style.borderLeft = ''

    document.getElementById('four').style.border = '2px solid black'

    document.getElementById('five').style.borderLeft = '2px solid black'
    document.getElementById('five').style.borderTop = '2px solid black'
    document.getElementById('five').style.borderBottom = '2px solid black'
    document.getElementById('five').style.borderRight = ''

    document.getElementById('six').style.borderLeft = ''
    document.getElementById('six').style.borderBottom = ''
    document.getElementById('six').style.borderTop = '2px solid black'
    document.getElementById('six').style.borderRight = '2px solid black'

    document.getElementById('seven').style.borderRight = '2px solid black'
    document.getElementById('seven').style.borderLeft = '2px solid black'
    document.getElementById('seven').style.borderTop = '2px solid black'
    document.getElementById('seven').style.borderBottom = ''

    document.getElementById('eight').style.borderBottom = ''
    document.getElementById('eight').style.borderRight = ''
    document.getElementById('eight').style.borderLeft = '2px solid black'
    document.getElementById('eight').style.borderTop = '2px solid black'

    document.getElementById('winO').childNodes[5].innerHTML = ''
    document.getElementById('winX').childNodes[5].innerHTML = ''

    array0 = []
    arrayX = []
    counter = 0

    square.addEventListener('click', check)

    console.log('nextGame');
}
