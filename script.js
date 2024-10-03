const openButton = document.querySelector('.open-button')
const container = document.querySelector('.container')
const closeIcon = document.querySelector('.close-icon')
const popup = document.querySelector('.popup')
const email = document.querySelector("body > div > div > div.subscribe > input[type=email]")
const subscribe = document.querySelector("body > div > div > div.subscribe > button")

openButton.addEventListener('click', () => {
    email.style.fontSize = '14px'
    container.classList.add('open')
})
closeIcon.addEventListener('click', () => container.classList.remove('open'))
subscribe.addEventListener('click', () => {
    if (email.value) {
        email.placeholder = 'EMAIL ADDRESS'
        email.value = ''
        container.classList.remove('open')
    } else {
        email.placeholder = 'Please enter you e-mail !'
    }
})

email.addEventListener('input', () => {
    email.placeholder = 'EMAIL ADDRESS'
    email.style.fontSize = '24px'
})

container.addEventListener('click', () => container.classList.remove('open'))
popup.addEventListener('click', (e) => e.stopPropagation())
openButton.addEventListener('click', (e) => e.stopPropagation())

const mediaQuery = window.matchMedia("(max-width: 768px)");

if (mediaQuery.matches) {
    email.addEventListener('input', () => {
        email.style.fontSize = '14px'
    })
}

