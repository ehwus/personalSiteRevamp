{
  const pages = {
    homeHtml: document.getElementById('content').innerHTML,
    aboutMeHtml: '<p>This will be the about me section</p>',
    portfolioHtml: '<p>This will be the portfolio section</p>'
  }

  const menu = document.getElementById('menu');
  const content = document.getElementById('content');
  const menuLinks = menu.querySelectorAll('a');

  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      const currentSelection = menu.querySelector('.selected');
      currentSelection.classList.remove('selected');
      link.classList.add('selected');

      const newHtml = pages[link.dataset.htmlVar];
      content.innerHTML = newHtml;
    })
  })
}
