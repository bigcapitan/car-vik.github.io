document.addEventListener('DOMContentLoaded', () => {
    const sliderWrapper = document.querySelector('.slider__wrapper');
    const sliderItems = document.querySelectorAll('.slider__item');
    const prevButton = document.querySelector('.slider__arrow--prev');
    const nextButton = document.querySelector('.slider__arrow--next');

    let currentIndex = 0; // Текущий индекс слайда
    const totalSlides = sliderItems.length; // Общее количество слайдов

    // Функция для обновления позиции слайдера
    const updateSliderPosition = () => {
        const offset = -currentIndex * 100; // Смещение в процентах
        sliderWrapper.style.transform = `translateX(${offset}%)`;
    };

    // Обработчик для кнопки "Назад"
    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; // Переход к предыдущему слайду
        updateSliderPosition();
    });

    // Обработчик для кнопки "Вперёд"
    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % totalSlides; // Переход к следующему слайду
        updateSliderPosition();
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('commentsForm');
    const thankYouMessage = document.getElementById('thankYouMessage');
    const submitButton = document.getElementById('submitButton');
    const sectionTitle = document.querySelector('.comments__container h2'); // Заголовок секции

    submitButton.addEventListener('click', () => {
        form.style.display = 'none'; // Скрываем форму
        sectionTitle.style.display = 'none'; // Скрываем заголовок
        thankYouMessage.style.display = 'block'; // Показываем сообщение
    });
});