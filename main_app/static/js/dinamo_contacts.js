'use strict'

function copyText() {
  let copyText = document.querySelectorAll('.copyit');
  let copyBtns = document.querySelectorAll('.copybtn');


  for (let i = 0; i< copyText.length; i++) {
    copyText[i].id ='order'+i;
  }

  for (let i = 0; i< copyBtns.length; i++) { 
    let btn = copyBtns[i];
    btn.setAttribute('order', i);

    btn.addEventListener('click', function(e) {
      if(e.type === 'click') {
        let order = btn.getAttribute('order');
        let copyIt = document.getElementById('order'+order);

         navigator.clipboard.writeText(copyIt.innerHTML); 
      }
    })
  }
}
copyText()

function setRequisitesBgHeight() {
  let requisitesImageGrad = document.querySelector('.requisites__image-grad')
  let requisites = document.querySelector('.requisites');
  let height = requisites.offsetHeight;
  requisitesImageGrad.style.height = height + 'px';
}
setRequisitesBgHeight()

