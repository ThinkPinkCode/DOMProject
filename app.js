const myList = document.getElementsByTagName('li');
const myNonPurpleList = document.querySelectorAll('.error-not-purple');
const evens = document.querySelectorAll('li:nth-child(odd)');

for (let i=0; i < myList.length; i +=1){
    myList[i].style.color = 'purple';
}

for (let i=0; i < myNonPurpleList.length; i +=1){
    myNonPurpleList[i].style.color = 'red';
}

for (let i=0; i < evens.length; i +=1){
    evens[i].style.backgroundColor = 'lightgray';
}