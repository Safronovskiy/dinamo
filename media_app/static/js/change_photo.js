let bigPict = document.getElementById("bigPict");
let smallPict = document.getElementsByClassName("smallPict"); 


let arrImg=[
	'img/album/small_photo_first.png',
	'img/album/small_photo_second.png',
	'img/album/small_photo_third.png',
    'img/album/small_photo_four.png',
	'img/album/small_photo_five.png',
    'img/album/small_photo_six.png',
	'img/album/small_photo_seven.png',
    'img/album/small_photo_eight.png',
	'img/album/small_photo_nine.png',
    'img/album/small_photo_ten.png',
    'img/album/small_photo_eleven.png',
    'img/album/small_photo_twelve.png',
    'img/album/small_photo_thirteen.png'
]; 
function startImg(){ 
    for(let i=0; i<smallPict.length; i++){
        smallPict[i].setAttribute('src', arrImg[i])
    }

};
startImg()
for(let j=0; j<smallPict.length; j++){ 
    smallPict[j].addEventListener('click',function(e){
        const smallPictClone = e.target.cloneNode(false)

              // show big image
              cleanNode(bigPict)
              bigPict.append(smallPictClone)

              //
              const layers_top_col = document.querySelectorAll('.layer-top')
              const layers_bottom_col = document.querySelectorAll('.layer-bottom')
                    layers_top_col.forEach(item => item.remove())
                    layers_bottom_col.forEach(item => item.remove())
              console.log(e.target)
              const layer_top = createElem('div', 'layer-top')
              const layer_bottom = createElem('div', 'layer-bottom')
              e.target.parentNode.prepend(layer_top)
              e.target.parentNode.append(layer_bottom)

             
    })
    
function cleanNode(parent){
    for(let child of parent.children){
        child.remove()
    }
}

};

function createElem(tag, className, id){
    const elem = document.createElement(tag)
          elem.className = className
    if(id !== undefined) elem.id = id

    return elem
}