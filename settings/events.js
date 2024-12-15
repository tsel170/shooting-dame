import { createProjectile } from "../gameFunctions/playerFunctions.js"
import {
  canvas,
  cnvContxt,
  middleX,
  middleY,
  updateMiddle,
} from "./canvasSettinge.js"
import { init, player, toAnimate } from "../index.js"
import { scoreElementDiv, startBTN, containner } from "./body.js"
import { animate } from "../gameFunctions/animations.js"
import {
  spawnEnemies,
  spownID,
} from "../gameFunctions/enemyFunctions.js"

window.addEventListener("keydown", (e) => {
  e.preventDefault()
})
window.addEventListener("keypress", (e) => {
  e.preventDefault()
})
window.addEventListener(
  "wheel",
  (e) => {
    e.preventDefault()
  },
  { passive: false }
)

canvas.addEventListener("click", (e) => {
  createProjectile(e)
})
scoreElementDiv.addEventListener("click", (e) => {
  createProjectile(e)
})

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight

  updateMiddle(canvas.width / 2, canvas.height / 2)

  player.x = middleX
  player.y = middleY
})

startBTN.addEventListener("click", () => {
  init()
  animate(toAnimate)
  clearInterval(spownID)
  spawnEnemies()
  containner.style.display = "none"
})

window.addEventListener

let num = 6

function pow(n) {
  n *= n
}
pow(num)
console.log(num)
