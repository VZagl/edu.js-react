
{// навигация относительно корневого объекта
  console.log(document.head);
  console.log(document.body);
  console.log(document.documentElement); // получить массив всех узлов
  // нода
  console.log(document.body.childNodes); // получить массив всех узлов из body
  console.log(document.body.firstChild); // первый
  console.log(document.body.lastChild); // последний
  // элемент
  console.log(document.body.firstElementChild); // первый
  console.log(document.body.lastElementChild); // последний
  // childElements - отсутствует
  // можно реализовать самостоятельно
  console.log( myChildElements(document.body.childNodes) );
  function myChildElements(_data) {
    console.log( '\n|>' );
    let vRes = [];
    for (let i of _data) {
      console.log( `\ti.nodeName=`, i.nodeName );
      if (i.nodeName !== '#text') {
        console.log( `\t+` );
        vRes.push(i);
      }
    }
    console.log( '<|\n' );
    return vRes;
  }
}


{// навигация относительно любого элемента/ноды
  // навигация относительно элемента с id="current"
  const vEl = document.querySelector('#current');
  // нода
  console.log(vEl.parentNode); // родитель
  console.log(vEl.parentNode.parentNode); // родитель родителя
  console.log(vEl.previousSibling); // предыдущая
  console.log(vEl.nextSibling); // следующая
  // элемент
  console.log(vEl.parentElement); // родитель
  console.log(vEl.parentElement.parentElement); // родитель родителя
  console.log(vEl.previousElementSibling); // предыдущий
  console.log(vEl.nextElementSibling); // следующий
}


{// навигация относительно элемента с data-атрибутом
  const vEl = document.querySelector('[data-current="3"]');
  console.log(vEl.nextElementSibling);
}
