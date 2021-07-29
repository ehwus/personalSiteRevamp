{
  const menu = document.getElementById('menu');
  const menuLinks = menu.querySelectorAll('a');

  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      const currentLink = menu.querySelector('.selected');
      currentLink.classList.remove('selected');
      link.classList.add('selected');

      const currentContent = document.querySelector('.' + currentLink.dataset.section);
      const newContent = document.querySelector('.' + link.dataset.section);

      currentContent.style.display = "none";
      newContent.style.display = "block";
    });
  });
}
