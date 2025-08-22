import { menuArray } from "./data.js";

const itemList = document.querySelector('#item-list')

function getItems(arr){
    arr.map((item) => {
        return itemList.innerHTML += `
            <div class="item">
                <div>
                    <span class="emoji">${item.emoji}</span>
                    <div class="item-description">
                        <h2>${item.name}</h1>
                        <p>${item.ingredients}</p>
                        <h3>$${item.price}</h3>
                    </div>
                </div>

                <button><img src="./images/add-btn.svg" alt=""></button>
            </div>
            <hr />
        `
    })
}

function render(){
    getItems(menuArray)
}

render()