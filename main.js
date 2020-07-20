const myHouse = document.querySelector('.my-house');
const sortingBtn = document.querySelector('.sorting-btn');

const request = 'https://www.potterapi.com/v1/sortinghat';

sortingBtn.addEventListener('click', handleSortingButton);

function getSorted(json) {
    myHouse.innerText = json;
}

function handleSortingButton() {
    fetch(request)
    .then(res => res.json())
    .then(json => getSorted(json))
}


