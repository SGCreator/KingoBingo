'use strict'
document.addEventListener('DOMContentLoaded', function(){
    const select = (selectLabel,selectList,arrSel) => {
    const arrow = document.querySelector(arrSel),
          label = document.querySelector(selectLabel),
          list = document.querySelector(selectList)
        
    label.addEventListener('click', (e) => {
        e.preventDefault()
        if(list.classList.contains('header-logoSelect-lang--close')){
            list.classList.remove('header-logoSelect-lang--close')
            label.classList.add('header-logoSelect-label--brNo')
            arrow.classList.add('active')
        } else {
            list.classList.add('header-logoSelect-lang--close')
            label.classList.remove('header-logoSelect-label--brNo')
            arrow.classList.remove('active')
        }
    })
}

select('.header-logoSelect-label', '.header-logoSelect-lang','.header-logoSelect-label__arrImg');
})