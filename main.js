const menus = document.getElementsByClassName("menu");
let activo = false;
let activoId = "";
//Listener menu
for (let menu of menus) {
  menu.addEventListener("click", function () {
    if (!activo) {
      cambio(menu.id);
    } else {
      if (menu.id === activoId) {
        clearMenus();
        activo = false;
      } else {
        clearMenus();
        activo = false;
        cambio(menu.id);
      }
    }
  });

  let sub = menu.getElementsByClassName("submenu");
  sub[0].addEventListener("mouseleave", function (e) {
    clearMenus();
    activo = false;
    activoId = "";
  });
}

window.addEventListener("click", allclear);

function allclear(event) {
  if (event.target.id !== "company" && event.target.id !== "features") {
    clearMenus();
    activo = false;
    activoId = "";
  }
}

function clearMenus() {
  document.getElementById("features").classList.remove("active");
  document.getElementById("company").classList.remove("active");
}

function cambio(id) {
  let elem = document.getElementById(id);
  if (!activo) {
    elem.classList.add("active");
    activo = true;
    activoId = id;
  } else {
    clearMenus();
    activo = false;
    activoId = "";
  }
}
