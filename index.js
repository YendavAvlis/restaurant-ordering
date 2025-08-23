import { menuArray } from "./data.js";

const itemsOrdered = []

document.addEventListener('click', (e) => {
    if(e.target.dataset.add){
        handleClickAdd(e.target.dataset.add)
    }

})

function handleClickAdd(itemId){
    const targetItemId = menuArray.filter((item) => {
            return String(item.id) === itemId
    })[0]

    itemsOrdered.push(targetItemId.price)
    getTotalPrice(itemsOrdered)
}

function getTotalPrice(orders){
    let total = orders.reduce((total, currentItem) => {
        return total + currentItem
    })

    console.log(total)

}

function getItems(){
    let menuItems = ``
    menuArray.forEach((item) => {
        menuItems += `
            <div class="item">
                <div>
                    <span class="emoji">${item.emoji}</span>
                    <div class="item-description">
                        <h2>${item.name}</h1>
                        <p>${item.ingredients}</p>
                        <h3>$${item.price}</h3>
                    </div>
                </div>

                <img src="./images/add-btn.svg" alt="" data-add="${item.id}">
            </div>
            <hr />
        `
    })

    return menuItems
}

function render(){
    document.querySelector('#item-list').innerHTML = getItems(menuArray)
}

render()
