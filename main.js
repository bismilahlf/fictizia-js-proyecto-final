const myHouse = document.querySelector('.my-house-result');
const sortingBtn = document.querySelector('.sorting-btn');
const mainContainer = document.querySelector('.container');
const request = 'https://www.potterapi.com/v1/sortinghat';

function handleSortingButton() {
    fetch(request)
    .then(res => res.json())
    .then(data => {
        myHouse.innerText = data;
        switch(data) {
            case 'Gryffindor':
                mainContainer.classList.add('gryffindor');
                mainContainer.classList.remove('slytherin');
                mainContainer.classList.remove('hufflepuff');
                mainContainer.classList.remove('ravenclaw');
                break;
            case 'Slytherin':
                mainContainer.classList.add('slytherin');
                mainContainer.classList.remove('gryffindor');
                mainContainer.classList.remove('hufflepuff');
                mainContainer.classList.remove('ravenclaw');
                break;
            case 'Hufflepuff':
                mainContainer.classList.add('hufflepuff');
                mainContainer.classList.remove('slytherin');
                mainContainer.classList.remove('gryffindor');
                mainContainer.classList.remove('ravenclaw');
                break;
            case 'Ravenclaw':
                mainContainer.classList.add('ravenclaw');
                mainContainer.classList.remove('slytherin');
                mainContainer.classList.remove('hufflepuff');
                mainContainer.classList.remove('gryffindor');
                break;
            default:
                mainContainer.classList.add('default');
        }
            
        
    })
}
sortingBtn.addEventListener('click', handleSortingButton);




