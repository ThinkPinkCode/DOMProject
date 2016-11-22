/**
 * Created by melanie.myers on 11/17/16.
 */


const myHeading = document.getElementById('myHeading');
const myButton = document.getElementById('myButton');

myButton.addEventListener('click', () => {
    myHeading.style.color = 'red';
});