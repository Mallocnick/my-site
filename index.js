// const heading = document.getElementById('hello')
// const heading2 = document.getElementsByTagName('h2')[0]
// const heading2 = document.getElementsByClassName('h2-class')[0]
// const heading2 = document.querySelector('.h2-class')
// const heading2 = document.querySelector('#sub-hello') // Всегда 1 элемент
const heading = document.querySelector('h1')
const junior = document.querySelector('p')

// const heading3 = heading2.nextElementSibling
const h2List = document.querySelectorAll('h2')
const heading3 = h2List[h2List.length - 1]


setTimeout(() => {
    alert('Сейчас начнется пажилой дэнс тега <\p>')
}, 1000)

setInterval(() => {
    addStylesTo(junior, 'Пажилой дэнсер')
}, 2000)

function addStylesTo(node, text, color = 'red') {
    if (node.style.color === 'red'){
        node.style.color = 'yellow'
        node.style.fontFamily = 'Montserrat'
        node.style.textAlign = 'left'
        node.textContent = text
        }
    else {
        node.style.color = 'red'
        node.style.fontFamily = 'Helvetica'
        node.style.textAlign = 'center'}
}

    // falsy: '', undefined, null, 0, false



heading.onclick = () => {
    if (heading.style.color === 'white') {
        heading.style.color = 'black'
    } else {
        heading.style.color = 'white'
    }
}
