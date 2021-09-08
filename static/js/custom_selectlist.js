'use strict'


{ // FORM ELEMENT: CUSTOM select-list [.select-list .current-item .select-list-popup .select-item]


	// ---------------------------------// INITIALIATION //--------------------------------------
	// get collection '.select-list' element's
	const coll_select_list = document.querySelectorAll('.select-list')

	//  description of the setting in each '.select-list' element
	coll_select_list.forEach((select_list, index) => {
		// add Event Listnere on every select element [ELEM]
		select_list.addEventListener('click', handlerShowClose)

		// setting attr's <order> and <toggle> for .current-item [Item]
		const current_item = select_list.querySelector('.current-item')
				current_item.setAttribute('toggle', 'true')
				current_item.setAttribute('selected', '')
	})




	// -----------------------------------// EVENTS //----------------------------------------------
	// ---Event--- actions handler SHOW SELECT CLOSE
	function handlerShowClose(event){
		console.log(event.target)

		// description of target '.select-list'
		const target = event.target

		const order = target.getAttribute('elem-order')
		const select_list = document.querySelector(`.select-list[elem-order = '${order}']`)
		const select_list_popup = select_list.querySelector('.select-list-popup')


		// CATCH : first click
		if(target.getAttribute('toggle') === 'true' && select_list_popup !== null){
			// show pop up
			select_list_popup.classList.add('open')
			// setting toggle 'false'
			target.setAttribute('toggle','false')

		// CATCH : second click v_1 
			// check click on target elem and create new elem
		}else if(event.target.classList.contains('select-item')){

					// create simple clone DOM elem with attr's
					const current = target.cloneNode(false)
							// set new class name (for simple search)
							current.className = 'current-item'
							// clean last value
							cleanNode(select_list, 'current-item')
							// set attr toggle 'true'
							current.setAttribute('toggle', 'true')
							// set attr checkValue
							current.setAttribute('selected','')
							// copy text in new elem
							current.textContent = target.textContent
							// add in parentNode (window)
							select_list.prepend(current)
							// close popup
							select_list_popup.classList.remove('open')

		// CATH : second click v_2	
			// click no 'select-item'		
		}else{
			// close popup
			if(select_list_popup !== null) select_list_popup.classList.remove('open')
			// setting tiggle 'true'
			target.setAttribute('toggle', 'true')
			
		}
	}




	// ------------------------------------// FUNCTIONS //----------------------------------------------
	// [Void] remove one target element in parent node
	function cleanNode(parentNode, childNode){
		const child = parentNode.querySelector(`.${childNode}`)
				// console.log(child)
		if(child !== null) 
			child.remove()
	}

	// [Void] remove all target element's in parent node
	function cleanNodeAll(parentNode, childNode){
		const children = parentNode.querySelectorAll(`.${childNode}`)
				children.forEach(item => item.romove())
	}

}




// ---------READ ME---------------

// 	<<< PROPERTYS IN HTML >>>

//  ___FUNCTIONAL___
// rate   for each .select-item  [Required Attribute]
// rate   for .current-item [Required Attribute]

// toggle (true / false) [Set by the algorithm]
// selected [Set by the algorithm]


//  ___ORDERING___
// card-order [Set by the algorithm] Global 
// elem-order [Set by the algorithm] Individual  example:'0-list'