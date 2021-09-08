
// To mobile screen slider
let firstText =document.getElementsByClassName('first_text')[0]
let secondText = document.getElementsByClassName('second_text')[0]
let thirdText =document.getElementsByClassName('third_text')[0]
let firstTextRes =firstText
let secondTextRes =secondText
let thirdTextRes =thirdText

let firstText1 =document.getElementsByClassName('first_text1')[0]
let secondText1 = document.getElementsByClassName('second_text1')[0]
let thirdText1 =document.getElementsByClassName('third_text1')[0]
let firstTextRes1 =firstText1
let secondTextRes1 =secondText1
let thirdTextRes1 =thirdText1
//
let firstText2 =document.getElementsByClassName('first_text2')[0]
let secondText2 = document.getElementsByClassName('second_text2')[0]
let thirdText2 =document.getElementsByClassName('third_text2')[0]
let firstTextRes2 =firstText2
let secondTextRes2 =secondText2
let thirdTextRes2 =thirdText2
//
let firstText3 =document.getElementsByClassName('first_text3')[0]
let secondText3 = document.getElementsByClassName('second_text3')[0]
let thirdText3 =document.getElementsByClassName('third_text3')[0]
let firstTextRes3 =firstText3
let secondTextRes3 =secondText3
let thirdTextRes3 =thirdText3
//
let firstText4 =document.getElementsByClassName('first_text4')[0]
let secondText4 = document.getElementsByClassName('second_text4')[0]
let thirdText4 =document.getElementsByClassName('third_text4')[0]
let firstTextRes4 =firstText4
let secondTextRes4 =secondText4
let thirdTextRes4 =thirdText4




