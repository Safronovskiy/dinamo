'use strict'


// template of message (if order is empty)
const TEMPLATE_message_empty = `<div class = 'empty__order'>
												<p class="order__title"><!--
												-->В Вашей корзине пусто. Переходите
													в каталог и выбирайте любую услугу<!--
												--></p>
												<div class="order__arrows">
													<img class = 'arrows-top' src="img/rows/topArrow.svg" alt="arrow">
													<img class = 'arrows-middle' src="img/rows/middleArrow.svg" alt="arrow">
													<img class = 'arrows-bottom' src="img/rows/bottomArrow.svg" alt="arrow">
												</div>

												<div class='order__link-wrap' href="#">
													<a class = 'order__link' href="#">В каталог услуг</a>
												</div>
										  </div>`

// get button << Enter contact detail's >>
const button = document.querySelector('.order__link')
		button.addEventListener('.click', sendDataHandler)

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
				card.addEventListener('click', cardClickHandler)

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




	// -----------------------------------// EVENTS //----------------------------------------------

// ---Event--- handler on each .card__service
function cardClickHandler(event){

	// in CASE: Delete service card
	if(event.target.classList.contains('head-delete-card')){
		const btnDel = event.target
		// get target card
		const parent = servisesColl.find((item)=> item.id === parseInt(btnDel.getAttribute('card-order'), 10))
				// delete target cart
			   parent.delete()
				// clean collection
				cleanServices(servisesColl, parent)
				// check collection (isEmpty???)
				if(servisesColl.length === 0) sendOrderIsEmptyMessage(TEMPLATE_message_empty) 
	}

	// in CASE: Show data in service card with type  = 'cross - sell'   elems - num +
	if(isQuantityElem(event.target)||
		isSelectElem(event.target) ||
		isVariantElem(event.target)){

			const target = event.target
			const card_order = +target.getAttribute('card-order')
			const card = servisesColl.find(card => card.id === card_order )
					card.cardParse()

		}
}

// ---Event--- handler of main button << Enter cintact detail's >>
function sendDataHandler(){}



	// ------------------------------------// FUNCTIONS //----------------------------------------------


// [DOM elem] create DOM element
function createElem (tag, className, id){
	const elem = document.createElement(tag)
	if(className !== undefined) elem.className = className
	if(id !== undefined) elem.id = id
	
	return elem
}

// [Void] delete target elem in collection
function cleanServices(collection, elem){
	const index = collection.indexOf(elem)
			collection.splice(index, 1)
}

// [Void] send 'order is empty' message
function sendOrderIsEmptyMessage(message){
	// get title
	const title = document.querySelector('.order__title')
	// get status line
	const status = document.querySelector('.description__status')
	// get left wrap
	const description__order = document.querySelector('.description__order')
	// get button
	const button = document.querySelector('.order__link-wrap')
			// remove title, status, button
			Service.prototype.delete.apply(title)
			Service.prototype.delete.apply(status)
			Service.prototype.delete.apply(button)
			// send message
			setTimeout(()=> {
				const elem = createElem('div', 'message-wrap hide')
						elem.innerHTML = message
						description__order.append(elem)

						setTimeout(()=> elem.classList.remove('hide'))
					}, Service.prototype.delay + 300)			
}


// [Boolean] CHECK CUSTOM ELEMENTS : Quantity
function isQuantityElem(elem){
	return elem.classList.contains('param-quantity-plus') ||
			 elem.classList.contains('param-quantity-minus') || false
}
// [Boolean] CHECK CUSTOM ELEMENTS : Select-list
function isSelectElem(elem){
	return elem.classList.contains('select-item') || false
}
// [Boolean] CHECK CUSTOM ELEMENTS : Variant's
function isVariantElem(elem){
	return elem.classList.contains('service__variant-label') ||
			 elem.classList.contains('service__variant') ||
			 elem.classList.contains('variant') || false
}
