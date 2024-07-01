Array.from(document.getElementById("keypadCY").children).forEach(i => {
  i.ontouchstart = (e) => { e.preventDefault() }
  i.ontouchend  = (e) => { e.preventDefault() }
})

document.getElementById("infoOutput").value = "FX-991EX (CY234)"
