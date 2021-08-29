let zero = 0
let array0 = []
let arrayX = []
let counter = 0

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

function check(e) {
    let click = e.path[0]

    if (click.nodeName === 'DIV') {
        if (counter % 2 == 0) {
            nol1(click)
            let param = e.path[0].attributes[0].nodeValue
            console.log(param);
            array0.push(param)
            let example = []
            let example2 =[]
            counterFnc()

            for (let i = 0; i < generalArrayWin.length; i++) {



                for (let z = 0; z < generalArrayWin[i].length; z++) {
                    example.push(array0.includes(generalArrayWin[i][z], 0))
                    example2.push(generalArrayWin[i][z])
                }


                if (example.join() == ('true,true,true')) {
                    win(example2)
                    console.log(example2);
                    console.log(example.join());
                    console.log('Совпадение найдено, Победа нулей')
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
                    win(example2)
                    console.log(example2);
                    console.log(example.join());
                    console.log('Совпадение найдено, Победа Крестов')
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
    }
}

function win(param) {
    for(let i = 0; i < param.length; i++)
    document.getElementById(param[i]).className = "win"
}

