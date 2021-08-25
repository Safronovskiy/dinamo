

let firstText =document.getElementsByClassName('first_text')[0]
let secondText = document.getElementsByClassName('second_text')[0]
let thirdText =document.getElementsByClassName('third_text')[0]
let firstTextRes =firstText
let secondTextRes =secondText
let thirdTextRes =thirdText
function initSlider(texts) {

	let elem = document.querySelector('.elem');
	let prev = document.querySelector('.prev');
	let next = document.querySelector('.next');
	
	let i = 0;
	elem.innerHTML = texts[i];
	
	next.addEventListener('click', function() {
		i++;
		if (i == texts.length) {
			i = 0;
		}
		elem.innerHTML = texts[i];
	});
	prev.addEventListener('click', function() {
		i--;
		if (i == -1) {
			i = texts.length - 1;
		}
		elem.innerHTML = texts[i];
	});
}
initSlider([`${firstTextRes.innerHTML} ${secondTextRes.innerHTML} ${thirdTextRes.innerHTML}`, `${firstTextRes.innerHTML} ${secondTextRes.innerHTML} ${thirdTextRes.innerHTML}`, 'text 3']);