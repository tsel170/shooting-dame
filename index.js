import "./settings/canvasSettinge.js"
import "./settings/body.js"
import "./settings/events.js"
import { Player } from "./classes/Player.js"
import { middleX, middleY } from "../settings/canvasSettinge.js"

let x = middleX
let y = middleY

export let particals = []
export let player = new Player(x, y, 20, "white")
export let projectiles = []
export let enemys = []

export const init = () => {
  particals.length = 0
  projectiles.length = 0
  enemys.length = 0

  player.x = x
  player.y = y
  player.radius = 20
  player.color = "white"
}

export const toAnimate = { particals, player, enemys, projectiles }