function initSlider(texts) {

	let elem = document.querySelector('.elem');
	let prev = document.querySelector('.prev');
	let next = document.querySelector('.next');
	 let circle5 =document.querySelector('.circle5');
	 let circle1 =document.querySelector('.circle1');
	let circle2 =document.querySelector('.circle2');
	let circle3 =document.querySelector('.circle3');
	let circle4 =document.querySelector('.circle4');
	let circle5_little =document.querySelector('.circle5_little')
	let circle1_little =document.querySelector('.circle1_little')
	let circle2_little =document.querySelector('.circle2_little')
	let circle3_little =document.querySelector('.circle3_little')
	let circle4_little =document.querySelector('.circle4_little')
	let i = 0;
	elem.innerHTML = texts[i];

	next.addEventListener('click', function() {
		if (i == texts.length - 1) {
			return
		}
		i++
	 	 circle1.classList.remove('active_circle')
		circle1.classList.add('circle')
		circle1_little.classList.remove('active_circle_little')
		circle1_little.classList.add('circle_little')  
        prev.classList.remove('block')
        if (i == texts.length - 1){
            next.classList.add('block')
        }
		elem.innerHTML=texts[i]
		if(i === 1){
			circle5.classList.add('active_circle')
		circle5_little.classList.add('active_circle_little')
		} else {
			circle5.classList.remove('active_circle')
		circle5_little.classList.remove('active_circle_little')
		}
		if(i === 2){
			circle2.classList.add('active_circle')
			circle2_little.classList.add('active_circle_little')
		} else{
			circle2.classList.remove('active_circle')
			circle2_little.classList.remove('active_circle_little')
		}
		if(i === 3){
			circle3.classList.add('active_circle')
			circle3_little.classList.add('active_circle_little')
		}
		else{
			circle3.classList.remove('active_circle')
			circle3_little.classList.remove('active_circle_little')
		}
		if(i === 4){
			circle4.classList.add('active_circle')
			circle4_little.classList.add('active_circle_little')
		}
		else{
			circle4.classList.remove('active_circle')
			circle4_little.classList.remove('active_circle_little')
		}
	});
	prev.addEventListener('click', function() {
				
		if (i == 0) {
		    return
		}
        i--
        next.classList.remove('block')
        if (i == 0){
            prev.classList.add('block')
			circle1.classList.add('active_circle')
		    circle1_little.classList.add('active_circle_little')
        }
		if(i === 1){
			circle5.classList.add('active_circle')
		circle5_little.classList.add('active_circle_little')
		} else {
			circle5.classList.remove('active_circle')
		circle5_little.classList.remove('active_circle_little')
		}
		if(i === 2){
			circle2.classList.add('active_circle')
			circle2_little.classList.add('active_circle_little')
		} else{
			circle2.classList.remove('active_circle')
			circle2_little.classList.remove('active_circle_little')
		}
		if(i === 3){
			circle3.classList.add('active_circle')
			circle3_little.classList.add('active_circle_little')
		}
		else{
			circle3.classList.remove('active_circle')
			circle3_little.classList.remove('active_circle_little')
		}
		if(i === 4){
			circle4.classList.add('active_circle')
			circle4_little.classList.add('active_circle_little')
		}
		else{
			circle4.classList.remove('active_circle')
			circle4_little.classList.remove('active_circle_little')
		}
		elem.innerHTML = texts[i];
	
	});
}
initSlider([ `<p class='first_text'>${firstTextRes.innerHTML}</p> <p class='second_text'>${secondTextRes.innerHTML}</p>  <p class='third_text'>${thirdTextRes.innerHTML}`, `<p class='first_text'>${firstTextRes1.innerHTML}</p> <p class='second_text'>${secondTextRes1.innerHTML}</p> <p class='third_text'>${thirdTextRes1.innerHTML}</p>`, `<p class='first_text'>${firstTextRes2.innerHTML}</p> <p class='second_text'>${secondTextRes2.innerHTML}</p> <p class='third_text'>${thirdTextRes2.innerHTML}</p>`, `<p class='first_text'>${firstTextRes3.innerHTML}</p> <p class='second_text'>${secondTextRes3.innerHTML}</p> <p class='third_text'>${thirdTextRes3.innerHTML}</p>`,`<p class='first_text'>${firstTextRes4.innerHTML}</p> <p class='second_text'>${secondTextRes4.innerHTML}</p> <p class='third_text'>${thirdTextRes4.innerHTML}</p>`]);
initSlider2([ `<p class='first_text'>${firstTextRes.innerHTML}</p> <p class='second_text'>${secondTextRes.innerHTML}</p>  <p class='third_text'>${thirdTextRes.innerHTML}`, `<p class='first_text'>${firstTextRes1.innerHTML}</p> <p class='second_text'>${secondTextRes1.innerHTML}</p> <p class='third_text'>${thirdTextRes1.innerHTML}</p>`, `<p class='first_text'>${firstTextRes2.innerHTML}</p> <p class='second_text'>${secondTextRes2.innerHTML}</p> <p class='third_text'>${thirdTextRes2.innerHTML}</p>`, `<p class='first_text'>${firstTextRes3.innerHTML}</p> <p class='second_text'>${secondTextRes3.innerHTML}</p> <p class='third_text'>${thirdTextRes3.innerHTML}</p>`,`<p class='first_text'>${firstTextRes4.innerHTML}</p> <p class='second_text'>${secondTextRes4.innerHTML}</p> <p class='third_text'>${thirdTextRes4.innerHTML}</p>`]);
//click on circle

function initSlider2(text){
		let circle= document.querySelector('.circle');
		let circle2 =document.querySelector('.circle2');
		let circle3 =document.querySelector('.circle3');
		let circle4 =document.querySelector('.circle4');
		let circle5 =document.querySelector('.circle5');
		let elem = document.querySelector('.elem');
		let circle1= document.querySelector('.circle1')
		   let circle_little= document.querySelector('.circle_little')
		   let circle2_little= document.querySelector('.circle2_little')
		   let circle3_little= document.querySelector('.circle3_little')
		   let circle4_little= document.querySelector('.circle4_little')
		   let circle5_little= document.querySelector('.circle5_little')
		   let circle1_little= document.querySelector('.circle1_little')
		   let j = 0;
	      elem.innerHTML = text[j];
		  circle1.addEventListener('click',function(){
			cleanCircle()
			circle1.classList.add('active_circle')
			circle1_little.classList.add('active_circle_little')
			elem.innerHTML = text[0];
		})
	circle2.addEventListener('click',function(){
		cleanCircle()
		circle2.classList.add('active_circle')
		circle2_little.classList.add('active_circle_little')
		elem.innerHTML = text[2];
	})
	circle3.addEventListener('click',function(){
		cleanCircle()
		circle3.classList.add('active_circle')
		circle3_little.classList.add('active_circle_little')
		elem.innerHTML = text[3];
	})
	
	circle4.addEventListener('click',function(){
		cleanCircle()
		circle4.classList.add('active_circle')
		circle4_little.classList.add('active_circle_little')
		elem.innerHTML = text[4];
	})
	circle5.addEventListener('click',function(){
		cleanCircle()
		circle5.classList.add('active_circle')
		circle5_little.classList.add('active_circle_little')
		elem.innerHTML = text[1];
	})
}

