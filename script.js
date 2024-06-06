function togglemode() {
  const html = document.documentElement

  html.classList.toggle('light')

  const img = document.querySelector('#caixa1 img')
  if(html.classList.contains('light')){
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute (alt = "foto de Mayk Brito oculos escuro")
    }  else {
      img.setAttribute("src", "./assets/avatar.png")
      img.setAttribute((alt = "foto de Mayk Brito"))

    }
    
}