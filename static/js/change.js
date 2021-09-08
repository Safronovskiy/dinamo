
   const ul = document.querySelector('.block_drop_menu')
   ul.addEventListener('click',handler)
   function handler(e){
       let target =e.target
       if(target.tagName==='A'){
           target=target.parentNode
       }
       if(target.classList.contains('change')){
           cleanNode(ul)
           target.classList.add('active')
       }
   }
   function cleanNode(parent){
       const target = parent.querySelector('.active')
       if(target!==null){
       target.classList.remove('active')
   }
}
