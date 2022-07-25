/*==== GIF LOADER CODE STARTS ====*/

onload = () => {

    const load = document.getElementById(`load`)

    setTimeout (() => {
        load.style.display = `none`
    }, 1000)
}

/*==== GIF LOADER CODE ENDS ====*/


/*==== (MOBILE MENU) OPEN-CLOSE MENU CODE STARTS ====*/

    const   navMenu = document.getElementById(`nav-menu`),

            navToggle = document.getElementById(`nav-toggle`),

            navClose = document.getElementById(`nav-close`)

    /*#### MENU OPEN CODE STARTS ####*/

        /* Validate if constant exists */

        if  (navToggle){

            navToggle.addEventListener(`click`, () =>{

                navMenu.classList.add(`show-menu`)

            })
        }

    /*#### MENU OPEN CODE ENDS ####*/


    /*#### MENU CLOSE CODE STARTS ####*/

        /* Validate if constant exists */

        if  (navClose){

            navClose.addEventListener(`click`, () =>{

                navMenu.classList.remove(`show-menu`)

            })
        }

    /*#### MENU CLOSE CODE ENDS ####*/

/*==== (MOBILE MENU) OPEN-CLOSE MENU CODE ENDS ====*/


/*==== REMOVE MOBILE MENU CODE STARTS ====*/

    const navLink = document.querySelectorAll(`.nav__link`)

    function linkAction(){

        const navMenu = document.getElementById(`nav-menu`)

        // When we click on each nav__link, we remove the show-menu class

        navMenu.classList.remove(`show-menu`)

    }

    navLink.forEach(n => n.addEventListener(`click`, linkAction))

/*==== REMOVE MOBILE MENU CODE ENDS ====*/


/*==== CHANGE HEADER BACKGROUND (ON SCROLL) CODE STARTS ====*/

    const scrollHeader = () =>{

        const header = document.getElementById(`header`)

        // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag

        this.scrollY >= 50 ? header.classList.add(`scroll-header`) 

                        : header.classList.remove(`scroll-header`)

    }

    window.addEventListener(`scroll`, scrollHeader)

/*==== CHANGE HEADER BACKGROUND (ON SCROLL) CODE ENDS ====*/


/*==== MIXITUP FILTER CODE STARTS ====*/

    let mixerProducts = mixitup(`.products__content`, {

        selectors: {

            target: `.products__card`

        },

        animation: {

            duration: 300

        }
    });

    /*#### DEFAULT FILTER PRODUCTS CODE STARTS ####*/

        mixerProducts.filter(`.delicacies`)
        
    /*#### DEFAULT FILTER PRODUCTS CODE ENDS ####*/


    /*#### ACTIVE LINK PRODUCTS CODE STARTS ####*/

       const linkProducts = document.querySelectorAll(`.products__item`)

       function activeProducts() {

            linkProducts.forEach(l => l.classList.remove(`active-product`))

            this.classList.add(`active-product`)

       }

       linkProducts.forEach(l => l.addEventListener(`click`, activeProducts))

    /*#### ACTIVE LINK PRODUCTS CODE ENDS ####*/

/*==== MIXITUP FILTER CODE ENDS ====*/


/*==== SHOW SCROLL-UP BUTTON CODE STARTS ====*/

    const scrollUp = () =>{

        const scrollUp = document.getElementById(`scroll-up`)
        
        // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class

        this.scrollY >= 350 ? scrollUp.classList.add(`show-scroll`)

                            : scrollUp.classList.remove(`show-scroll`)

    }

    window.addEventListener(`scroll`, scrollUp)

/*==== SHOW SCROLL-UP BUTTON CODE ENDS ====*/


/*==== SCROLL SECTION ACTIVE LINK CODE STARTS ====*/

    const sections = document.querySelectorAll(`section[id]`)
        
    const scrollActive = () =>{

        const scrollY = window.pageYOffset

        sections.forEach(current => {

            const   sectionHeight = current.offsetHeight, 

                    sectionTop = current.offsetTop - 58, 

                    sectionId = current.getAttribute(`id`), 
                    
                    sectionsClass = document.querySelector(`.nav__menu a[href*=` + sectionId + `]`)

            if  (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {

                sectionsClass.classList.add(`active-link`)

            }   else {

                sectionsClass.classList.remove(`active-link`)

            }
        })
    }

    window.addEventListener(`scroll`, scrollActive)

/*==== SCROLL SECTION ACTIVE LINK CODE ENDS ====*/

