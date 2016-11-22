const myList = document.getElementsByTagName('li');
const myNonPurpleList = document.querySelectorAll('.error-not-purple');

for (let i=0; i < myList.length; i +=1){
    myList[i].style.color = 'purple';
}

for (let i=0; i < myNonPurpleList.length; i +=1){
    myNonPurpleList[i].style.color = 'red';
}