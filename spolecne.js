const menuTlacitkoElement = document.body.querySelector("#menu-tlacitko")

const tridaShow = () =>{
  document.body.querySelector("#menu-polozky").classList.toggle("show")
}

menuTlacitkoElement.addEventListener("klick", tridaShow)
