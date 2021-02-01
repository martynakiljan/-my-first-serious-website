//scroll//

const header = document.querySelector('header');
window.addEventListener('scroll', function (e) {
  
    const scrollTop = document.documentElement.scrollTop;
    if (scrollTop > 100) {
        header.classList.add('super-menu')
        setTimeout(() => {
            header.classList.add('animation');
        }, 100)
    } else {
        header.classList.remove('super-menu');
        header.classList.add('animation');

    }
});


window.addEventListener('scroll', function (e) {
    const scroll = document.documentElement.scrollTop;
    const containerKonzept = document.querySelector('.container--advantage');
    const descriptionText = document.querySelector('.about__description');
    const playMainText = document.querySelector('.play__maintext');
    const tableText = document.querySelector('.table__text');



    if (scroll > 1300) {

        descriptionText.classList.add('animate__animated', 'animate__slideInRight',
            'animate__slow', 'animate__repeat-1');

    }
    if (scroll > 2300) {
    
        playMainText.classList.add('animate__animated', 'animate__zoomIn', 'animate__slow', 'animate__repeat-1');

    }
    if (scroll > 2900) {
       
        tableText.classList.add('animate__animated', 'animate__zoomIn', 'animate__slow', 'animate__repeat-1');

    }
    if (scroll > 3900) {
        
        containerKonzept.classList.add('animate__animated', 'animate__zoomIn', 'animate__slow', 'animate__repeat-1');

    };


});




//slider//

document.addEventListener('DOMContentLoaded', init);

const media = window.matchMedia("(min-width: 968px)");


