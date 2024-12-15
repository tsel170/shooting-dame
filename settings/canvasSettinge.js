export const canvas = document.querySelector("canvas")
export const cnvContxt = canvas.getContext("2d")

canvas.width = window.innerWidth
canvas.height = window.innerHeight

export let middleX = canvas.width / 2
export let middleY = canvas.height / 2
export const updateMiddle = (x, y) => {
  middleX = x
  middleY = y
}
