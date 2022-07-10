$(function(){
    $('body').on('click', function() {
        // Плавная анимация прокрутки до якоря
        $('.header__nav-list-item-link').on('click', function() {
            let itemId = $(this).attr('href');
            if (itemId == '#home') {
                $('html,body').stop().animate({ scrollTop: $(itemId).offset().top - 300 }, 1000);
            } else {
                $('html,body').stop().animate({ scrollTop: $(itemId).offset().top - 30 }, 1000);
            }
        });

        // Смена цвета ссылок при нажатии на якорь
        $('.header__nav-list-item-link').on('click', function() {
            $('.header__nav-list-item-link').removeClass('header__nav-list-item-link--active');
            let elem = event.path[0];
            $(elem).addClass('header__nav-list-item-link--active');
        });
        });

        $('body').on('click', function () {
        $('.RU').on('click', function() { 
            $('.ENG').removeClass('site-language--active');
            $(this).addClass('site-language--active');
            $('.header__nav').html(`<ul class="header__nav-list">
            <li class="header__nav-list-item">
                <a class="header__nav-list-item-link header__nav-list-item-link--active" href="#home">Главная</a>
            </li>
            <li class="header__nav-list-item">
                <a class="header__nav-list-item-link" href="#about">Обо мне</a>
            </li>
            <li class="header__nav-list-item">
                <a class="header__nav-list-item-link" href="#skills">Навыки</a>
            </li>
            <li class="header__nav-list-item">
                <a class="header__nav-list-item-link" href="#portfolio">Портфолио</a>
            </li>
            <li class="header__nav-list-item">
                <a class="header__nav-list-item-link" href="#contacts">Контакты</a> 
            </li>
            </ul>`);
            $('.home__text').html(`<div class="home__text-name">
        Денис
        <br>
        Новик
    </div>
    <div class="home__text-job">
        UX | UI дизайнер
        <br>
        24 года, Минск
    </div>
    <div class="home__text-translate">
        <span class="site-language site-language--active RU">RU</span>
        |
        <span class="site-language ENG">ENG</span>
            </div>`);
            $('.main__about').html(`<div class="container">
            <h3 class="about__title">
                Обо мне
            </h3>
            <p class="about__text">
                Привет, я Денис – UX/UI дизайнер из Минска.<br>
                Я интересуюсь дизайном и всеми вещами, связанными с ним.<br>
            </p>
            <p class="about__text">
                Я учусь на потоке "Веб и мобильный дизайн<br>
                интерфейсов" в IT-академии.<br>
            </p>
            <p class="about__text">
                Готов к получению опыта в новых проектах<br>
                с воодушевляющими людьми.<br>
            </p>
            </div>`);
            $('.main__skills').html(`<div class="container">
            <h3 class="skills__title">
                Навыки
            </h3>
            <p class="skills__text">
                Я работаю со следующими инструментами
            </p>
            <div class="skills__items">
                <div class="skills__items-item">
                    <img class="skills__items-item-img" src="images/icons-programs/photoshop.png">
                    <h6 class="skills__items-item-title">
                        Adobe
                        <br>
                        Photoshop
                    </h6>
                    <div class="skills__items-item-stars">
                        <span class="star--active">★</span>
                        <span class="star--active">★</span>
                        <span class="star--active">★</span>
                        <span class="star--active">★</span>
                        <span>★</span>
                    </div>
                </div>
                <div class="skills__items-item">
                    <img class="skills__items-item-img" src="images/icons-programs/illustrator.png">
                    <h6 class="skills__items-item-title">
                        Adobe
                        <br>
                        Illustrator
                    </h6>
                    <div class="skills__items-item-stars">
                        <span class="star--active">★</span>
                        <span class="star--active">★</span>
                        <span class="star--active">★</span>
                        <span>★</span>
                        <span>★</span>
                    </div>
                </div>
                <div class="skills__items-item">
                    <img class="skills__items-item-img" src="images/icons-programs/effects.png">
                    <h6 class="skills__items-item-title">
                        Adobe
                        <br>
                        After Effects
                    </h6>
                    <div class="skills__items-item-stars">
                        <span class="star--active">★</span>
                        <span class="star--active">★</span>
                        <span class="star--active">★</span>
                        <span class="star--active">★</span>
                        <span>★</span>
                    </div>
                </div>
                <div class="skills__items-item">
                    <img class="skills__items-item-img" src="images/icons-programs/xd.png">
                    <h6 class="skills__items-item-title">
                        Adobe
                        <br>
                        XD
                    </h6>
                    <div class="skills__items-item-stars">
                        <span class="star--active">★</span>
                        <span class="star--active">★</span>
                        <span class="star--active">★</span>
                        <span class="star--active">★</span>
                        <span class="star--active">★</span>
                    </div>
                </div>
            </div>
            </div>`);
            $('.main__portfolio').html(`<div class="container">
            <h3 class="portfolio__title">
                 Портфолио
            </h3>
            <div class="portfolio__item">
                <img class="portfolio__item-img" src="images/porfolio-cards/1.jpg" >
                <a class="portfolio__item-link" href="#">Online fashion store - Проект</a>
            </div>
            <div class="portfolio__item">
                <img class="portfolio__item-img" src="images/porfolio-cards/2.jpg" >
                <a class="portfolio__item-link" href="#">Reebok Store - Концепт</a>
            </div>
            <div class="portfolio__item">
                <img class="portfolio__item-img" src="images/porfolio-cards/3.jpg" >
                <a class="portfolio__item-link" href="#">Braun Landing Page - Концепт</a>
            </div>
            </div>`);
            $('.main__contacts').html(`            <div class="container">
            <h3 class="contacts__title">
                Контакты
            </h3>
            <p class="contacts__text">
                Хочешь узнать больше или пообщаться? <br>
                Добро пожаловать!
            </p>
            <button class="contacts__btn">
                Написать
            </button>
            <div class="contacts__social">
                <img class="contacts__social-img" src="images/icons-social/1.svg">
                <img class="contacts__social-img" src="images/icons-social/2.svg">
                <img class="contacts__social-img" src="images/icons-social/3.svg">
                <img class="contacts__social-img" src="images/icons-social/4.svg">
            </div>
            <p class="contacts__copyright">
                Лайкни меня <br>
                LinkedIn, Instagram, Behance, Dribble
            </p>
            </div>`);
        });
        $('.ENG').on('click', function() {
            $('.RU').removeClass('site-language--active');
            $(this).addClass('site-language--active');
            $('.header__nav').html(`<ul class="header__nav-list">
            <li class="header__nav-list-item">
                <a class="header__nav-list-item-link header__nav-list-item-link--active" href="#home">Home</a> 
            </li>
            <li class="header__nav-list-item">
                <a class="header__nav-list-item-link" href="#about">About me</a> 
            </li>
            <li class="header__nav-list-item">
                <a class="header__nav-list-item-link" href="#skills">Skills</a> 
            </li>
            <li class="header__nav-list-item">
                <a class="header__nav-list-item-link" href="#portfolio">Portfolio</a> 
            </li>
            <li class="header__nav-list-item">
                <a class="header__nav-list-item-link" href="#contacts">Contacts</a> 
            </li>
            </ul>`);
            $('.home__text').html(`<div class="home__text-name">
            Denis
            <br>
            Novik
        </div>
        <div class="home__text-job">
            UX | UI designer
            <br>
            24 years old, Minsk
        </div>
        <div class="home__text-translate">
            <span class="site-language RU">RU</span>
            |
            <span class="site-language site-language--active ENG">ENG</span>
            </div>`);
            $('.main__about').html(`<div class="container">
            <h3 class="about__title">
                About me
            </h3>
            <p class="about__text">
                Hi, I'm Denis – UX/UI designer from Minsk.<br>
                I'm interested in design and everything connected with it.<br>
            </p>
            <p class="about__text">
                I'm studying at courses "Web and mobile design<br>
                interfaces" in IT-Academy.<br>
            </p>
            <p class="about__text">
                Ready to implement excellent projects<br>
                with wonderful people.<br>
            </p>
            </div>`);
            $('.main__skills').html(`<div class="container">
            <h3 class="skills__title">
                Skills
            </h3>
            <p class="skills__text">
                I work in such programs as
            </p>
            <div class="skills__items">
                <div class="skills__items-item">
                    <img class="skills__items-item-img" src="images/icons-programs/photoshop.png">
                    <h6 class="skills__items-item-title">
                        Adobe
                        <br>
                        Photoshop
                    </h6>
                    <div class="skills__items-item-stars">
                        <span class="star--active">★</span>
                        <span class="star--active">★</span>
                        <span class="star--active">★</span>
                        <span class="star--active">★</span>
                        <span>★</span>
                    </div>
                </div>
                <div class="skills__items-item">
                    <img class="skills__items-item-img" src="images/icons-programs/illustrator.png">
                    <h6 class="skills__items-item-title">
                        Adobe
                        <br>
                        Illustrator
                    </h6>
                    <div class="skills__items-item-stars">
                        <span class="star--active">★</span>
                        <span class="star--active">★</span>
                        <span class="star--active">★</span>
                        <span>★</span>
                        <span>★</span>
                    </div>
                </div>
                <div class="skills__items-item">
                    <img class="skills__items-item-img" src="images/icons-programs/effects.png">
                    <h6 class="skills__items-item-title">
                        Adobe
                        <br>
                        After Effects
                    </h6>
                    <div class="skills__items-item-stars">
                        <span class="star--active">★</span>
                        <span class="star--active">★</span>
                        <span class="star--active">★</span>
                        <span class="star--active">★</span>
                        <span>★</span>
                    </div>
                </div>
                <div class="skills__items-item">
                    <img class="skills__items-item-img" src="images/icons-programs/xd.png">
                    <h6 class="skills__items-item-title">
                        Adobe
                        <br>
                        XD
                    </h6>
                    <div class="skills__items-item-stars">
                        <span class="star--active">★</span>
                        <span class="star--active">★</span>
                        <span class="star--active">★</span>
                        <span class="star--active">★</span>
                        <span class="star--active">★</span>
                    </div>
                </div>
            </div>
            </div>`);
            $('.main__portfolio').html(`<div class="container">
            <h3 class="portfolio__title">
                 Portfolio
            </h3>
            <div class="portfolio__item">
                <img class="portfolio__item-img" src="images/porfolio-cards/1.jpg" >
                <a class="portfolio__item-link" href="#">Online fashion store - Homepage</a>
            </div>
            <div class="portfolio__item">
                <img class="portfolio__item-img" src="images/porfolio-cards/2.jpg" >
                <a class="portfolio__item-link" href="#">Reebok Store - Concept</a>
            </div>
            <div class="portfolio__item">
                <img class="portfolio__item-img" src="images/porfolio-cards/3.jpg" >
                <a class="portfolio__item-link" href="#">Braun Landing Page - Concept</a>
            </div>
            </div>`);
            $('.main__contacts').html(`            <div class="container">
            <h3 class="contacts__title">
                Contacts
            </h3>
            <p class="contacts__text">
                Want to know more or just chat? <br>
                You are welcome!
            </p>
            <button class="contacts__btn">
                Send message
            </button>
            <div class="contacts__social">
                <img class="contacts__social-img" src="images/icons-social/1.svg">
                <img class="contacts__social-img" src="images/icons-social/2.svg">
                <img class="contacts__social-img" src="images/icons-social/3.svg">
                <img class="contacts__social-img" src="images/icons-social/4.svg">
            </div>
            <p class="contacts__copyright">
                Like me on <br>
                LinkedIn, Instagram, Behance, Dribble
            </p>
            </div>`);
        }); });
});