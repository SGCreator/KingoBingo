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
    const modal = (shadow,btnStart,btnClose,mainModal) => {
    const modal = document.querySelector(shadow),
          start = document.querySelector(btnStart),
          close = document.querySelector(btnClose),
          main = document.querySelector(mainModal),
          body = document.body

    modal.addEventListener('click', (e) => {
        if(e.target.classList.contains('shadow-modal__wrap')){
            modal.classList.remove('show')    
            main.classList.remove('show')
            body.style.overflow = 'auto'    
        }
    })

    close.addEventListener('click', () => {
        modal.classList.remove('show')    
        main.classList.remove('show')
        body.style.overflow = 'auto'    
    })

    start.addEventListener('click', (e) => {
        e.preventDefault()
        modal.classList.add('show')
        main.classList.add('show')
        body.style.overflow = 'hidden'
    })

    
}
modal('.shadow-modal','.block-content-rules-ruleBtn','.modal__close','.modal');
})