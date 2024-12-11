import { cnvContxt } from "../settings/canvasSettinge.js"

export class Player {
  constructor(x, y, radius, color) {
    this.x = x
    this.y = y
    this.radius = radius
    this.color = color
  }

  draw() {
    cnvContxt.beginPath()
    cnvContxt.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    cnvContxt.fillStyle = this.color
    cnvContxt.fill()
  }
}
