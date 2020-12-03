


function clicked() {

    var inputText = document.getElementById('inputText').value;

    var newVal = inputText.split(' ')
    var count = 0;
    var comma = 0;
    var space = 0;
    var period = 0;
    var colon = 0;
    var exclamation = 0;
    var questionMark = 0;

    var str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

    // debugger

    for (let index = 0; index < inputText.length; index++) {
        if (inputText[index] === ' ') {
            space += 1
        }

    }

    newVal.forEach(element => {

        for (var i = 0; i < str.length; i++) {
            if (element.startsWith(str[i])) {
                count += 1;
            }
        }


        for (var i = 0; i < element.length; i++) {
            if (element[i] === ',') {
                // debugger
                comma += 1;
            }
            else if (element[i] === '.') {
                period += 1;
            }
            else if (element[i] === ':') {
                colon += 1;
            }
            else if (element[i] === '!') {
                exclamation += 1;
            }
            else if (element[i] === '?') {
                questionMark += 1;
            }
        }
    });



    var resultComma = document.getElementById('comma')
    var resultPeriod = document.getElementById('period')
    var resultQuestion = document.getElementById('question')
    var resultExclamation = document.getElementById('exclamation')
    var resultColon = document.getElementById('colon')
    var resultSpace = document.getElementById('space')
    var words = document.getElementById('words')

    words.innerHTML = ` Total Words : ${count}`;
    resultColon.innerHTML = `Colons : ${colon}`;
    resultComma.innerHTML = `Commas : ${comma}`;
    resultPeriod.innerHTML = `Dots : ${period}`;
    resultQuestion.innerHTML = `Question Marks : ${questionMark}`;
    resultExclamation.innerHTML = `Exclamation : ${exclamation}`;
    resultSpace.innerHTML = `Spaces : ${space}`


    var results = document.getElementById('results')
    results.style.display = 'block'
    document.getElementById('body').style.height = '140vh'
    window.location.replace('index.html#results')

}



var submit = document.getElementById('submit');

submit.addEventListener('click', clicked)
submit.addEventListener('mouseout', () => {
    submit.style.transition = 'all 0.4s ease-out'
})

var reset = document.getElementById('reset');
reset.addEventListener('click', () => {
    document.getElementById('body').style.height = '100vh'
    document.getElementById('inputText').value = ''
    document.getElementById('results').style.display = 'none'
    window.scrollTo(top)

})

reset.addEventListener('mouseout', ()=>{
    reset.style.transition = 'all 0.4s ease-out'
})