document.addEventListener("DOMContentLoaded", (event) => {

    const burgerIcon = document.querySelector('.burger-icon');
    const headerNav = document.querySelector('.header__nav');

    burgerIcon.addEventListener('click', () => {
        headerNav.classList.toggle('active');
        burgerIcon.classList.toggle('active');
    });


    const productSlider = new Swiper('.product-slider', {
        loop: true,
        speed: 1800,
        spaceBetween: 20,
        pagination: {
            el: '.swiper-pagination',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1.3,
            },
            540: {
                slidesPerView: 2,
            },
            767: {
                slidesPerView: 2,
            },
            998: {
                slidesPerView: 3,
            },
        },
        // autoplay: {
        //     delay: 3500,
        //     stopOnLastSlide: false,
        //     disableOnInteraction: false,
        // },
    });

    $('input[type="tel"]')
        .on("click", function () { })
        .mask("+7 (999) 999 99 99");

    const moreBtn = document.querySelector('.btn-more');
    const hiddenText = document.querySelector('.hidden-text');
    if(moreBtn) {
        moreBtn.addEventListener('click', () => {
            hiddenText.classList.toggle('active');
            if(hiddenText.classList.contains('active')) {
                moreBtn.textContent = 'Скрыть';
            } else {
                moreBtn.textContent = 'Развернуть';
            }
        });
    };


    const modal = document.querySelector('.dealer-modal');
    const openModal = document.querySelector('.open-modal');
    const closeModal = document.querySelector('.close-modal');
    if(modal) {
        const showModal = () => {
            modal.classList.add('active');
            document.documentElement.style.overflow = 'hidden';
        }
    
        const hiddenModal = () => {
            modal.classList.remove('active');
            document.documentElement.style.overflow = 'auto';
        };
        if(openModal) {
            openModal.addEventListener('click', () => {
                showModal();
            });
        
            closeModal.addEventListener('click', () => {
                hiddenModal();
            });
        }
    }




    const modalDl = document.querySelector('.dl-modal');
    const modalOpen = document.querySelector('.dealer');
    const modalClose = document.querySelector('.close-dl-modal');

    const modalShow = () => {
        modalDl.classList.add('active');
        document.documentElement.style.overflow = 'hidden';
    }

    const modalHidden = () => {
        modalDl.classList.remove('active');
        document.documentElement.style.overflow = 'auto';
    };

    modalOpen.addEventListener('click', () => {
        modalShow();
    });

    modalClose.addEventListener('click', () => {
        modalHidden();
    });


    const orderModal = document.querySelector('.order-modal');
    const orderModalOpen = document.querySelector('.order');
    const orderModalClose = document.querySelector('.close-order-modal');

    const orderModalShow = () => {
        orderModal.classList.add('active');
        document.documentElement.style.overflow = 'hidden';
    }

    const modalHide = () => {
        orderModal.classList.remove('active');
        document.documentElement.style.overflow = 'auto';
    };

    orderModalOpen.addEventListener('click', () => {
        orderModalShow();
    });

    orderModalClose.addEventListener('click', () => {
        modalHide();
    });
});