import { cnvContxt } from "../settings/canvasSettinge.js"

export class Projectile {
  constructor(x, y, radius, color, velocity) {
    this.x = x
    this.y = y
    this.radius = radius
    this.color = color
    this.velocity = velocity
  }

  draw() {
    cnvContxt.beginPath()
    cnvContxt.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    cnvContxt.fillStyle = this.color
    cnvContxt.fill()
  }

  update() {
    this.draw()
    this.x += this.velocity.x
    this.y += this.velocity.y
  }
}
