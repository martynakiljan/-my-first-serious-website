const element = document.querySelector('.header__text');

element.classList.add('animate__animated', 'animate__bounceOutLeft');


element.addEventListener('animationend', () => {
    // do something
});


element.style.setProperty('--animate-duration', '0.5s');


const animateCSS = (element, animation, prefix = 'animate__') =>
    // We create a Promise and return it
    new Promise((resolve, reject) => {
        const animationName = `${prefix}${animation}`;
        const node = document.querySelector(element);

        node.classList.add(`${prefix}animated`, animationName);

        // When the animation ends, we clean the classes and resolve the Promise
        function handleAnimationEnd() {
            node.classList.remove(`${prefix}animated`, animationName);
            node.removeEventListener('animationend', handleAnimationEnd);

            resolve('Animation ended');
        }

        node.addEventListener('animationend', handleAnimationEnd);
    });


animateCSS('.header__text', 'bounce');

// or
animateCSS('.header__text', 'bounce').then((message) => {
    // Do something after the animation
});