function init() {
 

    function slidingIcons() {

        if (media.matches) {
            let idInterval;
            const wrapperEl = document.querySelector('.wrapper');
            const parentEl = document.querySelector('.parent--advantage');
            const childrenList = document.querySelectorAll('.child--advantage');
            const btnLeft = document.querySelector('.btn--left');
            const btnRight = document.querySelector('.btn--right');

          

            const childPerScreen = 3;
            const wrapperWidth = wrapperEl.offsetWidth;
            const childWidth = wrapperWidth / childPerScreen;

            childrenList.forEach(function (child) {
                child.style.width = childWidth + 'px';
            });

            parentEl.style.width = (childWidth * childrenList.length) + 'px';
            let currentSlide = 0;

            const emptySlots = childrenList.length % childPerScreen;
            btnLeft.addEventListener('click', function () {
                currentSlide++;

          
                if (currentSlide === childrenList.length - emptySlots) {
                    currentSlide--;
                }
                parentEl.style.left = -(currentSlide * childWidth) + 'px'
            });

            btnLeft.addEventListener('mouseenter', stopAnimation);
            btnLeft.addEventListener('mouseleave', startAnimation);


            btnRight.addEventListener('click', function () {
                currentSlide--;
                if (currentSlide < 0) {
                    currentSlide++;
                }
                parentEl.style.left = -(currentSlide * childWidth) + 'px'
            });
            btnRight.addEventListener('mouseenter', stopAnimation);
            btnRight.addEventListener('mouseleave', startAnimation);

            startAnimation();

            function startAnimation() {
           
                idInterval = setInterval(function () {
                    currentSlide++;
                    if (currentSlide === childrenList.length - emptySlots) {
                        currentSlide = 0;
                    }
                    parentEl.style.left = -(currentSlide * childWidth) + 'px';
                }, 4000);
            }

            function stopAnimation() {
                clearInterval(idInterval);
            }
        }


    }

    function slidingReferneces() {
        if (media.matches) {

            const wrapperRerefences = document.querySelector('.references__wrapper');
            const parentElofReferences = document.querySelector('.references__parent');
            const childrenList = document.querySelectorAll('.container__references');
            const btnLeft = document.querySelector('.btn--left');
            const btnRight = document.querySelector('.btn--right');



            const childPerScreen = 1;
            const wrapperWidth = wrapperRerefences.offsetWidth;
            const childWidth = wrapperWidth / childPerScreen;

            childrenList.forEach(function (child) {
                child.style.width = childWidth + 'px';
            });

            parentElofReferences.style.width = (childWidth * childrenList.length) + 'px';


            let currentSlideofReferences = 0;

            let idInterval;
            const dots = document.querySelectorAll('.references__dot');

            function selectCurrentDot(index) {
                dots.forEach(function (d) {
                    d.classList.remove('dot--color');
                });
                dots[index].classList.toggle('dot--color')
            }

            function stopAnimation() {
                clearInterval(idInterval);
            }

            function startAnimation() {
                idInterval = setInterval(function () {
                    currentSlideofReferences++;
                    if (currentSlideofReferences === childrenList.length) {
                        currentSlideofReferences = 0;
                    }
                    selectCurrentDot(currentSlideofReferences);
                    parentElofReferences.style.left = -(currentSlideofReferences * childWidth) + 'px';
                }, 5000);
            }
            startAnimation();
            dotsContainer = document.querySelector('.references__dots');
            dotsContainer.addEventListener('mouseenter', stopAnimation);
            dotsContainer.addEventListener('mouseleave', startAnimation);
            dots.forEach(function (d, index) {
                d.addEventListener('click', function () {
                    currentSlideofReferences = index;
                    parentElofReferences.style.left = -(currentSlideofReferences * childWidth) + 'px';
                    selectCurrentDot(index);
                })
            })

            window.addEventListener('scroll', function (e) {
                const scroll = document.documentElement.scrollTop;
                const containerKonzept = document.querySelector('.container--advantage');
                const descriptionText = document.querySelector('.about__description');
                const playMainText = document.querySelector('.play__maintext');
                const tableText = document.querySelector('.table__text');

         


                if (scroll > 3000) {
               
                    descriptionText.classList.add('animate__animated', 'animate__slideInRight',
                        'animate__slow', 'animate__repeat-1');

                }
                if (scroll > 3600) {
                  
                    playMainText.classList.add('animate__animated', 'animate__zoomIn', 'animate__slow', 'animate__repeat-1');

                }
                if (scroll > 4200) {
              
                    tableText.classList.add('animate__animated', 'animate__zoomIn', 'animate__slow', 'animate__repeat-1');

                }
                if (scroll > 4800) {
               
                    containerKonzept.classList.add('animate__animated', 'animate__zoomIn', 'animate__slow', 'animate__repeat-1');

                };


            });



        }
    }





    const mediaTwo = window.matchMedia("(max-width: 991px)");





    function slidingImage() {

        if (mediaTwo.matches) {
            const wrapperGallery = document.querySelector('.wrapper--gallery');
            const parentGallery = document.querySelector('.container__images');
            const imageList = document.querySelectorAll('.gallery__image');
            const btnLeft = document.querySelector('.btn--left--desktop');
            const btnRight = document.querySelector('.btn--right--desktop');


            const wrapperGalleryWidth = wrapperGallery.offsetWidth;
            const imgWidth = wrapperGalleryWidth;

            imageList.forEach(function (child) {
                child.style.width = imgWidth + 'px';
                child.style.paddingBottom = (imgWidth * 0.67) + 'px';
            });

            parentGallery.style.width = (imgWidth * imageList.length) + 'px';


            let currentImg = 0;
            let idInterval;
            startAnimation();

            btnLeft.addEventListener('click', nextImg);
            btnLeft.addEventListener('mouseenter', stopAnimation);
            btnLeft.addEventListener('mouseleave', startAnimation);
            btnRight.addEventListener('click', prevImg);
            btnRight.addEventListener('mouseenter', stopAnimation);
            btnRight.addEventListener('mouseleave', startAnimation);

            function prevImg() {
                currentImg--;
                if (currentImg < 0) {
                    currentImg++;
                }
                parentGallery.style.left = -(currentImg * imgWidth) + 'px'
            }

            function nextImg() {
                currentImg++;
                if (currentImg === imageList.length) {
                    currentImg--;
                }
                parentGallery.style.left = -(currentImg * imgWidth) + 'px'
            }


            function startAnimation() {
                idInterval = setInterval(nextImg, 5000);
            }

            function stopAnimation() {
                clearInterval(idInterval)
            }
        }



        window.addEventListener('scroll', function (e) {
            const scroll = document.documentElement.scrollTop;
            const containerKonzept = document.querySelector('.container--advantage');
            const descriptionText = document.querySelector('.about__description');
            const playMainText = document.querySelector('.play__maintext');
            const tableText = document.querySelector('.table__text');

           


            if (scroll > 2600) {
           
                descriptionText.classList.add('animate__animated', 'animate__slideInRight',
                    'animate__slow', 'animate__repeat-1');

            }
            if (scroll > 3500) {
               
                playMainText.classList.add('animate__animated', 'animate__zoomIn', 'animate__slow', 'animate__repeat-1');

            }
            if (scroll > 4300) {
               
                tableText.classList.add('animate__animated', 'animate__zoomIn', 'animate__slow', 'animate__repeat-1');

            }
            if (scroll > 4900) {
               
                containerKonzept.classList.add('animate__animated', 'animate__zoomIn', 'animate__slow', 'animate__repeat-1');

            };


        });


    }



    slidingReferneces();
    slidingIcons();
    slidingImage();


    //arrow menu//
    const arrow = document.querySelector('.fa-chevron-down');
 

    arrow.addEventListener('click', showIcons)

    function showIcons() {


    const nav = document.querySelector('nav')

    nav.classList.toggle('show')
    arrow.classList.toggle('moving')


    }

    //hamburger menu//
    const hamburger = document.querySelector('.hamburger__icon');


    hamburger.addEventListener('click', showMenu)

    function showMenu() {
        const menu = document.querySelector('.nav__tablet--container');


        menu.classList.toggle('show')

    }



    /*change languages*/

    const langList = document.querySelectorAll('[lang]')
    langList.forEach(function (lang) {
        lang.addEventListener('click', changeLang);
    });


    function changeLang(event) {
        const lang = event.target.dataset.lang;


        if (lang) {
            const langSet = 'lang' + lang.charAt(0).toUpperCase() + lang.slice(1, 2);
            document.querySelectorAll(`[data-lang-${lang}]`).forEach((el) => {
                if (el.tagName === 'INPUT') {

                
                    el.value = el.dataset[langSet]
                } else {
                    el.innerText = el.dataset[langSet]
                }
            });
        }

    }

//removal of loading on the movie//
// documentation: https://developers.google.com/youtube/iframe_api_reference?hl=pl
    let player;

    function onYouTubeIframeAPIReady() {

        
        player = new YT.Player('youtube', {
            videoId: 'Mj3lqtXTSO4',
            playerVars: { 'autoplay': 1, 'playsinline': 1 },
            events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
            }
        });
    }

    function onPlayerReady(event) {
        event.target.mute()
        event.target.playVideo()

        let duration = null;
        setInterval(function () {
            if (duration === null) {
                duration = player.getDuration()
            }

            if (duration > 0 && duration - player.getCurrentTime() <= 5) {
                player.seekTo(1, true);
            }
        }, 5000);
    }

    function onPlayerStateChange(event) {

        if (event.data === YT.PlayerState.PLAYING) {
            document.querySelector('#youtube').style.visibility = 'visible';
        }
    }





}

