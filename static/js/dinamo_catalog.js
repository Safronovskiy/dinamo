'use strict'
function createCatalogCards(countElements) {
  let cards = document.querySelector('.cards');
  let item = cards.querySelector('.cards__item');
  let arr = [];

  for(let i = 0; i < countElements; i++) {
    let items = item.cloneNode(true);
    arr.push(items);
    cards.append(items);
  }
  for (let i = 0; i < arr.length; i++) {
    if(i >= 9) {
      arr[i].classList.add('hide_cards');
    }
  }

  function setCardsData() {
    let images = document.querySelectorAll('.cards__item-image img');
    let titles = document.querySelectorAll('.cards__item-slogan');
    let descriptions = document.querySelectorAll('.cards__item-description');
    let btnCategoryees = document.querySelectorAll('.cards__item-aside-button');
    let prices = document.querySelectorAll('.cards__item-aside-cost span');

    images[0].src = `img/concerts.png`;
    images[1].src = `img/food.png`;
    images[2].src = `img/excursion.png`;
    images[3].src = `img/corporate.png`;
    images[4].src = `img/presentation.png`;
    images[5].src = `img/marriage.png`;
    images[6].src = `img/vipdinner.png`;
    images[7].src = `img/apartments.png`;
    images[8].src = `img/shooting.png`;
    images[9].src = `img/climbing.png`;
    images[10].src = `img/meeting.png`;
    images[11].src = `img/exhibition.png`;
    images[12].src = `img/rent.png`;
    images[13].src = `img/storage.png`;
    images[14].src = `img/advertising.png`;
    images[15].src = `img/parking.png`;
    images[16].src = `img/photoshoot.png`;
    images[17].src = `img/field.png`;
    images[18].src = `img/coworking.png`;
    images[19].src = `img/studyroom.png`;

    titles[0].innerHTML = `Организация концертов и спортивных мероприятий`;
    titles[1].innerHTML = `Организация питания: обед, ужин, банкет, фуршет`;
    titles[2].innerHTML = `Экскурсионный тур`;
    titles[3].innerHTML = `Грандиозная корпоративная вечеринка`;
    titles[4].innerHTML = `Презентация нового продукта на мультимедийных экранах в чаше стадиона`;
    titles[5].innerHTML = `Выездная регистрация семейного союза`;
    titles[6].innerHTML = `VIP-обед или ужин в центре поля`;
    titles[7].innerHTML = `VIP-ложа (аренда, обслуживание)`;
    titles[8].innerHTML = `Тир`;
    titles[9].innerHTML = `Скалодром`;
    titles[10].innerHTML = `Организация бизнес-встреч`;
    titles[11].innerHTML = `Проведение выставок на главной арене страны`;
    titles[12].innerHTML = `Аренда помещений`;
    titles[13].innerHTML = `Хранение шин и велосипедов`;
    titles[14].innerHTML = `Реклама`;
    titles[15].innerHTML = `Паркинг`;
    titles[16].innerHTML = `Фото и видеосъёмка`;
    titles[17].innerHTML = `Площадки для игры в футбол, баскетбол, волейбол, настольный и большой теннис`;
    titles[18].innerHTML = `Коворкинг`;
    titles[19].innerHTML = `Учебный кабинет`;

    for (let elems of descriptions) {
      elems.innerHTML = `С другой стороны начало повседневной работы по формированию позиции позволяет оценить значение дальнейших направлений развития.`;
    }

    btnCategoryees[0].innerHTML = `Развлечения`;
    btnCategoryees[1].innerHTML = `Корпоративные`;
    btnCategoryees[2].innerHTML = `Частным лицам`;
    btnCategoryees[3].innerHTML = `Корпоративные`;
    btnCategoryees[4].innerHTML = `VIP-услуги`;
    btnCategoryees[5].innerHTML = `Частным лицам`;
    btnCategoryees[6].innerHTML = `Частным лицам`;
    btnCategoryees[7].innerHTML = `VIP-услуги`;
    btnCategoryees[8].innerHTML = `Частным лицам`;
    btnCategoryees[9].innerHTML = `Частным лицам`;
    btnCategoryees[10].innerHTML = `Частным лицам`;
    btnCategoryees[11].innerHTML = `Развлечения`;
    btnCategoryees[12].innerHTML = `Частным лицам`;
    btnCategoryees[13].innerHTML = `Частным лицам`;
    btnCategoryees[14].innerHTML = `Корпоративные`;
    btnCategoryees[15].innerHTML = `Частным лицам`;
    btnCategoryees[16].innerHTML = `Частным лицам`;
    btnCategoryees[17].innerHTML = `Частным лицам`;
    btnCategoryees[18].innerHTML = `Частным лицам`;
    btnCategoryees[19].innerHTML = `Корпоративные`;

    prices[0].innerHTML = `от 500 BYN`;
    prices[1].innerHTML = `Индивидуально`;
    prices[2].innerHTML = `15 BYN/чел`;
    prices[3].innerHTML = `от 500 BYN`;
    prices[4].innerHTML = `Индивидуально`;
    prices[5].innerHTML = `350 BYN`;
    prices[6].innerHTML = `200 BYN`;
    prices[7].innerHTML = `от 1500 BYN`;
    prices[8].innerHTML = `20 BYN`;
    prices[9].innerHTML = `28 BYN`;
    prices[10].innerHTML = `Индивидуально`;
    prices[11].innerHTML = `Индивидуально`;
    prices[12].innerHTML = `от 500 BYN`;
    prices[13].innerHTML = `20 BYN`;
    prices[14].innerHTML = `от 5 BYN`;
    prices[15].innerHTML = `от 5 BYN`;
    prices[16].innerHTML = `Индивидуально`;
    prices[17].innerHTML = `от 20 BYN`;
    prices[18].innerHTML = `Индивидуально`;
    prices[19].innerHTML = `от 20 BYN`;
}
  setCardsData()
}
createCatalogCards(19)

