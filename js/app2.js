/* Filter category */
const link = document.querySelectorAll('.works__filters-link');
const inners = document.querySelectorAll('.portfolio__inner');

/* 
   Перебераем массив, так как при использовании
   querySelectorAll событие, присвоение класса и получение data- атрибута не работает.
 */
for (let links of link) {
	links.addEventListener("click", function (event) {
		event.preventDefault();

		/* 
		Получаем значение атрибута data-filter, чтобы потом его  сравнить.
		 */
		let categorylinks = links.dataset.filter;
		/*
			Перебераем массив, так как при использовании
					querySelectorAll событие, присвоение класса и получение data-атрибута не работает.
		 */
		for (let inner of inners) {
			/*
			 Получаем значение атрибута data-cat, чтобы потом его  сравнить и использовать в условии.
			 */
			let dataLet = inner.dataset.cat;
			/* 
				Пишем условие, при котором будут оторажаться все карточки работ.
			*/
			if (categorylinks == "all") {
				inner.classList.remove("hide");
				/* 
					Пишем условие, при котором будет выдаваться класс тем карточкам работ, которые соответствуют условию.
				*/
			} else if (dataLet != categorylinks) {
				inner.classList.add('hide');
			} else {
				inner.classList.remove('hide');
			}

		}
	});
}


/* Modal */

const buttons = document.querySelectorAll('.js-button,.button,.nav__link.btn,.portfolio__item');
const closed = document.querySelectorAll('.close')
/* const modalDialog = document.querySelector('.modal__dialog'); */
/* Перебераем массив с кнопками */
buttons.forEach(element => {

	/* Вешаем событие на кнопки */
	element.addEventListener('click', function (e) {
		e.preventDefault();

		/* Получаем значение data-modal */
		let elementId = element.getAttribute('data-modal');
		console.log(elementId);

		/* Ищем нужный селектор с нужным data-modal */
		let modalElem = document.querySelector('.modal[data-modal="' + elementId + '"]');

		/* Добавляем класс нужному селектору для появления  нужного модального окна */
		modalElem.classList.add('hide');

		/* Убираем скролл у body при открытом модальном окне */
		document.body.classList.add('no-scroll');

		modalElem.addEventListener('click', function (e) {
			this.classList.remove('hide');
			document.body.classList.remove('no-scroll');
		});
		/* Убираем модальное окно нажатием клавиши Esc */
		document.body.addEventListener('keyup', function (e) {
			let key = e.keyCode;

			if (key == 27) {
				modalElem.classList.remove('hide');
				document.body.classList.remove('no-scroll');
			}
		});

		/* Закрытие модального окна кликом по маске */
		let modalDialog = document.querySelectorAll('.modal__dialog');

		modalDialog.forEach(element => {
			element.addEventListener('click', function (e) {
				e.stopPropagation();
			});

		});

		/* Крестик закрытия модального окна */
		closed.forEach(element => {
			element.addEventListener('click', function (e) {
				e.preventDefault();

				modalElem.classList.remove('hide');
				document.body.classList.remove('no-scroll');
			});
		});



	});



});


/* portfolio.forEach(element => {
	element.addEventListener('click', function (e) {
		e.preventDefault();
		console.log(123);

		element.classList.add
	});
}); */