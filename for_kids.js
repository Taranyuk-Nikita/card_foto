document.querySelectorAll('.img_card').forEach(card => {
    card.addEventListener('click', () => {
        document.querySelector('#active_img').src = card.querySelector('.img_path').innerHTML
        document.querySelector('.modal_single_img').classList.add('_active')
        setTimeout(() => {
            document.querySelector('.img_wrapper').classList.add('_active')
        }, 500)
    })
})

document.querySelector('#close_modal').addEventListener('click', () => {
    setTimeout(() => {
        document.querySelector('.modal_single_img').classList.remove('_active')
    }, 500)
    document.querySelector('.img_wrapper').classList.remove('_active')
})