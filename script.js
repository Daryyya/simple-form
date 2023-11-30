const form = document.querySelector('.form');
const modal = document.querySelector('.modal');
const thanks = document.querySelector('.thanks');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log(
    Object.fromEntries(new FormData(e.target).entries())
  );
  modal.style.display = 'none'
  thanks.style.display = 'block'
});