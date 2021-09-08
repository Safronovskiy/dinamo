// BIG SLIDER

let p = 0;
function initBigSlider(slide){
let prevBig= document.querySelector('.prev_big');
let nextBig = document.querySelector('.next_big');
let slideBigPict = document.querySelector('.slideBigPict')
let slideBig = document.querySelectorAll(".slideBig")
let rightButton = document.querySelector('.right_button')
let leftButton = document.querySelector('.left_button')
let img_gal1 = document.querySelector('.img_gal1')
let img_wrap = document.querySelectorAll('.img-wrap')
const layer_top_big = createElemBig('div','layer-top_big')  
const layer_bottom_big = createElemBig('div','layer-bottom_big')
let remove_layer_top2 =document.querySelector('.layer-top')
let remove_layer_bottom2 = document.querySelector('.layer-bottom')

console.log(p,'Начало')

let arrImg=[
    'img/album/photo2.png',
	'img/album/photo3.png',
	'img/album/photo4.png',
    'img/album/photo5.png',
    'img/album/photo6.png',
	'img/album/photo2.png',
	'img/album/photo3.png',
    'img/album/photo4.png',
    'img/album/photo5.png',
	'img/album/photo6.png',
	'img/album/photo2.png',
    'img/album/photo3.png'

]; 
function initImg(){
    for( let q =0; q<slideBig.length;q++){
        slideBig[q].setAttribute('src', arrImg[q])
    }
};
initImg()
    nextBig.addEventListener('click',function(e){
        console.log(p,'next')
        if(document.querySelector('.layer-bottom_big')){

            let b =document.querySelector('.layer-bottom_big')
            let t =document.querySelector('.layer-top_big')
                b.remove()
                t.remove()
    }
        if(document.querySelector('.layer-bottom')){

            let b =document.querySelector('.layer-bottom')
            let t =document.querySelector('.layer-top')
                b.remove()
                t.remove()
    }
        img_gal1.style.background="none";
       
                leftButton.classList.remove('blockBig')
            if(p == slideBig.length - 1){
                rightButton.classList.add('blockBig')
                img_wrap[p].append(layer_top_big)
                img_wrap[p].prepend(layer_bottom_big)
                
                return
            }
                p++
                img_wrap[p].append(layer_top_big)
                img_wrap[p].prepend(layer_bottom_big)
                cleanNodePict(slideBigPict)
                slideBigPict.append(slideBig[p].cloneNode(false))
                console.log(p,'next++')
    })
    prevBig.addEventListener('click',function(){
        console.log(p,'prev start')
        if(document.querySelector('.layer-bottom_big')){

            let b =document.querySelector('.layer-bottom_big')
            let t =document.querySelector('.layer-top_big')
                b.remove()
                t.remove()
    }
        if(document.querySelector('.layer-bottom')){

            let b =document.querySelector('.layer-bottom')
            let t =document.querySelector('.layer-top')
                b.remove()
                t.remove()
    }
        rightButton.classList.remove('blockBig')
        if(p == 0){
            leftButton.classList.add('blockBig')
            img_wrap[p].append(layer_top_big)
            img_wrap[p].prepend(layer_bottom_big)
            return
        }
        p--
        console.log(p,'prev--')
        cleanNodePict(slideBigPict)
        slideBigPict.append(slideBig[p].cloneNode(false))
        img_wrap[p].append(layer_top_big)
        img_wrap[p].prepend(layer_bottom_big)
    })
}
function cleanNodePict(parent){
    for( let child of parent.children){
        child.remove()
    }
}
function createElemBig(tag, className, id){
    const elemBig = document.createElement(tag)
          elemBig.className = className
    if(id !== undefined) elemBig.id = id

    return elemBig
}
initBigSlider()


///// CHANGE PHOTO
let bigPict = document.getElementById("bigPict");
let smallPict = document.getElementsByClassName("smallPict"); 
let img_gal1 = document.querySelector('.img_gal1')


let arrImg=[
    'img/album/photo2.png',
	'img/album/photo3.png',
	'img/album/photo4.png',
    'img/album/photo5.png',
    'img/album/photo6.png',
	'img/album/photo2.png',
	'img/album/photo3.png',
    'img/album/photo4.png',
    'img/album/photo5.png',
	'img/album/photo6.png',
	'img/album/photo2.png',
    'img/album/photo3.png'

]; 
function startImg(){ 
    for(let i=0; i<smallPict.length; i++){
        smallPict[i].setAttribute('src', arrImg[i])
    }

};
startImg()
for(let j=0; j<smallPict.length; j++){ 
    smallPict[j].addEventListener('click',function(e){
    
       
       for(let i=0;i<arrImg.length;i++){
           let value =e.target.src.includes(arrImg[i])
           if(value){
            
            p=i
            console.log(p,'fixed',i)
           }
          
       }
        console.log(p)



        img_gal1.style.background= "none"
        const smallPictClone = e.target.cloneNode(false)
        
        if(document.querySelector('.layer-bottom_big')){

                let b =document.querySelector('.layer-bottom_big')
                let t =document.querySelector('.layer-top_big')
                    b.remove()
                    t.remove()
        }
         function createElem(tag, className, id){
         

           
        
            const elem = document.createElement(tag)
                  elem.className = className
                  
            if(id !== undefined) elem.id = id
        
            return elem
        }
        let event_c = e.target
              cleanNode(bigPict)
              bigPict.append(smallPictClone)
              const layers_top_col = document.querySelectorAll('.layer-top')
              const layers_bottom_col = document.querySelectorAll('.layer-bottom')
                    layers_top_col.forEach(item => item.remove())
                    layers_bottom_col.forEach(item => item.remove())
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