function cleanCircle(){
	const circle = document.querySelector('.active_circle')
	const little_circle =document.querySelector('.active_circle_little')

		circle.classList.remove('active_circle')
		little_circle.classList.remove('active_circle_little')
}


// To mobile screen slider
let firstText_hidden =document.getElementsByClassName('first_text_hidden')[0]
let secondText_hidden = document.getElementsByClassName('second_text_hidden')[0]
let thirdText_hidden =document.getElementsByClassName('third_text_hidden')[0]
let firstTextRes_hidden =firstText_hidden
let secondTextRes_hidden =secondText_hidden
let thirdTextRes_hidden =thirdText_hidden

let firstText1_hidden =document.getElementsByClassName('first_text1_hidden')[0]
let secondText1_hidden = document.getElementsByClassName('second_text1_hidden')[0]
let thirdText1_hidden =document.getElementsByClassName('third_text1_hidden')[0]
let firstTextRes1_hidden =firstText1_hidden
let secondTextRes1_hidden =secondText1_hidden
let thirdTextRes1_hidden =thirdText1_hidden
//
let firstText2_hidden =document.getElementsByClassName('first_text2_hidden')[0]
let secondText2_hidden = document.getElementsByClassName('second_text2_hidden')[0]
let thirdText2_hidden =document.getElementsByClassName('third_text2_hidden')[0]
let firstTextRes2_hidden =firstText2_hidden
let secondTextRes2_hidden =secondText2_hidden
let thirdTextRes2_hidden =thirdText2_hidden
//
let firstText3_hidden =document.getElementsByClassName('first_text3_hidden')[0]
let secondText3_hidden = document.getElementsByClassName('second_text3_hidden')[0]
let thirdText3_hidden =document.getElementsByClassName('third_text3_hidden')[0]
let firstTextRes3_hidden =firstText3_hidden
let secondTextRes3_hidden =secondText3_hidden
let thirdTextRes3_hidden =thirdText3_hidden
//
let firstText4_hidden =document.getElementsByClassName('first_text4_hidden')[0]
let secondText4_hidden = document.getElementsByClassName('second_text4_hidden')[0]
let thirdText4_hidden =document.getElementsByClassName('third_text4_hidden')[0]
let firstTextRes4_hidden =firstText4_hidden
let secondTextRes4_hidden =secondText4_hidden
let thirdTextRes4_hidden =thirdText4_hidden




