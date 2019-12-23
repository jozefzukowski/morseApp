/* tworzenie classy pytanie */
class question {
    constructor(content, answer) {
        this.content = content;
        this.answer = answer;
    }
}

/* tworzenie tablicy pytanie i jej defniowanei za pomoca kalasy pytanie */

const questions = new Array(26);

questions[0] = new question("Jak napiać  A", ".-");
questions[1] = new question("Jak napisać B", "-...");
questions[2] = new question("Jak napiać C", ".-.-");
questions[3] = new question("Jak napiać  D", "-..");
questions[4] = new question("Jak napisać E", ".");
questions[5] = new question("Jak napiać F", "..-.");
questions[6] = new question("Jak napiać  G", "--.");
questions[7] = new question("Jak napisać H", "....");
questions[8] = new question("Jak napiać I", "..");
questions[9] = new question("Jak napiać  J", ".---");
questions[10] = new question("Jak napisać K", "-.-");
questions[11] = new question("Jak napiać L", ".-..");
questions[12] = new question("Jak napisać M", "..");
questions[13] = new question("Jak napiać N", "-.");
questions[14] = new question("Jak napisać O", "---");
questions[15] = new question("Jak napiać P", ".--.");
questions[16] = new question("Jak napisać Q", "--.-");
questions[17] = new question("Jak napiać R", ".-.");
questions[18] = new question("Jak napisać S", "...");
questions[19] = new question("Jak napiać T", "-");
questions[20] = new question("Jak napiać U", "..-");
questions[21] = new question("Jak napisać V", "...-");
questions[22] = new question("Jak napiać W", ".--");
questions[23] = new question("Jak napisać X", "-..- ");
questions[24] = new question("Jak napiać Y", "-.--");
questions[25] = new question("Jak napisać Z", "--..");

/* zmienne */
let points = 0;
let repeats = 0;

/* funkcja start() służy do poberania warotści zmienej lineVal */
document.querySelector('#startBtn').addEventListener('click', function(){
    /* pobieranie wartosci swuwaka */
    let lineVal = document.querySelector('.line').value;
    /* losowa liczba */
    let random = Math.floor(Math.random()*questions.length);

    /* zmienianie zawrtosci diva */
    const mainDiv = document.querySelector('.mainDiv');

    mainDiv.innerHTML = ` 
    <h1 class="title" id="question">Ile pytań</h1>
    <input type="text" placeholder="odpowowiedź" class="textInput"><br>
    
    <button class="purpleBtn" id="nextBtn">Dalej</button>`;

    /* tworzenie zmiennych przechowywojącyhc uchwyty do elementów : */
    const header = document.querySelector('#question');
    const btn = document.querySelector('#nextBtn');

    /* ustawianie zawartosci nagłuwka na pytanie[losowa liczba] */
        /* losowa liczba */
        random = Math.floor(Math.random()*questions.length);

        header.innerHTML = questions[random].content;

    btn.addEventListener('click',function(){
        let input = document.querySelector('.textInput').value;
        const inputEl = document.querySelector('.textInput');
        if(input == questions[random].answer){
            points ++;
        }
        

        repeats ++
        if(repeats > lineVal){
            end();
        }

        random = Math.floor(Math.random()*questions.length);

        header.innerHTML = questions[random].content;
       
        document.querySelector('#point').innerHTML = points;
        inputEl.value=""
    })
})


/* funkcja end służy do wyświetlanie wyniku */
function end(){
    const mainDiv = document.querySelector('.mainDiv');
    mainDiv.innerHTML = 0;
    mainDiv.innerHTML = `<h1 class="title">Twój wynik : ${points}</h1>`
}
