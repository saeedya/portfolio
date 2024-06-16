function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

document.addEventListener('DOMContentLoaded', function() {
    const tutorialsContainer = document.querySelector('.tutorials-container');
    const moreButton = document.querySelector('.more-btn');

    if (tutorialsContainer.children.length <= 3) {
        moreButton.style.display = 'none';
    } else {
        moreButton.style.display = 'flex';
    }
})

function toggleFullText(tutorialId) {
    const tutorial = document.getElementById(tutorialId);
    const fullText = tutorial.querySelector('.full-text');

    if (fullText.style.display === 'none') {
        fullText.style.display = 'block';
        tutorial.querySelector('a').innerText = 'Read less';
    } else {
        fullText.style.display = 'none';
        tutorial.querySelector('a').innerText = 'Read more';
    }
}

