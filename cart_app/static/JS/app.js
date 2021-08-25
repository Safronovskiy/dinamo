'use strict'

// сonstant for all instances 
const mixin = {
	// delay in css classe's
	delay:600,
}

// create class
//   create collection of service's
//  
class Service{
	constructor(id, stype, scode, card, btnDel){
		this.id = id,
		this.stype = stype
		this.scode = scode
		this.card = card
		this.btnDel = btnDel
	}
	

	// delete in DOM (with transition)
	delete(){
		// get all card emlement's
		let collection = this.card.querySelectorAll('.service__card, div, ul, li, img')
				// convert to array
				collection = Array.from(collection)
				// inserting card at the beginning
				collection.unshift(this.card)


				// Transition
				for(let i = collection.length, delay = 120; i--;){
					// 1. set max-height for all element's
					collection[i].style.maxHeight = `${collection[i].clientHeight}px` 
					// 2. set class ' hide'
					collection[i].classList.add('hide')
					// 3. set class 'remove'
					setTimeout(()=>{
						// !maxHeight inline => change maxHeight inline
						collection[i].style.maxHeight = `0px`
						collection[i].classList.add('remove')
					}, delay)

					// 4. remove() DOM element
					setTimeout(()=> collection[i].remove(), delay + this.delay)
				}
	}
	cardParse(){}
}

// add prop delay
Object.assign(Service.prototype, mixin)



		// search DOM collection of Cards [DOM Collection]
const cards = document.querySelectorAll('.service__card')

		// create DOM JS collection of Cards [JS DOM Collection]
const servisesColl = []

		// I. SET ORDER FOR CARD'S and form ELEMENT's [indiv && global]
	 	cards.forEach((card, index)=>{
			 	// CARD
				// set order of card's
				card.setAttribute('card-order', index)
				// add Event Listener on Card
				card.addEventListener('click', clickHandler)

				// DELETE btn
				// search btn Del and set attr 'order' << search parent by attr order >>
				const btnDel = card.querySelector('.head-delete-card')
						btnDel.setAttribute('card-order', `${index}`)
				

				// ELEM : SELECT QUANTITY 
				// order global && individual  for elem's .select__quantity
				const coll_select__quantity = card.querySelectorAll('.select__quantity')
						if(coll_select__quantity !== null)
								coll_select__quantity.forEach((select, number) =>{
											select.setAttribute('card-order', index)
											select.setAttribute('elem-order', number + '-select')
									const collection = select.querySelectorAll('button, input')
											collection.forEach(elem => {
												elem.setAttribute('card-order', index)
												elem.setAttribute('elem-order', number + '-select')
											})
								})


				// ELEM : SELECT LIST
				// order global && individual for elem's .select-list
				const coll_select_list = card.querySelectorAll('.select-list')
						if(coll_select_list !== null)
								coll_select_list.forEach((list, number) =>{
											list.setAttribute('card-order', index)
											list.setAttribute('elem-order', number + '-list')
									const collection = list.querySelectorAll('div')
											collection.forEach(elem =>{
												elem.setAttribute('card-order', index)
												elem.setAttribute('elem-order', number + '-list')
											})
								})

				// ELEM : VARIANT LIST (radio)
				const coll_variant_list = card.querySelectorAll('.service__variant-wrap')
						if(coll_variant_list !== null)
								coll_variant_list.forEach((variant, number)=>{
											variant.setAttribute('card-order', index)
											variant.setAttribute('elem-order', number + '-variant')
									const collection = variant.querySelectorAll('label, input, span')
											collection.forEach(elem =>{
												elem.setAttribute('card-order', index)
												elem.setAttribute('elem-order', number + '-variant')
											})
								})


				// push instanse of classe Service
				servisesColl.push(new Service(index, card.getAttribute('stype'),
															card.getAttribute('scode'), card, btnDel))
				})


// Event handler on each .card__service
function clickHandler(event){
	if(event.target.classList.contains('head-delete-card')){
				console.log(111)
		const btnDel = event.target
		const parent = servisesColl.find((item)=> item.id === parseInt(btnDel.getAttribute('card-order'), 10))
				console.log(parent)
			   parent.delete()
	}
}