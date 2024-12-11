import { cnvContxt, canvas } from "../settings/canvasSettinge.js"
import { Particals } from "../classes/Particals.js"
import {
  scoreElementSpan,
  containner,
  points,
} from "../settings/body.js"
let animationFrame
export let score = 0
export const animate = (toAnimate) => {
  const { particals, player, enemys, projectiles } = toAnimate

  scoreElementSpan.innerHTML = `score: ${score}`

  animationFrame = requestAnimationFrame(() => animate(toAnimate))

  cnvContxt.fillStyle = "rgb(0,0,0,0.1)"
  cnvContxt.fillRect(0, 0, canvas.width, canvas.height)

  particals.forEach((partical, i) => {
    if (partical.alpha <= 0) {
      particals.splice(i, 1)
    } else partical.update()
  })

  projectiles.forEach((projectile, i) => {
    projectile.update()

    if (
      projectile.x + projectile.radius < 0 ||
      projectile.x - projectile.radius > canvas.width ||
      projectile.y + projectile.radius < 0 ||
      projectile.y - projectile.radius > canvas.height
    )
      projectiles.splice(i, 1)
  })

  enemys.forEach((enemy, i) => {
    enemy.update()

    const dist = Math.hypot(player.x - enemy.x, player.y - enemy.y)

    if (dist - enemy.radius - player.radius < 1) {
      cancelAnimationFrame(animationFrame)
      containner.style.display = "flex"
      points.innerText = score
      score = 0
    }

    projectiles.forEach((projectile, projectileIndex) => {
      const dist = Math.hypot(
        projectile.x - enemy.x,
        projectile.y - enemy.y
      )

      if (dist - enemy.radius - projectile.radius < 1) {
        score += parseInt(enemy.radius)
        for (let i = 0; i < enemy.radius / 2; i++) {
          particals.push(
            new Particals(
              projectile.x,
              projectile.y,
              Math.random() * 2,
              enemy.color,
              {
                x: (Math.random() - 0.5) * (Math.random() * 4),
                y: (Math.random() - 0.5) * (Math.random() * 4),
              }
            )
          )
        }

        if (enemy.radius - 10 > 10) {
          gsap.to(enemy, { radius: enemy.radius - 10 })
          setTimeout(() => {
            projectiles.splice(projectileIndex, 1)
          }, 0)
        } else {
          setTimeout(() => {
            enemys.splice(i, 1)
            projectiles.splice(projectileIndex, 1)
          }, 0)
        }
      }
    })
  })
  player.draw()
}
