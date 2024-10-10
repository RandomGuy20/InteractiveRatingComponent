

const cardcomponent = document.querySelector('.card-component');
const ratingButtons = document.querySelectorAll('.rating-button');
let rating = 0;


const submitButton = document.querySelector('.btn');
const modalCard = document.querySelector('.modal-card');
const ratingAmount = document.querySelector('.rating-amount');

ratingButtons.forEach((button, index) =>
{
    button.addEventListener("click",() => StoreRating(index));
} );



function StoreRating(index)
{
    for (let i = 0; i < ratingButtons.length; i++)
    {
        ratingButtons[i].classList.remove('active');
        ratingButtons[i].classList.remove('white-text');
    }
        
    if(index <= ratingButtons.length)
    {
        ratingButtons[index].classList.add('active');
        ratingButtons[index].classList.add('white-text');
        rating = index + 1;
    }

}



submitButton.addEventListener('click', () =>
{
    console.log("Rating click")
    if(rating == 0)
        alert('Please select a rating');
    else
    {
        cardcomponent.style.display = 'none';
        modalCard.style.display = 'flex';
        ratingAmount.textContent = ` ${rating} `;


        setTimeout(() => 
        {
            cardcomponent.style.display = 'flex';
            modalCard.style.display = 'none';
            rating = 0;
            StoreRating(6);
        }, 2000);
    }
});