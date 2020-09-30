/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

document.addEventListener("DOMContentLoaded", () => {



const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против...",
        "Пролетая над гнездом..."
    ]
};

const adv            = document.querySelectorAll(".promo__adv img"),
      back           = document.querySelector(".promo__bg"),
      genre          = back.querySelector(".promo__genre"),
      interactive    = document.querySelector(".promo__interactive"),
      addMovieButton = interactive.querySelector(".promo__interactive .add button"),
      inputWork      = interactive.querySelector('.promo__interactive .add input[type="text"]'),
      checkBox       = interactive.querySelector("input[type='checkbox']"),
      MoviesList     = interactive.querySelector(".promo__interactive-list");


const deleteADV = (arg) => {
    arg.forEach(item => {
        item.remove();
    });
};


const makeChanges = () => {
    back.style.backgroundImage = "url(img/bg.jpg)";
    genre.textContent = "ДРАМА";
};


function createaListfromDB(DB) {
    MoviesList.innerHTML = "";
    for (let i = 0; i < DB.length; i++) {
            MoviesList.innerHTML += `
            <li class="promo__interactive-item"> ${i+1}. ${DB.sort()[i]}
                <div class="delete"></div>
            </li>`;
        }
    document.querySelectorAll(".delete").forEach((btn, i) => {
        btn.addEventListener("click", () => {
            btn.parentElement.remove();
            movieDB.movies.splice(i, 1);
            createaListfromDB(movieDB.movies);
        });
    });
}

addMovieButton.addEventListener("click", (e) => {

    e.preventDefault();
    if (inputControl(inputWork.value)) {
        movieDB.movies[movieDB.movies.length] = inputControl(inputWork.value);
        if (checkBox.checked) {
            console.log("Adding new favorite movie");
        }
        inputWork.value = "";
        createaListfromDB(movieDB.movies);
        console.log(movieDB.movies);
        }
});

function inputControl(string) {
    if (string != "") {
        string = string[0].toUpperCase() + string.slice(1);
        if (string.length > 20) {
        string = `${string.slice(0,20)}...`;
    } } else {
        string = !!string;
    }
    return(string);
}

deleteADV(adv);
makeChanges();
createaListfromDB(movieDB.movies);

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