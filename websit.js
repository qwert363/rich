function scrollToPicture() {
    document.querySelector('.birthday-message').style.display = 'none';
    document.querySelector('.picture-container').style.display = 'block';
    document.querySelector('.picture-container').scrollIntoView({ behavior: 'smooth' });
}

function showMessage() {
    document.querySelector('.picture-container').style.display = 'none';
    document.querySelector('.message-container').style.display = 'block';
}
