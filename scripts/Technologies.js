import { getTechnology, setTech } from "./database.js";

let technologyOptions = getTechnology()

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "tech") {
            setTech(parseInt(changeEvent.target.value))
        }
    }
)

export const Technologies = () => {
    return `<h2>Technologies</h2>
        <select id="tech">
            <option value="0">Select a technology package</option>
            ${
                technologyOptions.map(
                    (tech) => {
                        return `<option value="${tech.id}">${tech.package}</option>`
                    }
                ).join("")
            }
        </select>
    `
}