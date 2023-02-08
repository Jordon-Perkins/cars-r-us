import { getInteriors, setInterior } from "./database.js";

let interiorOptions = getInteriors()

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "interior") {
            setInterior(parseInt(changeEvent.target.value))
        }
    }
)

export const Interiors = () => {
    return `<h2>Interiors</h2>
        <select id="interior">
            <option value="0">Select an interior fabric</option>
            ${
                interiorOptions.map(
                    (interior) => {
                        return `<option value="${interior.id}">${interior.fabric}</option>`
                    }
                ).join("")
            }
        </select>`
}