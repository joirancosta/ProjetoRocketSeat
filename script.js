function toggMode() {
  const html = document.documentElement
  /*
  if(html.classList.contains('light')){
    html.classList.remove('light')
  } else {
    html.classList.add('light')
  }
*/
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute("alt", "foto de perfil de dia")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute("alt", "foto de perfil a noite")
  }
}
