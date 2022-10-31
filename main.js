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
