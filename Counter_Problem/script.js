
const plusBtn = document.querySelector('.plus-btn')
const minusBtn = document.querySelector('.minus-btn')
const changeBy = document.querySelector('.changeBy')
const resetBtn = document.querySelector('.reset-btn')

const count = document.querySelector('.count')


plusBtn.addEventListener('click', () => {
    const countVal = parseInt(count.innerText)
    const changeByValue = parseInt(changeBy.value)
    count.innerText = countVal + changeByValue;
})

minusBtn.addEventListener('click', () => {
    const countVal = parseInt(count.innerHTML)
    const changeByValue = parseInt(changeBy.value)
    count.innerText = countVal - changeByValue;
})

resetBtn.addEventListener('click', () => {
    count.innerText = 0;
})



