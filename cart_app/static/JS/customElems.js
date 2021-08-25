'use strict'

{ // CUSTOM ELEMENT's

	{	// FORM ELEMENT: - amount +

		// get all  input's << amount >>
		const coll_param_quantity = document.querySelectorAll('.param-quantity')
		// set min for all input's with value [by attr rangeMin = 'N']
				coll_param_quantity.forEach(item => item.setAttribute('placeholder', item.getAttribute('rangeMin')))
		// get button's all buttons << btn+ >>   << btn- >>
		const coll_buttton_minus = document.querySelectorAll('.param-quantity-minus')
		const coll_buttton_plus = document.querySelectorAll('.param-quantity-plus')


		// add Event Listner's
		coll_buttton_plus.forEach(button_plus => button_plus.addEventListener('click', handlerPlus))
		coll_buttton_minus.forEach(button_minus => button_minus.addEventListener('click', handlerMinus))
		

		// handler Minus
		function handlerMinus(event){

			let {param_quantity, current_value, min, step, head_name} = createDescriptor(event.target.parentNode, event.target)

			// check min
			if(current_value > min){
				param_quantity.setAttribute('placeholder', `${current_value -= step}`)
				// remove icon ok
				if(param_quantity.getAttribute('main-param') && 
					current_value === 0) head_name.classList.remove('pseudo')
			}

		}
		// handler Plus
		function handlerPlus(event){
			// get target data
			let {param_quantity, current_value, max, step, head_name} = createDescriptor(event.target.parentNode, event.target)

			// check max
			if(current_value < max){
				 param_quantity.setAttribute('placeholder', `${current_value += step}`)
				 // add icon ok
				 if(param_quantity.getAttribute('main-param') && 
					 !head_name.classList.contains('pseudo'))	head_name.classList.add('pseudo')
			}

		}

	}

	
	{ // FORM ELEMENT: select-list [.select-list .current-item .select-list-popup .select-item]


		// get collection '.select-list' element's
		const coll_select_list = document.querySelectorAll('.select-list')

		//  description of the setting in each '.select-list' element
		coll_select_list.forEach((select_list, index) => {
			// add Event Listnere on every select element [ELEM]
			select_list.addEventListener('click', handlerShowClose)

			// setting order for each select element [ELEM]
			select_list.setAttribute('order', index + 's')

			// setting attr's <order> and <toggle> for .current-item [Item]
			const current_item = select_list.querySelector('.current-item')
					current_item.setAttribute('order', index + 's')
					current_item.setAttribute('toggle', 'true')

			// setting attr's <order> for each .select-item [ItemS]
			const coll_select_item = select_list.querySelectorAll('.select-item')
					coll_select_item.forEach(item => item.setAttribute('order', index + 's'))
		})


		// actions handler SHOW SELECT CLOSE
		function handlerShowClose(event){

			// description of target '.select-list'
			const target = event.target
			const order = target.getAttribute('order')
			const select_list = document.querySelector(`.select-list[order = '${order}']`)
			const select_list_popup = select_list.querySelector('.select-list-popup')

			// CATCH : first click
			if(target.getAttribute('toggle')){
				// show pop up
				select_list_popup.classList.add('open')
				// setting 
				target.setAttribute('toggle','false')
			}

			// CATCH : second click
			else{
				// check click on target elem and create new elem
				if(event.target.classList.contains('select-item')){

						// create simple clone DOM elem with attr's
						const current = target.cloneNode(false)
								// set new class name (for simple search)
								current.className = 'current-item'
								// clean last value
								cleanNode(select_list, 'current-item')
								// set attr toggle 'true'
								current.setAttribute('toggle', 'true')
								// copy text in new elem
								current.textContent = target.textContent
								// add in parentNode (window)
								select_list.prepend(current)

				}
				select_list_popup.classList.remove('open')
			}
		}
	}
}



// remove one target element in parent node
function cleanNode(parentNode, childNode){
	const child = parentNode.querySelector(`.${childNode}`)
			// console.log(child)
	if(child !== null) 
		child.remove()
}
// remove all target element's in parent node
function cleanNodeAll(parentNode, childNode){
	const children = parentNode.querySelectorAll(`.${childNode}`)
			children.forEach(item => item.romove())
}

// [DOM elem] create DOM element
function createElem (tag, className, id){
	const elem = document.createElement(tag)
			elem.className = className
	if(id !== undefined) elem.id = id
	
	return elem
}
// [DOM elem] return target service__card
function getServiceCard (order){
	const service__card = document.querySelector(`.service__card[card-order = '${order}']`)
	return service__card
}

// [Object] return decription of target FORM ELEMENT : - amount +
function createDescriptor(parent, target){
	const descriptor = {}

			descriptor.param_quantity = parent.querySelector('.param-quantity')

			descriptor.min = descriptor.param_quantity.getAttribute('rangeMin')
			descriptor.max = descriptor.param_quantity.getAttribute('rangeMax')

			descriptor.step = +descriptor.param_quantity.getAttribute('stepOne')

			descriptor.current_value = +descriptor.param_quantity.getAttribute('placeholder')

			descriptor.service__card = getServiceCard(target.getAttribute('card-order'))
			console.log(descriptor.service__card)
			descriptor.head_name = descriptor.service__card.querySelector('.head-name')

			return descriptor
}
