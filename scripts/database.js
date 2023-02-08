// database with all options avaible to customers to place orders

const database = {
    paints: [
        {id: 1, color: "Silver", price: 65},
        {id: 2, color: "Midnight Blue", price: 89},
        {id: 3, color: "Firebrick Red", price: 32},
        {id: 4, color: "Spring Green", price: 24}
    ],
    interiors: [
        {id: 1, fabric: "Beige Fabric", price: 87.92},
        {id: 2, fabric: "Charcoal Fabric", price: 38.23},
        {id: 3, fabric: "White Leather", price: 98},
        {id: 4, fabric: "Black Leather", price: 92.80}
    ],
    technologies: [
        {id: 1, package: "Basic Package (basic sound system)", price: 600.21},
        {id: 2, package: "Navigation Package (includes integrated navigation controls)", price: 745.92},
        {id: 3, package: "Visibility Package (includes side and reat cameras)", price: 654.15},
        {id: 4, package: "Ultra Package (includes navigation and visibility packages)", price: 1063.85}
    ],
    wheels: [
        {id: 1, style: "17-inch Pair Radial", price: 273.78},
        {id: 2, style: "17-inch Pair Radial Black", price: 282.18},
        {id: 3, style: "18-inch Pair Spoke Silver", price: 291.02},
        {id: 4, style: "18-inch Pair Spoke Black", price: 301.54}
    ],
    customOrders: [
        {
            id: 1,
            paintId: 3,
            interiorId: 2,
            technologyId: 3,
            wheelId: 4,
            timestamp: 1614659931693
        }
    ],
    orderBuilder: {},
}




// eported get functions for other future .js files

export const getPaints = () => {
    return database.paints.map(paints => ({...paints}))
}

export const getInteriors = () => {
    return database.interiors.map(interiors => ({...interiors}))
}

export const getTechnology = () => {
    return database.technologies.map(technologies => ({...technologies}))
}

export const getWheels = () => {
    return database.wheels.map(wheels => ({...wheels}))
}

export const getOrders = () => {
    return database.customOrders.map(orders => ({...orders}))
}


export const setInterior = (id) => {
    database.orderBuilder.interiorId = id
}

export const setPaint = (id) => {
    database.orderBuilder.paintId = id
}

export const setTech = (id) => {
    database.orderBuilder.technologyId = id
}   
export const setWheel = (id) =>  {
    database.orderBuilder.wheelId = id
}





export const addCustomOrder = () => {
    // Copy the current state of user choices
    const newOrder = {...database.orderBuilder}

    // Add a new primary key to the object
    const lastIndex = database.customOrders.length - 1
    newOrder.id = database.customOrders[lastIndex].id + 1

    // Add a timestamp to the order
    newOrder.timestamp = Date.now()

    // Add the new order object to custom orders state
    database.customOrders.push(newOrder)

    // Reset the temporary state for user choices
    database.orderBuilder = {}

    // Broadcast a notification that permanent state has changed
    document.dispatchEvent(new CustomEvent("stateChanged"))
}