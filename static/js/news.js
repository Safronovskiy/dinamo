let select = document.querySelector('.form__selected');
    select.addEventListener('click', showSelected);
    function showSelected(){
        select.classList.toggle('choice')
    }