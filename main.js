   /* tworzenie classy pytanie */
   class question {
        constructor(content, answer, checkbox) {
            this.content = content;
            this.answer = answer;
            this.checkbox = checkbox
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
    questions[26] = new question("Czy koniec słowa //", 1, true);
    questions[27] = new question("Jak napiać W", ".--");
    questions[28] = new question("Czy medldunek rozpoczyna się ///", 1, true);
    questions[29] = new question("Jak napiać Y", "-.--");
    questions[30] = new question("Jak napisać Z", "--..");

 

    /* tworzenie uchwyów dla ementów pytanie i textinput */
    const questionHtml = document.querySelector('#question');

    
    let points = 0;


    /* nasuchiwanie na clikniecie na przycisk */
        document.querySelector('#startBtn').addEventListener('click', function(){

            const input = document.querySelector('.textInput').value;

            if(input == questions[number].answer){
                points++;
                document.querySelector('.textInput').classList.remove('bad')

                good();


            }
            else{
                bad();
            }
            repeat ++;
            if(repeat > getRepeat){
                end();
            }
           question();

        });



function bad(){
    const input = document.querySelector('.textInput');

    input.style.animation = bad;

}

function question(){
    /* zmienne */
    let number = Math.floor(Math.random()*questions.length); /* losowy numer pytania */
    
    /* ustawianie nagłwka  */
    questionHtml.innerHTML =  questions[number].content;

}
/* funkcja end służy do wyświetlanie wyniku */
function end(){
    const mainDiv = document.querySelector('.mainDiv');
    mainDiv.innerHTML = 0;
    mainDiv.innerHTML = `<h1 class="title">Twój wynik : ${points}</h1>`

}
/* funkcja służy do podśiwetlani na czerwono inputa */
function bad(){

    const input = document.querySelector('.textInput');
    input.style.animation = bad;

}

/* <input type="text" placeholder="odpowowiedź" class="textInput"><br> */

