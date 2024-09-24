function togglemode() {
  const html = document.documentElement

  html.classList.toggle('light')

  const img = document.querySelector('#caixa1 img')
  if(html.classList.contains('light')){
    img.setAttribute("src", "./assets/avatarFundoDesfoc.png")
    img.setAttribute (alt = "foto de tony")
    }  else {
      img.setAttribute("src", "./assets/avatarFundoDesfoc.png")
      img.setAttribute((alt = "foto de Tony"))

    }
    
}