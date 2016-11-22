/**
 * Created by melanie.myers on 11/17/16.
 */


const myHeading = document.getElementById('myHeading');
const subheading = document.getElementById('subheading');
const myButton  = document.getElementById('myButton');
const myButton2 = document.getElementById('myButton2');
const myTextInput = document.getElementById('myTextInput');
const myTextInput2 = document.getElementById('myTextInput2');

myButton.addEventListener('click', () => {
    myHeading.style.color = myTextInput.value;
});

myButton2.addEventListener('click', () => {
    subheading.style.color = myTextInput2.value;
})