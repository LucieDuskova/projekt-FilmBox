// pri kliknutí přidání třídy show na id=menu-tlacitko

// Bonus
// Změňte ikonku tlačítka na křížek, pokud je menu rozbalené a na hamburger, pokud je sbalené.

// HTML ikonky křížku: <i class="fas fa-xmark"></i>
// HTML ikonky hamburgeru: <i class="fas fa-bars"></i>



const menuTlacitkoElement = document.querySelector("#menu-tlacitko")
const menuPolozkyElement = document.querySelector("#menu-polozky")
const menuIkonaElement = menuTlacitkoElement.querySelector("i")


const nemuTlacitkoHandler = () =>{
  const shown = menuPolozkyElement.classList.toggle("show")
  if(shown){
    menuIkonaElement.classList.remove("fa-bars")
    menuIkonaElement.classList.add("fa-xmark")
  }else{
    menuIkonaElement.classList.add("fa-bars")
    menuIkonaElement.classList.remove("fa-xmark")
  }
}


menuTlacitkoElement.addEventListener("click", nemuTlacitkoHandler)


