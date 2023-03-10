/* SHOW SIDEBAR */


/* SIDEBAR SHOW */
/* Validate If Constant Exists */


/* SIDEBAR HIDDEN */
/* Validate If Constant Exists */


/* SKILLS TABS 
ici en gros je veux que lorsqu'on clique sur la fleche
chaque technologie correspondant s'affiche 
*/
const tabs = document.querySelectorAll('[data-target]');
const tabContent = document.querySelectorAll('[data-content]');

tabs.forEach((tab) => {
    tab.addEventListener('click',()=> {
        const target = document.querySelector(tab.dataset.target);
        tabContent.forEach((tabContents) => {
            tabContents.classList.remove('skills_active');
        });
        target.classList.add('skills_active');

        tabs.forEach((tab) => {
            tab.classList.remove('skills_active');
        });
        tab.classList.add('skills_active');
        
    });

});

/* MIXITUP FILTER PORTFOLIO
ici assez simple j'ai juste mis le code qui me permet de 
faire un filtrage de mes apps dans la section 
portfolio avec une petite animation de 0.3s
*/
let mixerPortfolio = mixitup('.work_container',{
    selectors: {
        target: '.work_card',
    },
    animation:{
        duration: 300,
    }
});

/* Link Active Work */
const linkWork= document.querySelectorAll('.work_item');
function linkActiveWork(){
    linkWork.forEach(l=> l.classList.remove('active-work'));
    this.classList.add('active-work');
    
}

linkWork.forEach((link) => {link.addEventListener('click',linkActiveWork)});


/* Work Popup 
ici ca me retourne un popup avec le contenu 
du projet


*/
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('work_button')) {
        togglePortfolio();
        portfolioDetails(e.target.parentElement);
    }
});

function togglePortfolio() {
    document.querySelector('.portfolio_popup').classList.toggle('open');
}
document.querySelector('.portfolio_popup-close').addEventListener('click', togglePortfolio);

function portfolioDetails(portfolioItem) {
    document.querySelector('.pp_thumbnail img').src= portfolioItem.querySelector('.work_img').src;
    ;
    document.querySelector('.portfolio_popup-subtitle span').innerHTML= portfolioItem.querySelector('.work_title').innerHTML;
    document.querySelector('.portfolio_popup-body').innerHTML= portfolioItem.querySelector('.portfolio_item-details').innerHTML;


}
/* SERVICES MODAL */
const modalviews = document.querySelectorAll('.services_modal');
const modalBtns = document.querySelectorAll('.services_button');
const modalCloses = document.querySelectorAll('.services_modal-close');

let modal = function(modalClick) {
    modalviews[modalClick].classList.add('active-modal');
}

modalBtns.forEach((modalBtn,i) => {
    modalBtn.addEventListener('click',()=> {
        modal(i);
    });
});

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click',()=> {
        modalviews.forEach((modalView) => {
            modalView.classList.remove('active-modal');
        });
    });
});
/* SWIPER TESTIMONIAL */


/* INPUT ANIMATION */


/* SCROLL SECTIONS ACTIVE LINK */


/* SHOW SCROLL UP */
