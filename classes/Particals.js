import { cnvContxt } from "../settings/canvasSettinge.js"

const friction = 0.99

export class Particals {
  constructor(x, y, radius, color, velocity) {
    this.x = x
    this.y = y
    this.radius = radius
    this.color = color
    this.velocity = velocity
    this.alpha = 1
  }

  draw() {
    cnvContxt.save()
    cnvContxt.globalAlpha = this.alpha
    cnvContxt.beginPath()
    cnvContxt.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    cnvContxt.fillStyle = this.color
    cnvContxt.fill()
    cnvContxt.restore()
  }

  update() {
    this.draw()
    this.x += this.velocity.x
    this.y += this.velocity.y
    this.velocity.x *= friction
    this.velocity.y *= friction
    this.alpha -= 0.01
  }
}
