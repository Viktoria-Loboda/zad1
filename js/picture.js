let pictures = [];
let minCountObject = 1;
let maxCountObject = 25;
let urls = sortRandom(minCountObject, maxCountObject);
let comments = [ 'Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
'Лица у людей на фотке перекошены, как будто их избивают', 'Как можно было поймать такой неудачный момент?!'];
let descriptions = ['Тестим новую камеру!', 'Затусили с друзьями на море', 'Как же круто тут кормят', 'Отдыхаем...', 'Цените каждое мгновенье. Цените тех, кто рядом с вами и отгоняйте все сомненья. Не обижайте всех словами......', 'Вот это тачка!'];

function getRandom(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function sortRandom(min, max) {
	let arr = [];
	let arrItem;

	while (arr.length !== max) {
		arrItem = getRandom(min, max);

		if (arr.indexOf(arrItem) == -1) {
			arr.push(arrItem);
		}	
	}

	return arr;
}

function GenerateObject(url, like, comment, description) {
	this.url = `photos/${url}.jpg`;
	this.like = like;
	this.comment = comment;
	this.description = description;
}

for (let i=0; i < maxCountObject; i++) {
	pictures.push(
		new GenerateObject(
			urls[i],
			getRandom(15, 200),
			comments[getRandom(0, comments.length-1)],
			descriptions[getRandom(0, descriptions.length-1)],
		)
	)
}

let template = document.querySelector('#picture-template').content.querySelector('a');

function renderObject(picture) {
	let pictureElement = template.cloneNode(true);
	pictureElement.querySelector('img').src = picture.url;
	pictureElement.querySelector('.picture-likes').textContent = picture.like;
	pictureElement.querySelector('.picture-comments').textContent = picture.comment;

	return pictureElement;
}

let fragment = document.createDocumentFragment();

for (let i=0; i < pictures.length; i++) {
	fragment.appendChild(renderObject(pictures[i]));
}

document.querySelector('.pictures').append(fragment);

// 4-ое задание 
//1. при наступлении собия change на поле с id #upload-file дожна появляться форма редактирования 
let uploadFile = document.querySelector('#upload-file');
let uploadOverlay = document.querySelector('.upload-overlay');
let uploadCancel = document.querySelector('#upload-cancel');

function buttonClickHandler(element, className) {
	element.classList.toggle(className);
}

uploadFile.onchange = function() {
	buttonClickHandler(uploadOverlay, 'hidden');
};

//2. при закрытии формы редактирования должно очищаться и само поле (при попытке выбрать ту же самую фотографию обработчик работать не будет) !!! доделать

uploadCancel.onclick = function() {
	buttonClickHandler(uploadOverlay, 'hidden');
	console.log('gu');
}

//3. при нажатии на маленькую картинку должно открываться её большая версия /// доделать 
let smallPicture = document.querySelectorAll('.picture');

for (let i=0; i < smallPicture.length; i++) {
	smallPicture[i].onclick = function(evt) {
		console.log(pictures[i]);

		return false;
	}
}

// показывает большую картинку

// let bigPicture = document.querySelector('.gallery-overlay');
// bigPicture.classList.remove('hidden');
// bigPicture.querySelector('img').src = pictures[0].url;
// bigPicture.querySelector('.likes-count').textContent = pictures[0].like;
// //bigPicture.querySelector('.comments-count').textContent = pictures[0].comment;

// let block = document.querySelector('.gallery-overlay-preview');
// let commentTemplate = document.querySelector('#comment-template').content.querySelector('.social__comment--text');

// function renderComment(picture) {
// 	let element = commentTemplate.cloneNode(true);
// 	element.querySelector('.social__picture').src = picture.url;
// 	element.querySelector('.social__text').textContent = picture.comment;

// 	return element;
// }

// let fragmentsss = document.createDocumentFragment();

// for (let i=0; i < 6; i++) {
// 	fragmentsss.appendChild(renderComment(pictures[i]));
// }

// document.querySelector('.gallery-overlay-controls').append(fragmentsss);

/*
1. при наступлении собия change на поле с id #upload-file дожна появляться форма редактирования 
2. при закрытии формы редактирования должно очищаться и само поле (при попытке выбрать ту же самую фотографию обработчик работать не будет)
3. при нажатии на маленькую картинку должно открываться её большая версия
4. валидация хэш тегов!!!!!
*/