/*1. создайте массив из 25 сгенерированных объектов */
let comments = [ 'Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.', 
'Моя бабушка случайно чихнула с фотоаппаратом в руках', 'и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат, на кота и у меня получилась фотография лучше.',
'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];
let description = [ 'Тестим новую камеру!', 'Затусили с друзьями на море', 'Как же круто тут кормят', 'Отдыхаем...', 
'Цените каждое мгновенье. Цените тех, кто рядом с вами и отгоняйте все сомненья. Не обижайте всех словами......', 'Вот это тачка!'];

let pictures = [];

function GeneratePicture (url, likes, comments, description) {
	this.url = url;
	this.likes = likes;
	this.comments = comments;
	this.description = description;
};

function randomInteger (min, max) {
  // случайное число от min до (max+1)
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

for (let i = 0; i < 25; i++) {
	pictures.push(
		new GeneratePicture(
			`photos/${i+1}.jpg`,
			randomInteger(1, 200), 
			comments[randomInteger(0, 6)], 
			description[randomInteger(0, 4)]
			)
		);
}

function addPictures () {
	let fragment = new DocumentFragment();

	for (let i=0; i<pictures.length; i++) {
		let a = document.createElement('a');
		a.classList.add('picture');
		
		let img = document.createElement('img');
		img.src = pictures[i].url;
		img.width = '182';
		img.height = '182';
		img.alt = pictures[i].description;

		let stats = document.createElement('span');
		stats.classList.add('picture-stats');

		let comment = document.createElement('span');
		comment.classList.add('picture-stat');
		comment.classList.add('picture-comments');
		comment.textContent = pictures[i].comments;

		let like = document.createElement('span');
		like.classList.add('picture-stat');
	  like.classList.add('picture-likes');
	  like.textContent = pictures[0].likes;

		fragment.append(a);
		a.append(img);
		a.append(stats);
		stats.append(comment);
		stats.append(like);
	}

	return fragment;
}

document.querySelector('.pictures').append(addPictures());

//document.querySelector('.big-picture').classList.remove('hidden');

/*
<div class="gallery-overlay hidden">
  <span class="gallery-overlay-close">&times;</span>
  <div class="gallery-overlay-preview">
    <img src="" class="gallery-overlay-image" alt="">
    <div class="gallery-overlay-controls">
      <div class="gallery-overlay-controls-like">Нравится <span class="likes-count">0</span></div>
      <div class="gallery-overlay-controls-comments"><span class="comments-count">125</span> комментариев</div>
    </div>
  </div>
</div>
*/


// let bigPicture = document.querySelector('.gallery-overlay');
// bigPicture.classList.remove('hidden');

// bigPicture.querySelector('img').src = pictures[0].url;
// bigPicture.querySelector('.likes-count').textContent = pictures[0].likes;

// посмотреть старый проект с заданием

console.log('Hello');
