'use strict'

	// -----------------------------------// MIXINS //----------------------------------------------

// сonstant for all instance's of class Service
const mixin = {
	// delay in css classe's
	delay:600,
}



	// -----------------------------------// CLASSES //----------------------------------------------

// create class
//  goal: create collection of service's (cards)

class Service{



	// ----------------// Constructor // ----------
	constructor(id, stype, scode, card, btnDel){
		this.id = id,
		// value of attr stype (servise-type: 'indiv', 'cross-sell', 'date')
		this.stype = stype
		// value of attr (servise code on data-base)
		this.scode = scode
		// referencis on DOM element (.service__card)
		this.card = card
		// references on DOM element (.head-delete-card)
		this.btnDel = btnDel
	}
	


	// ----------------// Method's // ------------

	// delete in DOM (with transition)
	// organization of access: 
	//  				1. object.delete()
	//					2. Service.prototype.delete.call/apply/bind(elem)
	delete(){
		// get all card emlement's
		let collection = (this.card !== undefined ) ? this.card.querySelectorAll('.service__card, div, ul, li, img') :
																		this.querySelectorAll('.service__card, div, ul, li, img')
				// convert to array
				collection = Array.from(collection)
				// inserting card at the beginning
				collection.unshift((this.card !== undefined) ? this.card : this)


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
					}, delay + 100)

					// 4. remove() DOM element
					setTimeout(()=> collection[i].remove(), delay + ((this.delay !== undefined) ? this.delay : 600))
				}
	}

	// parse for [Service-card type = 'cross-sell']
	cardParse(){
		// I. FORM VALIDATION: check attr main;  main && selected  none --->> return 
		const main_flag = this.card.querySelectorAll('[main]')
				if(main_flag !== null) {
					if(!this.checkMain(main_flag)) {
						// clean screen with total
						const total = document.querySelector('.money-total p')
								if(total !== null) total.textContent = ''
						// exit from method
						return
					}
				}
				


		// II. FORM PARSE: geting user's input's
		// Get data
		// get data of all elem's  << - 3 + >>
		const params = this.card.querySelectorAll('.param-quantity[selected]')
		// get data of all elem's << list >>
		const selects = this.card.querySelectorAll('.current-item[selected]')
		// get data of all elem's << variant >>
		const variants_checked = []
		const variants_all = this.card.querySelectorAll('.service__variant')
				variants_all.forEach(variant => {if(variant.checked) variants_checked.push(variant)})

		// Conversion to array
		const data = this.createArray(selects, params)
		

		// III. CALCULCATION: Calculation of the result
			// element's with *=
			console.log(data)
		let result = data.reduce((total, item) => {
												// check attr rate
												if(item.getAttribute('rate') === null) return total
												return total *= +item.getAttribute('rate')
												}, 1)

			// element's with +=
			result += variants_checked.reduce((total, plusItem) => total += +plusItem.getAttribute('rate'), 0) 
			 



		// IV. CHECK TAG: screen .money-total [Does the tag exist ?]
		// get the screen to display the total	
		const parent = document.querySelector('.money-total')
		// if the screen exists
		if(parent !== null){
			// create DOM elem
			const elem = createElem('p')
					// set data (total)
					elem.textContent = `${result} BYN`
					// clean sum screen
					this.cleanMoneyScreen()
					// adding new data to the summary screen 
					parent.append(elem)
		}
				

	}

	// [Boolean] check attr 'selected' in input with attr 'main' ((( calling in cardParse() )))
	checkMain(main){
		for(let elem of main){
			if(elem.getAttribute('selected') === null) return false
		}

		return true
	}

	// [Array] conversion data to array ((( calling in cardParse() )))
	createArray(...args){
		const data = []
		for(let value of args){
			if(value === null) continue
			if(value.length === 0) continue

			value.forEach(item => data.push(item))
		}

		return data;
	}

	// [Void] clean screen with total; example: 450 BYN; ((( calling in cardParse() )))
	cleanMoneyScreen(){
		const money = document.querySelector('.money-total p')
				if(money !== null) money.remove()
	}
}


// [Void] add prop delay
Object.assign(Service.prototype, mixin)