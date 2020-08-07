

const numberButton = document.querySelectorAll('.number');
const content = document.querySelectorAll('.content');
const part1 = document.querySelector('.part1');
const part2 = document.querySelector('.part2');
const headline = part2.querySelectorAll('h2');

const hero = document.querySelector('.hero');
const heroButton = hero.querySelectorAll('button');
const heroButtonBorder = hero.querySelectorAll('.border');

const playButton = document.querySelectorAll('.playButton');
const playButtonArrow = document.querySelectorAll('.playButtonArrow');
const blackBackground = document.querySelector('.blackBackground');
const videoClip = document.querySelector('.video');
const closeButton = document.querySelector('.closeButton');

const hamburger = document.querySelector('.hamburger');
const spans = hamburger.querySelectorAll('span');

const nav = part1.querySelector('nav');
const insideLists = document.querySelectorAll('.insideList');
const listElements = document.querySelectorAll('.listElement');

const introAnimation = document.querySelector('.introAnimation');

const numberButtonClassRemoval = () => {
    for(let i = 0; i < numberButton.length; i++){
        numberButton[i].classList.remove('active');
    };
}

const contentClassRemoval = () => {
    for(let i = 0; i < content.length; i++){
        content[i].classList.remove('active');
    };
}

const headlineClassRemoval = () => {
    for(let i = 0; i < headline.length; i++){
        headline[i].classList.remove('active');
    };
}
// const insideListsClassRemoval = () =>{
//     for(let i = 0; i < insideLists.length; i++){
//         insideLists[i].classList.remove('active');
//     };
// }
const classRemoval = () =>{
    contentClassRemoval();
    headlineClassRemoval();
}

const heroButtonClassRemoval = () =>{
    for(let i = 0; i < heroButton.length; i++){
        heroButton[i].classList.remove('active');
    };
};

for(let i = 0; i < numberButton.length; i++){
    numberButton[i].addEventListener('click', ()=>{
        numberButtonClassRemoval();
        numberButton[i].classList.add('active');
        
        if(numberButton[0].classList.contains('active')){
            classRemoval();
            headline[0].classList.add('active');
            content[0].classList.add('active');
        }

        if(numberButton[1].classList.contains('active')){
            classRemoval();
            headline[1].classList.add('active');
            content[1].classList.add('active');
        }
    });
};

for(let i = 0; i < heroButton.length; i++){
    heroButton[i].addEventListener('click', ()=>{
        heroButtonClassRemoval();
        heroButton[i].classList.add('active');
        
        if(heroButton[0].classList.contains('active')){
            heroButtonBorder[0].classList.remove('active');
            heroButtonBorder[1].classList.add('active');
        }

        if(heroButton[1].classList.contains('active')){
            heroButtonBorder[0].classList.remove('active');
            heroButtonBorder[1].classList.remove('active');
        }

        if(heroButton[2].classList.contains('active')){
            heroButtonBorder[0].classList.add('active');
            heroButtonBorder[1].classList.remove('active');
        }
    });
};

for(let i = 0; i < playButton.length; i++){
    playButton[i].addEventListener('click', ()=>{
        blackBackground.classList.add('active');
    });
    playButtonArrow[i].addEventListener('click', ()=>{
        blackBackground.classList.add('active');
    });
}

for(let i = 0; i < listElements.length; i++){
    listElements[i].addEventListener('click', ()=>{
        insideListsClassRemoval();
        insideLists[i].classList.add('active');
    });
}

blackBackground.addEventListener('animationend', ()=>{
    videoClip.classList.add('active');
    closeButton.classList.add('active');
});

blackBackground.addEventListener('click', ()=>{
    blackBackground.classList.remove('active');
});

closeButton.addEventListener('click', ()=>{
    blackBackground.classList.remove('active');
});

hamburger.addEventListener('click', ()=>{
    for(i = 0; i < spans.length; i++){
        spans[i].classList.toggle('active');
    }
    nav.classList.toggle('active');
});

