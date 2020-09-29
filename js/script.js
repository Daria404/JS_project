/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const adv            = document.querySelectorAll(".promo__adv img"),
      back           = document.querySelector(".promo__bg"),
      genre          = back.querySelector(".promo__genre"),
      addMovieButton = document.querySelector(".promo__interactive .add button"),
      inputWork      = document.querySelector('.promo__interactive .add input[type="text"]'),
      MoviesList     = document.querySelector(".promo__interactive-list");

adv.forEach(item => {
    item.remove();
});

back.style.backgroundImage = "url(img/bg.jpg)";
genre.textContent = "ДРАМА";
MoviesList.innerHTML = "";

for (let i = 0; i < movieDB.movies.length; i++) {
    MoviesList.innerHTML += `
    <li class="promo__interactive-item"> ${i+1}. ${movieDB.movies.sort()[i]}
        <div class="delete"></div>
    </li>`;
    
}

addMovieButton.addEventListener("click", () => {
    if (inputWork.value.length > 20) {
        let newMovie = `${inputWork.value.slice(0, 20)}...`;
        movieDB.movies[movieDB.movies.length] = newMovie;
    } else {
        movieDB.movies[movieDB.movies.length] = inputWork.value;
    }
    inputWork.value = "";
    console.log(movieDB.movies);
});





/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */