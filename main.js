const menus = document.getElementsByClassName("menu");
let activo = false;
//Listener menu
for (let menu of menus) {
  menu.addEventListener("click", function () {
      clearMenus();
    cambio(menu.id);
  });
  let sub = menu.getElementsByClassName("submenu");
  sub[0].addEventListener("mouseleave", function (e) {
    if (activo){

        e.target.parentElement.classList.remove("active");
        activo = false;
    }
   
  });
}
function clearMenus() {
 if (activo){
    let elementos = document.getElementsByClassName("active");
    for(elemento of elementos){
        
        elemento.classList.remove("active");
    }
    activo = false;
 }
}
function cambio(id) {
  let elem = document.getElementById(id);

  if (activo) {
    elem.classList.remove("active");
    activo = false;
    console.log("Ocultar");
  } else {
    elem.classList.add("active");
    activo = true;
    console.log("Mostrar");
  }
}

// function cambio(menu) {
//   let submenu = menu.getElementsByClassName("submenu");
//   let flecha = menu.getElementsByClassName("flecha");

//   if (activo) {
//     submenu[0].classList.toggle("visible");
//     flecha[0].classList.toggle("flecha-up");
//     activo = false;
//     console.log("Ocultar");
//   } else {
//     submenu[0].classList.toggle("visible");
//     flecha[0].classList.toggle("flecha-up");
//     activo = true;
//     console.log("Mostrar");
//   }
// }
// function toggleSubmenu(e) {
//     console.log(e);
//     e.target.parentElement.children[0].children[0].classList.toggle("flecha-up");
//     e.target.classList.toggle("visible");
//   }
