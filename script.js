const input = document.querySelector('#Guess');
const btn = document.querySelector('#btn');

const randomNumber = Math.floor(Math.random() * 10 + 1);

btn.addEventListener('click', function(e) {

    if (input.value == randomNumber ) {
        alert('You guessed correctly');
        input.value = " ";
    }
     else if( isNaN(input.value) ){
        alert('That is not a number');
        input.value = " ";
     }
     else{
        alert('That is not correct');
        input.value = " ";
    }
        
});