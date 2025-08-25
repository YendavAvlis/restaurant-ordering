import { menuArray } from "./data.js";

const totalItemsOrdered = []
let selectedItems = []
const order = document.querySelector('#order')

document.addEventListener('click', (e) => {
    if(e.target.dataset.add){
        handleClickAdd(e.target.dataset.add)
    }
    if(e.target.dataset.remove){
        handleClickRemove(e.target.dataset.remove)
    }

})

function handleClickAdd(itemId){

    const targetItemId = menuArray.filter((item) => {
            return String(item.id) === itemId
    })[0]

    totalItemsOrdered.push(targetItemId.price)
    selectedItems.push({
        id: targetItemId.id,
        name: targetItemId.name,
        price: targetItemId.price,
        quantity: 0
    })

    console.log()
    render()
}


function handleClickRemove(itemName){
    // let numItemId = parseInt(itemId)
    console.log('before',selectedItems)
    selectedItems = selectedItems.filter(item => item.name !== itemName)
    // selectedItems.splice(
    //     selectedItems.findIndex(item => item.id === numItemId), 1
    // )
    console.log('after',selectedItems)

    render()
}


function getTotalPrice(orders){
    let total = 0
    if(orders.length > 0){
            total = orders.reduce((total, currentItem) => {
            return total + currentItem
        })
    } else {
        return 0
    }
    return total
}

let itemCount = 0
function getItems(){
    let menuItems = ``
    let order = ``
    let items = ``
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

    selectedItems.forEach(item => {

        if (!items.includes(item.name)){

            items += `
                <div class="selected-item">
                    <div>
                        <span>${item.name}</span>
                        <button data-remove="${item.name}">remove</button>
                    </div>
                    <div>
                        <span>x${item.quantity += 1}</span>
                        <span>$${item.price}</span>
                    </div>
                </div>`

        }


                console.log(typeof item.name)
    })

    order = `<div id="order">
                <h2>Your order</h2>
                <div id="ordered-items">
                    ${
                        items
                    }
                </div>
                <hr/>
                <div id="total-price">
                    <span>Total price:</span>
                    <span>$${getTotalPrice(totalItemsOrdered)}</span>
                </div>
                <button id="complete-order">Complete order</button>
            </div>`

    return menuItems + order
}

function render(){
    document.querySelector('#container').innerHTML = getItems()
    console.log('From render', selectedItems)



}



render()