//form//
const submitBtn = document.getElementById('submit-btn');


const validate = e => {


    e.preventDefault()
   
   const firstname = document.querySelector('.firstname_form');
   const surname = document.querySelector('.surname_form');
   const email = document.querySelector('.email_form')
   const message = document.querySelector('.message_form')
   
   const firstNameValue = firstname.value;
   const surnameValue = surname.value;
   const emailValue = email.value;
   const messageValue = message.value;

    const emailIsValid = email => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
   
   
       if(firstNameValue === "") {
           alert('Please enter your first name')
           firstname.focus();
           return false;
       }
       if(surnameValue === "") {
           alert('Please enter your surname')
           surname.focus();
           return false;
       }
       if(!emailIsValid(emailValue)) {
           alert('Please enter your E-mail')
           email.focus()
           return false;
       }
       if(messageValue === "") {
           alert('Please enter your Message')
           message.focus()
           return false;
       }
   
       return validate
   }



    if(validate)  {
    // documentation: https://www.emailjs.com/docs/sdk/send/
    emailjs.init('user_6KVma0ctS5WDwy6VekDWl');
    const serviceID = 'default_service';
    const templateID = 'template_c7la8qe';

    const formEl = document.querySelector('form');
    formEl.addEventListener('submit', function (e) {
        e.preventDefault();


        Array.from(formEl.elements).forEach(function (item) {
            item.disabled = true;
        });


        emailjs.send(serviceID, templateID, {
                reply_to: formEl.elements.email.value,
                message: formEl.elements.message.value,
                from_name: formEl.elements.text.value
            })
            .then(() => {
                alert('Sent! Thank you');
                Array.from(formEl.elements).forEach(function (item) {
                    item.disabled = false;
                });

            }, (err) => {
                alert(JSON.stringify(err));
            });
    });



}
   

submitBtn.addEventListener('click', validate);


//video//

let bgvideo = document.getElementById("BgVideo");
bgvideo.muted = true;
bgvideo.play();
