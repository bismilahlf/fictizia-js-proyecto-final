const myHouse = document.querySelector('.my-house');
const sortingBtn = document.querySelector('.sorting-btn');
const mainContainer = document.querySelector('.container');

const request = 'https://www.potterapi.com/v1/sortinghat';

function handleSortingButton() {
    fetch(request)
    .then(res => res.json())
    .then(data => {
        myHouse.innerText = data;
        if(myHouse.innerText === 'Gryffindor') {
            mainContainer.classList.add('gryffindor');
        } else {
            mainContainer.classList.remove('gryffindor');
        }
    })
}
sortingBtn.addEventListener('click', handleSortingButton);




