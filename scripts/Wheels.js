import { getWheels, setWheel } from "./database.js"

let wheelOptions = getWheels()

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "wheel") {
            setWheel(parseInt(changeEvent.target.value))
        }
    }
)

export const Wheels = () => {
    return `<h2>Wheels</h2>
        <select id="wheel">
            <option value="0">Select a wheel style</option>
            ${
                wheelOptions.map(
                    (wheel) => {
                        return `<option value="${wheel.id}">${wheel.style}</option>`
                    }
                ).join("")
            }
        </select>
    `
}