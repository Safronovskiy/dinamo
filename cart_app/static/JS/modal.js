'use strict'



// get target button
const button = document.querySelector('#button')

// get modal window
const modal = document.querySelector('.modal')

// get background layer
const layer = document.querySelector('.layer')


// add Event Listnere's
		// button.addEventListener('click', openModal)
		modal.addEventListener('click', closeModal)

// open with page
openModal()



// handler [ OPEN ]
function openModal(){
		document.body.style.overflowY = 'hidden'
					modal.style.overflowY = 'hidden'
					layer.style.overflowY = 'hidden'
		modal.classList.remove('none')
		setTimeout(()=> modal.classList.remove('hide'),)
}

// handler [ CLOSE ]
function closeModal(e){
	if(e.target.classList.contains('layer') ||
		e.target.classList.contains('modal-close')||
		e.target.classList.contains('modal-button')){
			
			document.body.style.overflowY = 'scroll'
			modal.classList.add('hide')
			setTimeout(()=>modal.classList.add('none'), 300)
		}
}

