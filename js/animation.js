document.addEventListener('DOMContentLoaded', () => {
  const animItems = document.querySelectorAll('.anim-items')

  if (animItems.length > 0) {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15 
    }

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('_active')
          observer.unobserve(entry.target)
        }
      })
    }, observerOptions)

    animItems.forEach(item => {
      observer.observe(item)
    })
  }
})

document.addEventListener('DOMContentLoaded', () => {
  const burgerButton = document.querySelector('.header-bar__burger')
  const menuBlock = document.querySelector('.header-menu')
  const bodyBlock = document.body

  if (burgerButton && menuBlock) {
    burgerButton.addEventListener('click', () => {
      burgerButton.classList.toggle('header-bar__burger--open')
      menuBlock.classList.toggle('header-menu--open')
      bodyBlock.classList.toggle('_lock')
    })

    // Закрытие меню при клике на любую ссылку
    const menuLinks = document.querySelectorAll('.header-menu__link')
    menuLinks.forEach(link => {
      link.addEventListener('click', () => {
        burgerButton.classList.remove('header-bar__burger--open')
        menuBlock.classList.remove('header-menu--open')
        bodyBlock.classList.remove('_lock')
      })
    })
  }
})