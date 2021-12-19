import getData from './getData.js'
import renderGoods from './renderGoods.js'
import { categoryFilter } from './filters.js'

const catalog = () => {
    const btnCatalog = document.querySelector('.catalog-button > button')
    const catalogModal = document.querySelector('.catalog')
    const catalogModalItems = document.querySelectorAll('.catalog-list > li')

    let isOpen = false

    btnCatalog.addEventListener('click', () => {
        if (!isOpen) {
            catalogModal.style.display = 'block'
        } else {
            catalogModal.style.display = ''
        }

        isOpen = !isOpen
    })

    catalogModalItems.forEach(item => {
        item.addEventListener('click', () => {
            const text = item.textContent

            getData().then(data => {
                renderGoods(categoryFilter(data, text))
            })
        })
    })
}

export default catalog