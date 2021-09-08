'use strict'
// Функция для создания блока statistics через js(Не подключена)
/* function createStatistics(countElements) {
  let statistics = document.querySelector('.statistics');
  let statisticRow = document.querySelector('.statistics__allrows');

  for(let i = 0; i < countElements; i++) {
    let cloneRow = statisticRow.cloneNode(true);

    let classRemove = cloneRow.querySelectorAll('.statistics__row1-allcolumns');    
      for(let delElems of classRemove) {
        delElems.classList.remove('statistics__row1-allcolumns')
      }
      
    let spanRemove = cloneRow.querySelectorAll('span.gray');
    for (let delElems of spanRemove) {
      delElems.remove();
    }  
    statistics.append(cloneRow)
  }

  function changeDataInClone() {
  let allTitles = document.querySelectorAll('.statistics__allcolumns-alltitles');
  let allText = document.querySelectorAll('.statistics__allcolumns-text');
 // Первый ряд с 0 индекса, второй с 9 индеса. Первый ряд не меняеся
  allTitles[3].innerHTML = `233`;
  allTitles[4].innerHTML = `350`;
  allTitles[5].innerHTML = `13`;
  allTitles[6].innerHTML = `105х68 м`;
  allTitles[7].innerHTML = `75%`;
  allTitles[8].innerHTML = `30`;

  allTitles[9].innerHTML = `233`;
  allTitles[10].innerHTML = `350`;
  allTitles[11].innerHTML = `13`;
  allTitles[12].innerHTML = `105х68 м`;
  allTitles[13].innerHTML = `75%`;
  allTitles[14].innerHTML = `30`;
  allTitles[15].innerHTML = `9`;
  allTitles[16].innerHTML = `135 мест`;
  allTitles[17].innerHTML = `98 мест`;


  allText[9].innerHTML = `Парковочных места`;
  allText[10].innerHTML = `Прожекторов`;
  allText[11].innerHTML = `Беговых дорожек`;
  allText[12].innerHTML = `Размер поля`;
  allText[13].innerHTML = `Защита трибун козырьком`;
  allText[14].innerHTML = `Количество секторов`;
  allText[15].innerHTML = `Количество беговых дорожек в чаше стадиона`;
  allText[16].innerHTML = `Крытый паркинг`;
  allText[17].innerHTML = `Открытый паркинг`;

//mobile
  let noneColumn = document.querySelector('.statistics__allcolumns-column3');
      if (window.getComputedStyle(noneColumn, null).getPropertyValue('display') === 'none') {
        //Нумерация с 0; Первый ряд не меняеся
  allTitles[3].innerHTML = `40`;
  allTitles[4].innerHTML = `233`;
  allTitles[5].innerHTML = `13`;//it's none;
  allTitles[6].innerHTML = `350`;
  allTitles[7].innerHTML = `13`;
  allTitles[8].innerHTML = `233`;//it's none;
  allTitles[9].innerHTML = `105x68 м`;
  allTitles[10].innerHTML = `75%`;
  allTitles[11].innerHTML = `98 мест`;//it's none;
  allTitles[12].innerHTML = `30`;
  allTitles[13].innerHTML = `9`;
  allTitles[14].innerHTML = `9`;//it's none;
  allTitles[15].innerHTML = `135 мест`;
  allTitles[16].innerHTML = `98 мест`;

  allText[3].innerHTML = `VIP-лож`;
  allText[4].innerHTML = `Парковочных места`;
  allText[5].innerHTML = `Беговых дорожек`;//it's none;
  allText[6].innerHTML = `Прожекторов`;
  allText[7].innerHTML = `Беговых дорожек`;
  allText[8].innerHTML = `233`;//it's none;
  allText[9].innerHTML = `Размер поля`;
  allText[10].innerHTML = `Защита трибун козырьком`;
  allText[11].innerHTML = `98 мест`;//it's none;
  allText[12].innerHTML = `Количество секторов`;
  allText[13].innerHTML = `Количество беговых дорожек в чаше стадиона`;
  allText[14].innerHTML = `9`;//it's none;
  allText[15].innerHTML = `Крытый паркинг`;
  allText[16].innerHTML = `Открытый паркинг`;
      }      
  }
  changeDataInClone()
} */