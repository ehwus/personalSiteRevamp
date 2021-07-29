{
  const portfolioItems = [
    {
      name: "Chitter",
      liveUrl: "https://aws-chitter.herokuapp.com/",
      srcUrl: "https://github.com/ehwus/chitter-challenge",
      description: "A social network built in a weekend with PSQL / Ruby / Sinatra, with Rspec testing and deployment on Heroku and a vaporwave aesthetic.",
    },
    {
      name: "cybrdrag",
      srcUrl: "https://github.com/ehwus/cybrdrag",
      description: "a browser based fantasy sports style web game built with Node/Express," +
        "MongoDB, React, with Jest testing and deployment on Heroku (Makers Academy final group project)",
    },
    {
      name: "Restaurant",
      srcUrl: "https://github.com/ehwus/restaurant",
      liveUrl: "https://adoring-wescoff-ca1bfa.netlify.app/",
      description: "A single page app style site for a fictional restaurant, built using Vanilla JS and Webpack for bundling"
    },
    {
      name: "Etch-a-sketch",
      srcUrl: "https://github.com/ehwus/etch-a-sketch",
      liveUrl: "https://alexs-phenomenal-etchasketch.netlify.app/",
      description: "A fun etch-a-sketch toy made with JS",
    },
    {
      name: "Personal Site",
      srcUrl: "https://github.com/ehwus/personalSiteRevamp",
      liveUrl: "https://awithsmith.com/",
      description: "The site you are currently on! Made using HTML/JS/CSS and Parcel to bundle",
    },
  ];

  const menu = document.getElementById('menu');
  const menuLinks = menu.querySelectorAll('a');
  const portfolio = document.querySelector('.portfolioContent');

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

  const createPortfolioHtml = (item) => {
    const portfolioItem = document.createElement('div')
    portfolioItem.classList.add('portfolioItem');

    const title = document.createElement('h3');
    title.innerHTML = item.name;
    portfolioItem.append(title);

    const description = document.createElement('p');
    description.innerHTML = item.description;
    portfolioItem.append(description);

    const links = document.createElement('div');
    links.classList.add('portfolioLinks');
    const source = document.createElement('a');
    source.href = item.srcUrl;
    source.target = '_blank';
    source.innerHTML = 'Source'
    links.append(source);
    if (!!item.liveUrl) {
      const liveUrl = document.createElement('a');
      liveUrl.href = item.liveUrl;
      liveUrl.target = '_blank';
      liveUrl.innerHTML = 'Live Demo'
      links.append(liveUrl);
    }
    portfolioItem.append(links);

    return portfolioItem;
  }

  portfolioItems.forEach(work => {
    portfolio.append(createPortfolioHtml(work));
  })
}
