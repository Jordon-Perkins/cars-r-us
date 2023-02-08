import { Technologies } from "./Technologies.js"
import { Interiors } from "./Interiors.js"
import { Paints } from "./Paints.js"
import { Wheels } from "./Wheels.js"
import { getOrders, addCustomOrder, getInteriors, getPaints, getTechnology, getWheels } from "./database.js"



document.addEventListener(
    "click",
    (clickEvent) => {
        const id = clickEvent.target.id
        if (id === "orderButton") {
            addCustomOrder()  
        }
    }
)


const cars = () => {
    return `
        <h1>Cars 'R Us: Personal Car Builder</h1>

        <article class="choices">
            <section class="choices__paint options">
                ${Paints()}
            </section>
            <section class="choices__Interior options">
                ${Interiors()}
            </section>
            <section class="choices__Wheels options">
               ${Wheels()}
            </section>
            <section class="choices__Technologies options">
                ${Technologies()}
            </section>
        </article>

        <article>
            <button id="orderButton">Place Car Order</button>
            
        </article>

        <article class="customOrders">
            <h2>Custom Car Orders</h2>
            ${Orders()}
            
        </article>
    `
}


const buildOrderListItem = (order) => {
    // Remember that the function you pass to find() must return true/false
    // const foundMetal = metals.find(
    //     (metal) => {
    //         return metal.id === order.metalId
    //     }
    // )

    const chosenInterior = getInteriors().find((interior) => {return interior.id === order.interiorId})
    const chosenPaint = getPaints().find((paint) => {return paint.id === order.paintId})
    const chosenTechnology = getTechnology().find((tech) => {return tech.id === order.technologyId})
    const chosenWheel = getWheels().find((wheel) => {return wheel.id === order.wheelId})

     let variableWithTotalPrice = chosenInterior.price + chosenPaint.price + chosenWheel.price + chosenTechnology.price

    // To automatically format the number as currency
        const costString = variableWithTotalPrice.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
        })
    
    return `<li>
        Order #${order.id} costs ${costString}
        ${chosenPaint.color} car with ${chosenWheel.style}, ${chosenInterior.fabric} interior, and ${chosenTechnology.package} for a total cost of ${costString}.
    </li>`
}

 const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)
    html += listItems.join("")

    html += "</ul>"

    return html
}

const mainContainer = document.querySelector("#container")

const renderAllHTML = () => {
    mainContainer.innerHTML = cars()
}

renderAllHTML()

document.addEventListener("stateChanged", event => {
    console.log("State of data has changed. Regenerating HTML...")
    renderAllHTML()
})



document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "resource") {
            const chosenOption = changeEvent.target.value
            console.log(chosenOption)  // "1" or "2"
        }
    }
)