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

'use strict';

// Возьмите свой код из предыдущей практики
document.addEventListener('DOMContentLoaded', () => {

  const fAddMovie = (_e) => {
    _e.preventDefault();
    const vInput = document.querySelector('form.add .adding__input');
    const vElementFavorite = document.querySelector('form.add [type="checkbox"]');
    const vIsFavorite = vElementFavorite.checked;
    // console.log(vFavorite);
    let vValue = vInput.value.trim();
    
    if (vValue.length < 1) return;
    if (vValue.length > 21 ) vValue = vValue.slice(0, 21) + '...';
    if (vIsFavorite === true) console.log("Добавляем любимый фильм");

    movieDB.movies.push( vValue );
    fSortMovies();
    fSetEvents_DelMovie();
    // vInput.value = '';
    // vElementFavorite.checked = false;
    _e.target.reset();
  };

  // const btnAddMovie = document.querySelector('form.add button');
  // btnAddMovie.addEventListener('click', fOnClickAddMovie );
  const formAddMovie = document.querySelector('form.add');
  formAddMovie.addEventListener('submit', fAddMovie );

  fSetEvents_DelMovie();

  function fSetEvents_DelMovie() {
    const vDelButtons = document.querySelectorAll('.promo__interactive-list .delete');
    if (vDelButtons.length === 0) return;
    vDelButtons.forEach( (v, i) => v.addEventListener('click', ()=> {
      movieDB.movies.splice(i, 1);
      fSortMovies();
      fSetEvents_DelMovie();
      })
    );
  }

});