function initSlider_hidden(texts_hidden) {

	let elem_hidden = document.querySelector('.elem_hidden');
	let prev_hidden = document.querySelector('.prev_hidden');
	let next_hidden = document.querySelector('.next_hidden');
	 let circle5_hidden =document.querySelector('.circle5_hidden');
	 let circle1_hidden =document.querySelector('.circle1_hidden');
	let circle2_hidden =document.querySelector('.circle2_hidden');
	let circle3_hidden =document.querySelector('.circle3_hidden');
	let circle4_hidden =document.querySelector('.circle4_hidden');
	let circle5_little_hidden =document.querySelector('.circle5_little_hidden')
	let circle1_little_hidden =document.querySelector('.circle1_little_hidden')
	let circle2_little_hidden =document.querySelector('.circle2_little_hidden')
	let circle3_little_hidden =document.querySelector('.circle3_little_hidden')
	let circle4_little_hidden =document.querySelector('.circle4_little_hidden')
	let q = 0;
	elem_hidden.innerHTML = texts_hidden[q];

	next_hidden.addEventListener('click', function() {
		if (q == texts_hidden.length - 1) {
			return
		}
		q++
	 	 circle1_hidden.classList.remove('active_circle_hidden')
		circle1_hidden.classList.add('circle_hidden')
		circle1_little_hidden.classList.remove('active_circle_little_hidden')
		circle1_little_hidden.classList.add('circle_little_hidden')  
        prev_hidden.classList.remove('block_hidden')
        if (q == texts_hidden.length - 1){
            next_hidden.classList.add('block_hidden')
			
        }
		elem_hidden.innerHTML=texts_hidden[q]
		if(q === 1){
			circle5_hidden.classList.add('active_circle_hidden')
		circle5_little_hidden.classList.add('active_circle_little_hidden')
		} else {
			circle5_hidden.classList.remove('active_circle_hidden')
		circle5_little_hidden.classList.remove('active_circle_little_hidden')
		}
		if(q === 2){
			circle2_hidden.classList.add('active_circle_hidden')
			circle2_little_hidden.classList.add('active_circle_little_hidden')
		} else{
			circle2_hidden.classList.remove('active_circle_hidden')
			circle2_little_hidden.classList.remove('active_circle_little_hidden')
		}
		if(q === 3){
			circle3_hidden.classList.add('active_circle_hidden')
			circle3_little_hidden.classList.add('active_circle_little_hidden')
		}
		else{
			circle3_hidden.classList.remove('active_circle_hidden')
			circle3_little_hidden.classList.remove('active_circle_little_hidden')
		}
		if(q === 4){
			circle4_hidden.classList.add('active_circle_hidden')
			circle4_little_hidden.classList.add('active_circle_little_hidden')
		}
		else{
			circle4_hidden.classList.remove('active_circle_hidden')
			circle4_little_hidden.classList.remove('active_circle_little_hidden')
		}
	});
	prev_hidden.addEventListener('click', function() {
				
		if (q == 0) {
		    return
		}
        q--
        next_hidden.classList.remove('block_hidden')
        if (q == 0){
            prev_hidden.classList.add('block_hidden')
			circle1_hidden.classList.add('active_circle_hidden')
		    circle1_little_hidden.classList.add('active_circle_little_hidden')
        }
		if(q === 1){
			circle5_hidden.classList.add('active_circle_hidden')
		circle5_little_hidden.classList.add('active_circle_little_hidden')
		} else {
			circle5_hidden.classList.remove('active_circle_hidden')
		circle5_little_hidden.classList.remove('active_circle_little_hidden')
		}
		if(q === 2){
			circle2_hidden.classList.add('active_circle_hidden')
			circle2_little_hidden.classList.add('active_circle_little_hidden')
		} else{
			circle2_hidden.classList.remove('active_circle_hidden')
			circle2_little_hidden.classList.remove('active_circle_little_hidden')
		}
		if(q === 3){
			circle3_hidden.classList.add('active_circle_hidden')
			circle3_little_hidden.classList.add('active_circle_little_hidden')
		}
		else{
			circle3_hidden.classList.remove('active_circle_hidden')
			circle3_little_hidden.classList.remove('active_circle_little_hidden')
		}
		if(q === 4){
			circle4_hidden.classList.add('active_circle_hidden')
			circle4_little_hidden.classList.add('active_circle_little_hidden')
		}
		else{
			circle4_hidden.classList.remove('active_circle_hidden')
			circle4_little_hidden.classList.remove('active_circle_little_hidden')
		}
		elem_hidden.innerHTML = texts_hidden[q];
	
	});
}
initSlider_hidden([ `<p class='first_text'>${firstTextRes_hidden.innerHTML}</p> <p class='second_text'>${secondTextRes_hidden.innerHTML}</p>  <p class='third_text'>${thirdTextRes_hidden.innerHTML}`, `<p class='first_text'>${firstTextRes1_hidden.innerHTML}</p> <p class='second_text'>${secondTextRes1_hidden.innerHTML}</p> <p class='third_text'>${thirdTextRes1_hidden.innerHTML}</p>`, `<p class='first_text'>${firstTextRes2_hidden.innerHTML}</p> <p class='second_text'>${secondTextRes2_hidden.innerHTML}</p> <p class='third_text'>${thirdTextRes2_hidden.innerHTML}</p>`, `<p class='first_text'>${firstTextRes3_hidden.innerHTML}</p> <p class='second_text'>${secondTextRes3_hidden.innerHTML}</p> <p class='third_text'>${thirdTextRes3_hidden.innerHTML}</p>`,`<p class='first_text'>${firstTextRes4_hidden.innerHTML}</p> <p class='second_text'>${secondTextRes4_hidden.innerHTML}</p> <p class='third_text'>${thirdTextRes4_hidden.innerHTML}</p>`]);
initSlider2_hidden([ `<p class='first_text'>${firstTextRes.innerHTML}</p> <p class='second_text'>${secondTextRes.innerHTML}</p>  <p class='third_text'>${thirdTextRes.innerHTML}`, `<p class='first_text'>${firstTextRes1.innerHTML}</p> <p class='second_text'>${secondTextRes1.innerHTML}</p> <p class='third_text'>${thirdTextRes1.innerHTML}</p>`, `<p class='first_text'>${firstTextRes2.innerHTML}</p> <p class='second_text'>${secondTextRes2.innerHTML}</p> <p class='third_text'>${thirdTextRes2.innerHTML}</p>`, `<p class='first_text'>${firstTextRes3.innerHTML}</p> <p class='second_text'>${secondTextRes3.innerHTML}</p> <p class='third_text'>${thirdTextRes3.innerHTML}</p>`,`<p class='first_text'>${firstTextRes4.innerHTML}</p> <p class='second_text'>${secondTextRes4.innerHTML}</p> <p class='third_text'>${thirdTextRes4.innerHTML}</p>`]);
/////click on circle
function initSlider2_hidden(text_hidden){
		let circle_hidden= document.querySelector('.circle_hidden');
		let circle2_hidden =document.querySelector('.circle2_hidden');
		let circle3_hidden =document.querySelector('.circle3_hidden');
		let circle4_hidden =document.querySelector('.circle4_hidden');
		let circle5_hidden =document.querySelector('.circle5_hidden');
		let elem_hidden = document.querySelector('.elem_hidden');
		let circle1_hidden= document.querySelector('.circle1_hidden')
		   let circle_little_hidden= document.querySelector('.circle_little_hidden')
		   let circle2_little_hidden= document.querySelector('.circle2_little_hidden')
		   let circle3_little_hidden= document.querySelector('.circle3_little_hidden')
		   let circle4_little_hidden= document.querySelector('.circle4_little_hidden')
		   let circle5_little_hidden= document.querySelector('.circle5_little_hidden')
		   let circle1_little_hidden= document.querySelector('.circle1_little_hidden')
		   let a = 0;
	      elem_hidden.innerHTML = text_hidden[a];
		  circle1_hidden.addEventListener('click',function(){
			cleanCircle_hidden()
			circle1_hidden.classList.add('active_circle_hidden')
			circle1_little_hidden.classList.add('active_circle_little_hidden')
			elem_hidden.innerHTML = text_hidden[0];
		})
	circle2_hidden.addEventListener('click',function(){
		cleanCircle_hidden()
		circle2_hidden.classList.add('active_circle_hidden')
		circle2_little_hidden.classList.add('active_circle_little_hidden')
		elem_hidden.innerHTML = text_hidden[2];
	})
	circle3_hidden.addEventListener('click',function(){
		cleanCircle_hidden()
		circle3_hidden.classList.add('active_circle_hidden')
		circle3_little_hidden.classList.add('active_circle_little_hidden')
		elem_hidden.innerHTML = text_hidden[3];
	})
	
	circle4_hidden.addEventListener('click',function(){
		cleanCircle_hidden()
		circle4_hidden.classList.add('active_circle_hidden')
		circle4_little_hidden.classList.add('active_circle_little_hidden')
		elem_hidden.innerHTML = text_hidden[4];
	})
	circle5_hidden.addEventListener('click',function(){
		cleanCircle_hidden()
		circle5_hidden.classList.add('active_circle_hidden')
		circle5_little_hidden.classList.add('active_circle_little_hidden')
		elem_hidden.innerHTML = text_hidden[1];
	})
}

function cleanCircle_hidden(){
	const circle_hidden = document.querySelector('.active_circle_hidden')
	const little_circle_hidden =document.querySelector('.active_circle_little_hidden')

		circle_hidden.classList.remove('active_circle_hidden')
		little_circle_hidden.classList.remove('active_circle_little_hidden')
}

