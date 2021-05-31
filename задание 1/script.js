function f(elem) {
	var p = elem.scr.replace('small', 'big');
	var b = document.getElementById("big");
	b.src = p;
}

function ImageError() {
	document.querySelector('.top').innerHTML='Нет подходящего изображения'
}