import { Projectile } from "../classes/Projectile.js"
import { particals, player, projectiles } from "../index.js"

let speed = 4

export const createProjectile = (e) => {
  const angle = Math.atan2(e.clientY - player.y, e.clientX - player.x)
  const velocity = {
    x: Math.cos(angle) * speed,
    y: Math.sin(angle) * speed,
  }
  const projectile = new Projectile(
    player.x + (velocity.x / speed) * player.radius,
    player.y + (velocity.y / speed) * player.radius,
    5,
    "hsl(0,50%,50%)",
    velocity
  )
  projectiles.push(projectile)
}