function createWindowCards(countElements) {
  let windowCards = document.querySelector('.window__cards');
  let windowCard = windowCards.querySelector('.window__cards-item');
  let arr = [];
  for (let i = 0; i < countElements; i++) {
    let windowItems = windowCard.cloneNode(true);
    arr.push(windowItems);
    windowCards.append(windowItems);
  }

  function setDataWindowCards() {
    let images = document.querySelectorAll('.window__cards-item-image img');
    let titles = document.querySelectorAll('.window__cards-item-title');
    let descriptions = document.querySelectorAll('.window__cards-item-text');

    images[0].src = `img/shooting.png`;
    images[1].src = `img/field.png`;
    images[2].src = `img/meeting.png`;

    titles[0].innerHTML = `Тир`;
    titles[1].innerHTML = `Площадки для игры в
    футбол, баскетбол, волейбол,
    настольный и большой теннис`;
    titles[2].innerHTML = `Организация бизнес-встреч`;

    for (let elems of descriptions) {
      elems.innerHTML = `С другой стороны начало повседневной работы по формированию позиции позволяет оценить значение дальнейших направлений развития.`;
    }
  }  
  setDataWindowCards()
}
createWindowCards(2)

function modalWindow() {
  
  let add_basket = document.querySelectorAll('.add_basket');

    for(let items of add_basket) {
      items.addEventListener('click', function (e) {

        let scroll = window.scrollY;
        window.addEventListener('click', function() {
          let windowModal = document.querySelector('.window');
          
          windowModal.style.top = scroll + 'px';
        })

      let windowBox = document.querySelector('.window-box');

      windowBox.classList.remove('hidden');
  
      let headerBack = document.querySelector('.header');
      headerBack.classList.add('hidden');
  
      let close = document.querySelector('.close');
      close.addEventListener('click', function() {
      windowBox.classList.add('hidden');

      headerBack.classList.remove('hidden');    
    })
      
    document.addEventListener('click',function(e) {
      if(e.target.className === 'window-box'){
        windowBox.classList.add('hidden');
      }    
    })    
  })
}
}
modalWindow()


function showCardsDataInBasket() {
  let allCards = document.querySelectorAll('.cards__item');
  for (let i = 0; i < allCards.length; i++) {
    let card = allCards[i];
    card.id = 'catalog_card' + i;

    let button = card.querySelector('.add_basket');
    button.setAttribute('order', i);
    let buttonChilds = button.children;
    for(let childs of buttonChilds) {
      childs.setAttribute('order',i)
    }

    button.addEventListener('click', function clickButton(e) {
      if(e.type === 'click'){
        let order = button.getAttribute('order');
        let card = document.querySelector('#catalog_card' + order);

        let windowImage = document.querySelector('.window__header-main-image img');
        let windowTitle = document.querySelector('.window__header-main-title');
        let clickedImage = card.querySelector('.cards__item-image img');
        let clickedTitle = card.querySelector('.cards__item-slogan');

        windowImage.src = clickedImage.src;
        windowTitle.innerHTML = clickedTitle.innerHTML;
      }  
    })
  }
}
showCardsDataInBasket()

