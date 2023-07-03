const etchASketch = () => {
  let pixels
  let grid
  const shake = document.getElementById("shake")

  const generateArea = () => {
    grid = prompt("How many rows and columns do you need? Maximum: 100.")
    if (grid > 100){
      grid = 100
    } else {
    const canvas = () => {
      for (let i = 0; i < grid ** 2; i++) {
        const screen = document.getElementById("screen")
        screen.style.gridTemplateColumns = "Repeat(" + grid + ", 1fr"
        pixels = document.querySelectorAll(".pixel")
        let pixel = document.createElement("div")
        pixel.classList.add("pixel")
        pixel.addEventListener("mouseover", () => {
          addPixel(pixel)
        })
        screen.appendChild(pixel)
      }
    }
    canvas(grid)
  }
  }
  const addPixel = (pixel) => {
    if (pixel.classList.contains("clicked")) {
      pixel.classList.remove("clicked")
    } else {
      pixel.classList.add("clicked")
    }
  }

  shake.addEventListener("click", () => {
    pixels.forEach((pixel) => {
      pixel.classList.remove("clicked")
    })
  })

  generateArea()
}
etchASketch()
