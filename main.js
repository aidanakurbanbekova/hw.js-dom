// 1) Дан массив из объектов с полями
// title и text. Заполните массив сами произвольными данными.
// Ваша задача отрисовать данные на странице
// в соответствующих тегах
// (h2 - для title, p - для text)


// let dataArray = [
//     {title: "Title 1", text: "Text 1"},
//     {title: "Title 2", text: "Text 2"},
//     {title: "Title 3", text: "Text 3"}
// ];
//
// const container = document.getElementsByClassName("container")[0];
//
// dataArray.forEach(item => {
//     const h2 = document.createElement("h2");
//     const p = document.createElement("p");
//     h2.textContent = item.title;
//     p.textContent = item.text;
//
//     container.appendChild(h2);
//     container.appendChild(p);
// });



//  2************************************
//  Дан элемент. Сделайте так, чтобы по
//  клику на него он красился в красный цвет,
//  но только если в момент клика нажата клавиша
//  Ctrl

// let element = document.getElementsByClassName("element")[0];
// element.addEventListener("click", function(event) {
//     if (event.ctrlKey || event.metaKey) {
//         element.style.backgroundColor = "red";
//     }
// });

 // 3 *****************************************
 // 3) Дан элемент. Сделайте так, чтобы при клике на него и
 // нажатой клавише Ctrl - в его текст записывалось
 // '1', при нажатой клавише Alt - '2',
 // а при нажатой клавише Shift - '3'



// const element = document.getElementsByClassName("element1")[0];
// element.addEventListener("click", function(event) {
//     if (event.ctrlKey || event.metaKey) {
//         this.textContent = '1';
//     } else if (event.altKey) {
//         this.textContent = '2';
//     } else if (event.shiftKey) {
//         this.textContent = '3';
//     }
// });

 // 4************************************
 //  Даны абзацы с числами. То есть, несколько
 //  подобных элементов <p>1</p>. По нажатию на
 //  абзац в нем должен появится квадрат числа,
 //  которое он содержит.
// document.querySelectorAll('p').forEach(p => {
//     p.onclick = () => (p.innerText = Math.pow(+p.innerText, 2));
// });


// 5*********************************************
//  5) Даны картинки. Привяжите к каждой
//  картинке событие, чтобы по клику на картинку
//  в console.log выводился ее src.

// const images = document.querySelectorAll('img');
//
// images.forEach(image => {
//
//     image.addEventListener('click', function(e) {
//         console.log(e.target.src);
//     });
// });

//  6 ***************************************
//  Даны ссылки с заполненным href. Например
//  <a href="https://google.com">Сайт гугл</a>.
//  Привяжите всем ссылкам событие - по наведению
//  на ссылку в конец ее текста дописывается ее
//  href в круглых скобках.

