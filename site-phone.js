// Классы

// Показать-скрыть форму даты и времени для .site-phone__list-container добавляем .show.

// Показать-скрыть сайтфон  для .site-phone__container добавляем .show.

// Показать-скрыть кнопку открытия сайтфона .site-phone__preview-btn добавляем .hide.

// 
const  chengeForm = (textAfter, textBefore ) => {
    if(document.querySelector('.site-phone__list-container')) {

        const form = document.querySelector('.site-phone__list-container');
        const btn = document.querySelector('.site-phone__change-btn');

        form.classList.contains('show') ? btn.textContent= textAfter : btn.textContent= textBefore;
        form.classList.toggle('show')
    }
    else {
        console.log('Ошибка переданных данных')
    }
}

const openForm = (openEl, closeEl) => {
    if(document.querySelector(`.${openEl}`) && document.querySelector(`.${closeEl}`)) {

        const block = document.querySelector(`.${openEl}`);
        const button = document.querySelector(`.${closeEl}`);

        button.classList.add('hide')
        block.classList.add('show')
    }
    else {
        console.log('Ошибка переданных данных')
    }
}
const closeForm = (openEl, closeEl) => {
    if(document.querySelector(`.${openEl}`) && document.querySelector(`.${closeEl}`)) {
        
        const block = document.querySelector(`.${openEl}`);
        const button = document.querySelector(`.${closeEl}`);

        button.classList.remove('hide')
        block.classList.remove('show')
    } else {
        console.log('Ошибка переданных данных')
    }
}
const resetSelect = (selectEl) => {
    if(document.querySelectorAll(`.${selectEl}`)) {
        const select = document.querySelectorAll(`.${selectEl}`);
        select.forEach((item)=> {
            item.selectedIndex = 0;
        })
        // Рендер при обнулении
        selectUnlock('select-day', 'select-time')
    }
    else {
        console.log('Ошибка переданных данных')
    }
}
const selectUnlock = (selectFlag, selectСhangeable ) => {
    if(document.getElementById(`${selectFlag}`) && document.getElementById(`${selectСhangeable}`)) {
        const selectFirst = document.getElementById(`${selectFlag}`);
        const selectSecond = document.getElementById(`${selectСhangeable}`);


        selectFirst.selectedIndex !== 0 ? selectSecond.disabled = false : selectSecond.disabled = true;
        
    }
    else {
        console.log('Ошибка переданных данных')
    }
}

document.querySelector('.site-phone__preview-btn').addEventListener('click', () => {
  openForm('site-phone__container', 'site-phone__preview-btn')
})

document.querySelector('.site-phone__close-btn').addEventListener('click', () => {
  closeForm('site-phone__container', 'site-phone__preview-btn')
})

document.querySelector('.site-phone__change-btn').addEventListener('click', () => {
    chengeForm('Выберите дату и врeмя для звонка', 'Позвонить сейчас');
    resetSelect('site-phone__list');

})
document.getElementById('select-day').addEventListener('change', () => {
    selectUnlock('select-day', 'select-time')
})
