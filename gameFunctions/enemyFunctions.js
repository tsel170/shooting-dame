import { Enemy } from "../classes/Enemy.js"
import { player, enemys } from "../index.js"
import { canvas } from "../settings/canvasSettinge.js"

let spawnTime = 1000
let minEnemySize = 10
let maxEnemySize = 40
export const spawnEnemies = () => {
  setInterval(() => {
    let x, y
    const radius =
      parseInt(Math.random() * (maxEnemySize - minEnemySize)) +
      minEnemySize

    if (Math.random() < 0.5) {
      x = Math.random() < 0.5 ? 0 - radius : radius + canvas.width
      y = Math.random() * canvas.height
    } else {
      x = Math.random() * canvas.width
      y = Math.random() < 0.5 ? 0 - radius : radius + canvas.width
    }

    const color = `hsl( ${Math.random() * 360} ,50%,50%)`

    const angle = Math.atan2(player.y - y, player.x - x)
    const velocity = {
      x: Math.cos(angle) / 2,
      y: Math.sin(angle) / 2,
    }

    const enemy = new Enemy(x, y, radius, color, velocity)
    enemys.push(enemy)
    console.log(enemys)
  }, spawnTime)
}
