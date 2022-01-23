const btnShare = document.querySelector('.btn_share');
const share = document.querySelector('.share-c');
const shareLinks = document.querySelector('.share-links-c');

btnShare.addEventListener('click', () => {
    share.classList.toggle('show');
    shareLinks.classList.toggle('show');
    btnShare.classList.toggle('click');
});
