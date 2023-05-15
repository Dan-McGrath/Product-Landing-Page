const mobileToggle = document.getElementById('mobile-toggle');
const closeIcon = document.getElementById('close');
const openIcon = document.getElementById('open');

const onClick = () => {
    if (mobileToggle.dataset.active === 'true') {
        mobileToggle.dataset.active = 'false';
        closeIcon.style.display = 'none';
        openIcon.style.display = 'block'
    } else {
        mobileToggle.dataset.active = 'true';
        openIcon.style.display = 'none';
        closeIcon.style.display = 'block';
    }
}

document.querySelector('.button-toggles').addEventListener('click', onClick)