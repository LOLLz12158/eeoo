
Array.from(document.getElementById("keypadCY").children).forEach(i => {
  i.ontouchstart = (e) => { e.preventDefault() }
  i.ontouchend  = (e) => { e.preventDefault() }
})

document.getElementById("hud").style = "display: none;"
