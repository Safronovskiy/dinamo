'use strict'

{	// FORM ELEMENT: CUSTOM - amount +


	// ---------------------------------// INITIALIATION //--------------------------------------
	// get all  input's << amount >>
	const coll_param_quantity = document.querySelectorAll('.param-quantity')
	// set min for all input's with value [by attr rangeMin = 'N']
			coll_param_quantity.forEach(item => {
				const rangeMin = item.getAttribute('range-min')
				item.setAttribute('placeholder', rangeMin)
				if(rangeMin > 0) {
					item.setAttribute('rate', rangeMin )
					item.setAttribute('selected', '')
				}
			})
	// get button's all buttons << btn+ >>   << btn- >>
	const coll_buttton_minus = document.querySelectorAll('.param-quantity-minus')
	const coll_buttton_plus = document.querySelectorAll('.param-quantity-plus')


	// add Event Listner's
	coll_buttton_plus.forEach(button_plus => button_plus.addEventListener('click', handlerPlus))
	coll_buttton_minus.forEach(button_minus => button_minus.addEventListener('click', handlerMinus))
	


	// -----------------------------------// EVENTS //----------------------------------------------
	// ---Event--- handler Minus
	function handlerMinus(event){
		// get target data
		let {param_quantity, current_value, min, max, step_first, step, head_name} = createDescriptor(event.target.parentNode, event.target)


		// check min   
		// CASE: if attribute step-first exists
		if(step_first !== 0 && current_value === + min + step_first){
			// set new amount
			setCurrentValue(param_quantity, current_value -= step_first)

			// remove icon ok
			if(param_quantity.getAttribute('main') && 
				current_value === 0) head_name.classList.remove('pseudo')

		// CASE: in other case's
		}else if(current_value > min){
			// set new amount
			setCurrentValue(param_quantity, current_value -= step)

			// remove icon ok
			if(param_quantity.getAttribute('main') && 
				current_value === 0) head_name.classList.remove('pseudo')
		}

		(current_value === 0) ? param_quantity.removeAttribute('selected') : param_quantity.setAttribute('selected','')

	}

	// ---Event--- handler Plus
	function handlerPlus(event){
		// get target data
		let {param_quantity, current_value, min, max, step_first, step, head_name} = createDescriptor(event.target.parentNode, event.target)

		// check max
		// CASE: if attribute step-first exists
		if(step_first !== 0 && current_value === +min){
			// set new amount
			setCurrentValue(param_quantity, current_value += step_first)

			// add icon ok
			if(param_quantity.getAttribute('main') && 
				!head_name.classList.contains('pseudo'))	{
					head_name.classList.add('pseudo')
				}

		// CASE: in other case's
		}else if(current_value < max){
			// set new amount
			setCurrentValue(param_quantity, current_value += step)

			 // add icon ok
			 if(param_quantity.getAttribute('main') && 
				 !head_name.classList.contains('pseudo'))	{
					 head_name.classList.add('pseudo')
				 }
		}

		
		(current_value === 0) ? param_quantity.removeAttribute('selected') : param_quantity.setAttribute('selected','')

	}


	
	// ------------------------------------// FUNCTIONS //----------------------------------------------
	// [Object] return decription of target FORM ELEMENT : - amount +
	function createDescriptor(parent, target){
		const descriptor = {}

				// target elem 
				descriptor.param_quantity = parent.querySelector('.param-quantity')


				// ATTRIBUTE's
				// Range : max - min   [range-min   range-max]
				descriptor.min = descriptor.param_quantity.getAttribute('range-min')
				descriptor.max = descriptor.param_quantity.getAttribute('range-max')

				// Steps : one click step  [step-one   step-first]
				descriptor.step = +descriptor.param_quantity.getAttribute('step-one')
				descriptor.step_first = +descriptor.param_quantity.getAttribute('step-first')

				// Value : current value on screen - 3 +
				descriptor.current_value = +descriptor.param_quantity.getAttribute('placeholder')


				// COORDINATE's
				// MAIN : CARD
				descriptor.service__card = getServiceCard(target.getAttribute('card-order'))

				// MAIN : TITLE
				descriptor.head_name = descriptor.service__card.querySelector('.head-name')

				return descriptor
	}

	// [Void] set value (amount) FROM ELEMENT : - amount + 
	function setCurrentValue(param_quantity, value){
		param_quantity.setAttribute('placeholder', `${value}`)
		param_quantity.setAttribute('rate', value)
	}

	// [DOM elem] return target service__card
	function getServiceCard (order){
		const service__card = document.querySelector(`.service__card[card-order = '${order}']`)
		return service__card
	}

}




// ---------READ ME---------------

// 	<<< PROPERTYS IN HTML >>>

//  ___FUNCTIONAL___
// range-min  [Required Attribute]
// range max  [Required Attribute]

// step-one (each step) [Required Attribute]
// step-first (first step) [Optional Attribute]

// rate  (the curretn value in the placeholder) [Set by the algorithm]
// selected (data fill mark) [Set by the algorithm]

// main (true / none) (Affects the appearance of the picture in the header of the card ) [Optional Attribute]


//  ___ORDERING___
// card-order [Set by the algorithm] Global 
// elem-order [Set by the algorithm] Individual  example:'0-select'





