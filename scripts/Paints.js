import { getPaints, setPaint } from "./database.js";


let paintOptions = getPaints()

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "paints") {
            setPaint(parseInt(changeEvent.target.value))
        }
    }
)

export const Paints = () => {
    return `<h2>Paints</h2>
        <select id="paints">
            <option value="0">Select a paint color</option>
            ${
                paintOptions.map(
                    (paint) => {
                        return `<option value="${paint.id}">${paint.color}</option>`
                    }
                ).join("")
            }
        </select>
    `
}