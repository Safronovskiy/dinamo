let blockAbout = document.querySelector('.vacancy');
    blockAbout.addEventListener('click', showVacancy);

let block = document.querySelector('.vacancy__block');
    console.log(block)

    function showVacancy(e){
        let target = e.target;
        if(target.classList.contains('vacancy__block') || target.classList.contains('vacancy__block-title')){
            block.classList.toggle('show-vacancy__block')
        }
    }

let buttonRespond = document.querySelector('.list__button');
    buttonRespond.addEventListener('click', showRespond);

    function showRespond(){
        document.querySelector('.container__background').style.display = 'block';
        document.querySelector('main').classList.toggle('showrespond');
        document.querySelector('.container__respond').style.display = 'block';
    }

let buttonSend = document.querySelector('.form__button');
    buttonSend.addEventListener('click', sendRespond);

    function sendRespond(){
        document.querySelector('.container__respond').style.display = 'none';
        document.querySelector('.container__send').style.display = 'flex';
    }