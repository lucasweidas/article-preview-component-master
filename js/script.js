const btnShare = document.querySelector('.btn_share');
const share = document.querySelector('.share-c');
const person = document.querySelector('.person-c');

btnShare.addEventListener('click', () => {
    share.classList.toggle('show');
    person.classList.toggle('show');
    btnShare.classList.toggle('click');
});
