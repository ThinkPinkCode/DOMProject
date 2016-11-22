/**
 * Created by melanie.myers on 11/17/16.
 */


const myHeading = document.getElementsByTagName('h1')[0];
const myButton  = document.getElementById('myButton');
const myTextInput = document.getElementById('myTextInput');


myButton.addEventListener('click', () => {
    myHeading.style.color = myTextInput.value;
});

