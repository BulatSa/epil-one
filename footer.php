<!-- Модальные окна -->
<div class="modals-sec">

	<div id="modal-call" class="modal modal--form">
		<div class="form">
			<div class="form__title">
				<p class="h3">Перезвоните мне</p>
				<span>Наш администратор обязательно свяжется с вами и ответит на все ваши вопросы</span>
			</div>
			<form class="ajax-form">
				<input type="text" name="user_name" placeholder="Ваше имя" data-label="Имя пользователя" class="input-text" >
				<input type="tel" name="user_tel" placeholder="Телефон*" data-label="Телефон"  class="input-text" data-req="true">
				<textarea name="user_comment" class="input-textarea" placeholder="Ваш вопрос" data-label="Вопрос"></textarea>
				<input type="hidden" value="Заказ обратного звонка" name="form_subject">
				<label class="style-checkbox">
					<input type="checkbox" name="user_policy" data-label="Согласен с условиями" value="yes" data-req="true" checked="">
					<span>Соглашаюсь на обработку персональных данных и соглашаюсь с условиями <a href="#" target="_blank">политики конфиденциальности</a></span>
				</label>
				<div class="btn-center">
					<button type="submit" class="btn radbtn">Отправить</button>
				</div>
			</form>
		</div>
	</div>

	<div id="modal-akcia" class="modal modal--form">
		<div class="form">
			<div class="form__title">
				<p class="h3">Участвовать в акции!</p>
				<span>Наш администратор обязательно свяжется с вами и ответит на все ваши вопросы</span>
			</div>
			<form class="ajax-form">
				<div class="datepicker">
					<div class="datepicker__calendar">
						<input class="datepicker-input input-text" type="text" placeholder="06.05.2018" name="user_date" data-label="Дата записи">
						<i class="i-calendar"></i>
					</div>
					<div class="datepicker__time">
						<input class="timepicker-input input-text" type="text" placeholder="15:00" name="user_time" data-label="Время записи">
						<i class="i-clock"></i>
					</div>
				</div>
				<input type="text" name="user_name" placeholder="Ваше имя" data-label="Имя пользователя" class="input-text" >
				<input type="tel" name="user_tel" placeholder="Телефон*" data-label="Телефон"  class="input-text" data-req="true">
				<textarea name="user_comment" class="input-textarea" placeholder="Ваш вопрос" data-label="Вопрос"></textarea>
				<input type="hidden" value="Участие в акции" name="form_subject">
				<label class="style-checkbox">
					<input type="checkbox" name="user_policy" data-label="Согласен с условиями" value="yes" data-req="true" checked="">
					<span>Соглашаюсь на обработку персональных данных и соглашаюсь с условиями <a href="#" target="_blank">политики конфиденциальности</a></span>
				</label>
				<div class="btn-center">
					<button type="submit" class="btn radbtn">Отправить</button>
				</div>
			</form>
		</div>
	</div>

	<div id="modal-record" class="modal modal--form">
		<div class="form">
			<div class="form__title">
				<p class="h3">Записаться онлайн</p>
				<span>Наш администратор обязательно свяжется с вами и ответит на все ваши вопросы</span>
			</div>
			<form class="ajax-form">
				<div class="datepicker">
					<div class="datepicker__calendar">
						<input class="datepicker-input input-text" type="text" placeholder="06.05.2018" name="user_date" data-label="Дата записи">
						<i class="i-calendar"></i>
					</div>
					<div class="datepicker__time">
						<input class="timepicker-input input-text" type="text" placeholder="15:00" name="user_time" data-label="Время записи">
						<i class="i-clock"></i>
					</div>
				</div>
				<input type="text" name="user_name" placeholder="Ваше имя" data-label="Имя пользователя" class="input-text" >
				<input type="tel" name="user_tel" placeholder="Телефон*" data-label="Телефон"  class="input-text" data-req="true">
				<textarea name="comment" class="input-textarea" placeholder="Ваш вопрос" data-label="Вопрос"></textarea>
				<input type="hidden" value="Новая заявка" name="form_subject">
				<label class="style-checkbox">
					<input type="checkbox" name="user_policy" data-label="Согласен с условиями" value="yes" data-req="true" checked="">
					<span>Соглашаюсь на обработку персональных данных и соглашаюсь с условиями <a href="#" target="_blank">политики конфиденциальности</a></span>
				</label>
				<div class="btn-center">
					<button type="submit" class="btn radbtn">Отправить</button>
				</div>
			</form>
		</div>
	</div>


	<div id="modal-thanks" class="modal modal--thanks">
		<img src="img/logo-thanks.svg" alt="">
		<div class="user-content">
			<p class="h3">Спасибо за заявку!</p>
			<p>Наш администратор обязательно свяжется с вами!</p>
		</div>
	</div>

	<div id="modal-social" class="modal modal--social">
		<div class="user-content">
			<p class="h3">Следите за нами в социальных сетях</p>
			<p>Спасибо, что дочитали до конца. Мы очень стараемся максимально просто и понятно рассказать про Лазерную Эпиляцию в нашем салоне EpilOne.<br>Подписывайтесь на наши социальные сети:</p>
		</div>
		<div class="modal-soc-list">
			<a href="#" target="_blank"><i class="i-soc-fb"></i></a>
			<a href="#" target="_blank"><i class="i-soc-insta"></i></a>
			<a href="#" target="_blank"><i class="i-soc-you"></i></a>
		</div>
		<div class="btn-center">
			<a href="#" class="btn" data-fancybox-close>Спасибо, но я уже с вами!</a>
		</div>
	</div>

	<div id="modal-error" class="modal">
		<p>Что-то пошло не так.</p>
		<p>Попробуйте еще раз.</p>
		<p>Если постоянно видите эту ошибку, пожалуйста, обратитесь к администратору сайта. Мы будем очень благодарны.</p>
	</div>

</div>
<!-- Модальные окна -->


<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="js/assets.js" type="text/javascript" ></script>
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAkPgTO8QdC0-DMpiduIS8qBUd9BLWDns0"></script>
<script src="js/main.js" type="text/javascript" ></script>

	</body>
</html>
