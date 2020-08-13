const coin = document.querySelector('.coin');
const score = document.querySelector('#counter');
const multiplierEle = document.querySelector('#multiplier');
const title = document.querySelector('.title');
const woosh = document.querySelector('#woosh');
const click = document.querySelector('#click');

const coinFlip = () => Math.random() < 0.6;

let enabled = true;

if (!localStorage.getItem('score')) {
    localStorage.setItem('score', 0)
    localStorage.setItem('multiplier', 1)
}

score.innerText = localStorage.getItem('score')
multiplierEle.innerText = localStorage.getItem('multiplier')

coin.addEventListener('click', event => {
    event.preventDefault();

    if (!enabled) {
        return
    }

    coin.src = 'assets/coin.gif';
    enabled = false;
    woosh.play();
    setTimeout(() => {
        enabled = true;
        let curScore = parseInt(localStorage.getItem('score'));
        let multiplier = parseInt(localStorage.getItem('multiplier'));
        if (coinFlip()) {
            title.innerText = "Heads";
            coin.src = 'assets/heads.png';
            localStorage.setItem('score', curScore + multiplier)
            score.innerText = localStorage.getItem('score');
            localStorage.setItem('multiplier', multiplier + 1)
            multiplierEle.innerText = localStorage.getItem('multiplier');
        } else {
            title.innerText = "Tails";
            coin.src = 'assets/tails.png';
            localStorage.setItem('score', curScore - multiplier)
            score.innerText = localStorage.getItem('score');
            localStorage.setItem('multiplier', 1);
            multiplierEle.innerText = localStorage.getItem('multiplier');
        }
        woosh.load();
    }, 600)



});


const shopBtn = document.querySelector('#shopBtn');
shopBtn.addEventListener('click', () => {
    click.play();
    window.location = "/shop.html";
});

const restartBtn = document.querySelector('#restartBtn');
restartBtn.addEventListener('click', () => {
    click.play();
    location.reload();
});

const helpBtn = document.querySelector('#helpBtn');
helpBtn.addEventListener('click', () => {
    click.play();
    window.location = "/";
});

const settingsBtn = document.querySelector('#settingsBtn');
settingsBtn.addEventListener('click', () => {
    click.play();
    window.location = "/settings.html";
});