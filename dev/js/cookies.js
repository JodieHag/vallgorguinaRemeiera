
const setCookie = (name, value, box) => {
  const d = new Date()
  d.setTime(d.getTime() + 10 * 24 * 60 * 60 * 10000)
  const expires = 'expires=' + d.toUTCString()
  const path = 'path=/'

  document.cookie = `${name}=${value};${expires};${path}`

  // remove box
  if (box) {
    box.style.display = 'none'
  }
}

const getCookie = (cname) => {
  var name = cname + '='
  var ca = document.cookie.split(';')
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i]
    while (c.charAt(0) == ' ') {
      c = c.substring(1)
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length)
    }
  }
  return ''
}

const cookie = getCookie('vallgroguinaremei_cook')

const cookiesDiv = document.querySelector('.cookies')
if (cookie) {
  cookiesDiv.remove()
} else {
  if (cookiesDiv) {
    document.querySelector('.js-yes-cookie').addEventListener('click', (e) => {
      e.preventDefault()
      setCookie('vallgroguinaremei_cook', 'yes', cookiesDiv)
      dataLayer.push({ event: 'cookiepermission first page yes' })
      window.location.reload()
    })
    document.querySelector('.js-no-cookie').addEventListener('click', (e) => {
      e.preventDefault()
      setCookie('vallgroguinaremei_cook', 'no', cookiesDiv)
      dataLayer.push({ event: 'cookiepermission first page no' })
    })
  }
}
