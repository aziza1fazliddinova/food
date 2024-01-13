const open_btns = document.querySelectorAll('button[data-modal]')
const close_btns = document.querySelectorAll('[data-close]')
const modal = document.querySelector('.modal')

open_btns.forEach((btn) => {
    btn.onclick = () => {
        modal.classList.add('show', 'fade')
    }
})
close_btns.forEach((btn) => {
    btn.onclick = () => {
        modal.classList.remove('show', 'fade')
    }
})


// slider

const slides = document.querySelectorAll('.offer__slide')
const next_btn = document.querySelector('.offer__slider-next')
const prev_btn = document.querySelector('.offer__slider-prev')
const current = document.querySelector('#current')
console.log(slides);
let slideIndex = 1

slideShow(slideIndex)

function slideShow(n) {
    current.innerHTML = '0' + n

    slides.forEach(slide => slide.classList.add('hide', 'fade'))
    slides[slideIndex - 1].classList.remove('hide')
}

next_btn.onclick = () => {
    if (slideIndex < slides.length) {
        slideIndex++
        slideShow(slideIndex)
    }
}

prev_btn.onclick = () => {
    if (slideIndex > 1) {
        slideIndex--
        slideShow(slideIndex)
    }
}



let tabheader_items = document.querySelectorAll('.tabheader__item')
let tabcontents = document.querySelectorAll('.tabcontent')

tabheader_items.forEach(item => {
    item.onclick = () => {
        tabheader_items.forEach(item2 => {
            item2.classList.remove('tabheader__item_active')
        });
        item.classList.add('tabheader__item_active')
        tabcontents.forEach(item2 => {
            item2.style.display = 'none'
            if (item2.id == item.id) {
                item2.style.display = 'flex'
            }
        });
    }
});

tabheader_items.forEach(item => {
    if (item.classList.contains('tabheader__item_active')) {
        tabcontents.forEach(item2 => {
            item2.style.display = 'none'
            if (item2.id == item.id) {
                item2.style.display = 'flex'
            }
        });
    }
});


const user_data = {
    gender: "woman"
}

const gender_btns = document.querySelectorAll('[data-gender]')
const inputs = document.querySelectorAll('.calculating__choose_medium input')
const actions = document.querySelectorAll('.calculating__choose_big div')
const result_view = document.querySelector('#result')


gender_btns.forEach(btn => {
    btn.onclick = () => {
        gender_btns.forEach(btn => btn.classList.remove('calculating__choose_big'))
        btn.classList.add('calculating__choose_big')

        const g = btn.dataset.gender
        user_data["gender"] = g

    }
})

inputs.forEach(inp => {
    inp.onkeyup = () => {
        user_data[inp.id] = inp.value
    }
})

let prew = 1
actions.forEach((div, inx) => {
    div.onclick = () => {
        actions[prew].classList.remove('calculating__choose-item')
        div.classList.add('calculating__choose-item')
        prew = idx
        const cft = div.dataset.cft

        if (user_data.gender === 'woman') {
            const result = (655.1 + (9.563 * user_data['weight']) + (1.85 * user_data['height']) - (4.676 * user_data['age'])) * cft

            result_view.innerHTML=Math.round(result)
        }else{
            const result = (66.5 + (13.75 * user_data['weight']) + (5.003 * user_data['height']) - (6.775*user_data[age]))*cft

            result_view.innerHTML=Math.round(result)
        }
    }
})