//headerFixed
let headerPage = document.querySelector('.header');
let sectionTop = document.querySelector('.section-about');
let sectionTopHeight = sectionTop.clientHeight;
let scrollPos = window.pageYOffset;
checkScroll(scrollPos, sectionTopHeight); //если обновить в середине страницы , шапка может исчезнуть ,поэтому запускаем эту функцию сразу
window.addEventListener("scroll", headerFixed);
window.addEventListener("resize", headerFixed);
function headerFixed() {
    let sectionTopHeight = sectionTop.clientHeight;
    let scrollPos = window.pageYOffset;
    checkScroll(scrollPos, sectionTopHeight);
}
function checkScroll(scrollPos, sectionTopHeight) {
    if (scrollPos > sectionTopHeight) {
        headerPage.classList.add("is-active");
    }
    else {
        headerPage.classList.remove("is-active");
    }
}


/*popup*/
let body = document.querySelector('body');
let btnMenu = document.querySelector('.header__contacts-btn');
let btnOrder = document.querySelectorAll('.order-btn');
let popupOrder = document.querySelector('.popup-order');
let popupThanks = document.querySelector('.popup-thanks');
let popupProduct = document.querySelector('.popup-product');

btnMenu.addEventListener('click', function () {
    headerPage.classList.remove('is-active');
    popupOrder.classList.add('is-active');
    body.classList.add('no-scroll');
    if (popupOrder.classList.contains('is-active')) {
        body.addEventListener('keydown', function (e) {
            if (e.keyCode === 27) {
                popupOrder.classList.remove('is-active');
                body.classList.remove('no-scroll');
            }
        })
    }
})
body.addEventListener('click', function (a) {
    let target = a.target;
    if (target.classList.contains('advantages-products__img')) {
        popupProduct.classList.add('is-active');
        body.classList.add('no-scroll');
        headerPage.classList.remove('is-active');
        if (popupProduct.classList.contains('is-active')) {
            body.addEventListener('keydown', function (e) {
                if (e.keyCode === 27) {
                    popupProduct.classList.remove('is-active');
                    body.classList.remove('no-scroll');
                }
            })
        }
    }
    if (target.classList.contains('popup__inner') || target.classList.contains('popup-close')) {
        popupOrder.classList.remove('is-active');
        popupThanks.classList.remove('is-active');
        popupProduct.classList.remove('is-active');
        body.classList.remove('no-scroll');
    }
    if (target.classList.contains('order-btn')) {
        a.preventDefault();
        popupOrder.classList.remove('is-active');
        popupThanks.classList.add('is-active');
        body.classList.add('no-scroll');
        headerPage.classList.remove('is-active');
        if (popupThanks.classList.contains('is-active')) {
            body.addEventListener('keydown', function (e) {
                if (e.keyCode === 27) {
                    popupThanks.classList.remove('is-active');
                    body.classList.remove('no-scroll');
                }
            })
        }
    }
})



//inputFile
let file = document.querySelector(".order-form__file");
let chooseFile = document.querySelector(".order-form__input-file");
file.addEventListener("click", function (e) {
    e.preventDefault();
    chooseFile.style.display = 'block';
})


$(function () {
    //gallery
    $('.section-gallery__inner').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },
    });


    ymaps.ready(function () {
        var myMap = new ymaps.Map('map', {
            center: [59.927265, 30.323468],
            zoom: 10
        }, {
            searchControlProvider: 'yandex#search'
        }),

            // Creating a content layout.
            MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
                '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
            ),

            myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
                hintContent: 'Наш офис',
                balloonContent: 'Наш офис'
            }, {
                /**
                 * Options.
                 * You must specify this type of layout.
                 */
                iconLayout: 'default#image',
                // Custom image for the placemark icon.
                // iconImageHref: 'images/myIcon.gif',
                // The size of the placemark.
                iconImageSize: [30, 42],
                /**
                 * The offset of the upper left corner of the icon relative
                 * to its "tail" (the anchor point).
                 */
                iconImageOffset: [-5, -38]
            }),

            myPlacemarkWithContent = new ymaps.Placemark([55.661574, 37.573856], {
                hintContent: 'A custom placemark icon with contents',
                balloonContent: 'This one — for Christmas',
                iconContent: '12'
            }, {
                /**
                 * Options.
                 * You must specify this type of layout.
                 */
                iconLayout: 'default#imageWithContent',
                // Custom image for the placemark icon.
                // iconImageHref: 'images/ball.png',
                // The size of the placemark.
                iconImageSize: [48, 48],
                /**
                 * The offset of the upper left corner of the icon relative
                 * to its "tail" (the anchor point).
                 */
                iconImageOffset: [-24, -24],
                // Offset of the layer with content relative to the layer with the image.
                iconContentOffset: [15, 15],
                // Content layout.
                iconContentLayout: MyIconContentLayout
            });

        myMap.geoObjects
            .add(myPlacemark)
            .add(myPlacemarkWithContent);
        myMap.behaviors.disable('scrollZoom');
    });

});

//menu

let menu = document.querySelector(".header__bottom");
let hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("is-active");
    menu.classList.toggle("is-active");
})

