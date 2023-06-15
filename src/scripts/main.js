$(document).ready(function (){
    const buttons = document.querySelectorAll ("[data-tab-button]");

    for(let i=0; i<buttons.length;i++){
        buttons[i].addEventListener('click', function(button){
            const targetSection = button.target.dataset.tabButton;

            removeActiveButton();

            button.target.parentElement.classList.add('navigation__list__item--active');

            const selectedSection = document.querySelector(`[data-tab-id = ${targetSection}]`);
            hideAll();
            selectedSection.classList.remove('tab');

        })
    };

    $(`#suggestions__carousel`).slick({
        autoplay: false,
        dots: false,
        infinite: false,
        speed: 100,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
                },
                {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
    });

});

function removeActiveButton(){
    const buttons =document.querySelectorAll('[data-tab-button]');
    for (i=0; i< buttons.length; i++){
        buttons[i].parentElement.classList.remove('navigation__list__item--active');
    }
}

function hideAll() {
    const sections = document.querySelectorAll('[data-tab-id]');
    for(let i = 0; i<sections.length; i++){
        sections[i].classList.add('tab');
    }
}
