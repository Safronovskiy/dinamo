'use strict'

function createElem (tag, className, id){
	const elem = document.createElement(tag)
			elem.className = className
	if(id !== undefined) elem.id = id

	return elem
}


/* 		 [	HTML STRUCTURE ]
	<div class="contacts__number-wrap">
		<div class="contacts__countrys"></div>
		<input type="tel" class="contacts__number" id="person_number">
	</div>
 */


// create countrys collection  
// FORMAT: FIRST OBJECT - DEFAULT 
//   		  OTHER OBJECTS - ID , NAME , NUMBER , URL
const countrys = [
	{
		inform:'default object',
		currentUrl:'img/flags/BLR.svg',
		upArrow:'img/flags/arrow__top.svg',
		bottomArrow:'img/flags/arrow__bottom.svg',
	}, {
		id:1,
		name:'BELARUS',
		number:'+375',
		url:'img/flags/BLR.svg',

	}, {
		id:2,
		name:'RUSSIA',
		number:'+7',
		url:'img/flags/RUS.svg',
	}, {
		id:3,
		name:'CANADA',
		number:'+1',
		url:'img/flags/CAN.svg',
	}, {
		id:4,
		name:'CHINA',
		number:'+86',
		url:'img/flags/CHN.svg',
	}, {
		id:5,
		name:'GERMANU',
		number:'+49',
		url:'img/flags/DEU.svg',
	}, {
		id:6,
		name:'UKRAINE',
		number:'+380',
		url:'img/flags/UKR.svg',
	},	{
		id:7,
		name:'USA',
		number:'+1',
		url:'img/flags/USA.svg',
	},
]

// SET MODE'S : 1. TRUE << open pop-up >>
//					 2. FALSE << close pop-up >> 
let click_flag = true;



// search target node's [parent < - > children]
const parent = document.querySelector('.contacts__number-wrap')
const contacts__countrys = document.querySelector('.contacts__countrys')
const contacts__number = document.querySelector('.contacts__number')
		contacts__number.value = '+375'



// create pop-up window
const contacts__countrys_list = 	createPopUp(countrys)
		contacts__countrys.append(contacts__countrys_list)


// Add Event Listnere
		contacts__countrys.addEventListener('click', showPopUp)


// Event 'click' [ handler ]
function showPopUp(event){
		// get pop-up
		const parentNode = document.querySelector('.contacts__countrys-list')

		// open pop-up
		if(click_flag){
			// set arrow << UP >>
			contacts__countrys.style.backgroundImage = `url(${countrys[0].currentUrl}), url(${countrys[0].upArrow})`
			parentNode.classList.remove('none')
			setTimeout(()=> parentNode.classList.remove('hide'), )
			click_flag = false;

		}// close pop-up	
		else{
			contacts__countrys.style.backgroundImage = `url(${countrys[0].currentUrl}), url(${countrys[0].bottomArrow})`
			parentNode.classList.add('hide')
			setTimeout(()=>{
				 parentNode.classList.add('none')
				 click_flag = true;
			}, 300)
		}


		// get information in input
		if(event.target.classList.contains('country__descriptor')){
			const descriptor_id = +event.target.id;
			const country = countrys.find(item => item.id === descriptor_id)
					contacts__countrys.style.backgroundImage = `url(${country.url}), url(${countrys[0].bottomArrow})`
					contacts__number.value = country.number
					countrys[0].currentUrl = country.url
		}
}


// create Pop - Up 
function createPopUp(data){
	//create Pop-Up
	const contacts__countrys_list = createElem('div', 'contacts__countrys-list none hide')

	// create DOM element's (Filling pop-up)
			countrys.forEach(country => {
				if(country.id){
					const country__descriptor = createElem('div', 'country__descriptor', country.id)
							country__descriptor.style.backgroundImage = `url(${country.url})`
							country__descriptor.textContent = `${country.name} ${country.number}` 
							contacts__countrys_list.append(country__descriptor);
				}
			})

	return contacts__countrys_list;
}






