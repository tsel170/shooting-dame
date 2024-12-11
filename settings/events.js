import { createProjectile } from "../gameFunctions/playerFunctions.js"
import { canvas } from "./canvasSettinge.js"
import { init, player, toAnimate } from "../index.js"
import { scoreElementDiv, startBTN, containner } from "./body.js"
import { animate } from "../gameFunctions/animations.js"
import { spawnEnemies } from "../gameFunctions/enemyFunctions.js"
canvas.addEventListener("click", (e) => {
  createProjectile(e)
})
scoreElementDiv.addEventListener("click", (e) => {
  createProjectile(e)
})

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight

  player.x = canvas.width / 2
  player.y = canvas.height / 2
})

startBTN.addEventListener("click", () => {
  init()
  animate(toAnimate)
  spawnEnemies()
  containner.style.display = "none"
})
