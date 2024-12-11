import { canvas } from "./canvasSettinge.js"

const body = document.querySelector("body")
export const scoreElementDiv = document.createElement("div")
scoreElementDiv.classList.add("score")
body.appendChild(scoreElementDiv)
body.insertBefore(scoreElementDiv, canvas)

export const scoreElementSpan = document.createElement("span")

scoreElementDiv.appendChild(scoreElementSpan)

export const containner = document.createElement("div")
containner.classList.add("containner")

containner.innerHTML = `<div class="innerContainner">
    <h2 id="points">0</h2>
    <p >points</p>
    <div>
       <button id="startBTN">start game</button>
    </div>
</div>`

body.appendChild(containner)
body.insertBefore(containner, canvas)

export const startBTN = document.querySelector("#startBTN")
export const points = document.querySelector("#points")
