const nav = document.querySelector('.mobile');
const menu = document.querySelector('.menu');

menu.addEventListener('click', () => {
  menu.classList.toggle('active');
  nav.classList.toggle('active');
});

document.querySelectorAll('.tem').forEach((n) => n.addEventListener('click', () => {
  menu.classList.remove('active');
  nav.classList.remove('active');
}));



const datacards = [
  {
    project_img: 'images/Portfolio.png',
    project_title: 'tonic',
    project_info_title: 'CANOPY',
    counter_image: 'images/counter.svg',
    project_info_text: ['Back End Dev', '2015'],
    project_description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    tags: ['html', 'css', 'javascript'],
    live_version: 'https://abass-rashid.github.io/portfolio',
    source_code: 'https://github.com/Abass-rashid/portfolio',
  },
  {
    project_img: 'images/Portfolio1.png',
    project_title: 'multi-post',
    project_info_title: 'CANOPY',
    counter_image: 'images/counter.svg',
    project_info_text: ['Back End Dev', '2015'],
    project_description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    tags: ['html', 'css', 'javascript'],
    live_version: 'https://abass-rashid.github.io/portfolio',
    source_code: 'https://github.com/Abass-rashid/portfolio',
  },
  {
    project_img: 'images/Portfolio2.png',
    project_title: 'Facebook 360',
    project_info_title: 'CANOPY',
    counter_image: 'images/counter.svg',
    project_info_text: ['Back End Dev', '2015'],
    project_description:
      "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
    tags: ['html', 'css', 'javascript'],
    live_version: 'https://abass-rashid.github.io/portfolio/',
    source_code: 'https://github.com/Abass-rashid/portfolio',
  },
  {
    project_img: 'images/Portfolio3.png',
    project_title: 'Uber Navigation',
    project_info_title: 'CANOPY',
    counter_image: 'images/counter.svg',
    project_info_text: ['Back End Dev', '2015'],
    project_description:
      'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    tags: ['html', 'css', 'javascript'],
    live_version: 'https://abass-rashid.github.io/portfolio/',
    source_code: 'https://github.com/Abass-rashid/portfolio',
  },
];

// Populate Project Card using an array of project data objects
const portfolio = document.querySelector('.works');
portfolio.removeChild(portfolio.firstElementChild);

datacards.forEach((project) => {
  const ul = document.createElement('ul');
  ul.className = 'project-card';
  portfolio.appendChild(ul);

  let li = document.createElement('li');
  li.className = 'project-img-wrapper';
  li.innerHTML = `<img src=${project.project_img} alt=${project.project_title} class='Project-img'>`;
  ul.appendChild(li);

  li = document.createElement('li');
  li.className = 'project-content-block';
  ul.appendChild(li);

  const projectHeader = document.createElement('div');
  projectHeader.className = 'project-header';
  li.appendChild(projectHeader);

  const h1 = document.createElement('h1');
  h1.className = 'project-title';
  h1.innerHTML = project.project_title;
  projectHeader.appendChild(h1);

  const projectInfo = document.createElement('div');
  projectInfo.className = 'project-info';
  projectHeader.appendChild(projectInfo);

  const h2 = document.createElement('h2');
  h2.className = 'project-info-title';
  h2.innerHTML = project.project_info_title;
  projectInfo.appendChild(h2);

  project.project_info_text.forEach((infoText) => {
    const img = document.createElement('img');
    img.src = project.counter_image;
    img.alt = 'counter';
    projectInfo.appendChild(img);

    const p = document.createElement('p');
    p.className = 'project-info-item';
    p.innerHTML = infoText;
    projectInfo.appendChild(p);
  });

  const projectDescription = document.createElement('p');
  projectDescription.className = 'project-description';
  projectDescription.innerHTML = project.project_description;
  li.appendChild(projectDescription);

  // li child ul
  const tags = document.createElement('ul');
  tags.className = 'tags';
  li.appendChild(tags);

  project.tags.forEach((tagText) => {
    const tagItem = document.createElement('li');
    tagItem.className = 'tag-item';
    tagItem.textContent = tagText;
    tags.appendChild(tagItem);
  });

  // li last child
  const actionContainer = document.createElement('div');
  actionContainer.className = 'action-container';
  li.appendChild(actionContainer);

  const actionButton = document.createElement('button');
  actionButton.className = 'action-btn see-project';
  actionButton.type = 'button';
  actionButton.textContent = 'See project';
  actionContainer.appendChild(actionButton);
});

// Desktop and Mobile pop-up Toogle
const seeProjectBtn = Array.from(document.querySelectorAll('.see-project'));
const closeModalBtn = document.querySelector('.modal-close-button');
const modal = document.querySelector('.modal-container');
const body = document.querySelector('body');

// Handle see project button click
seeProjectBtn.forEach((button, index) => {
  button.addEventListener('click', () => {
    modal.style.display = 'flex';
    body.style.overflow = 'hidden';

    // Populate Pop-up Modal
    const modalData = datacards[index];
    const modalTags = Array.from(
      document.querySelectorAll('.works-modal .tag-item'),
    );
    const modalCounterImg = Array.from(
      document.querySelectorAll('.works-modal .project-info img'),
    );
    const infoItems = Array.from(
      document.querySelectorAll('.works-modal .project-info-item'),
    );

    document.querySelector('.works-modal .project-title').innerHTML = modalData.project_title;
    document.querySelector('.works-modal .project-info-title').innerHTML = modalData.project_info_title;
    document.querySelector('.works-modal .Project-img').src = modalData.project_img;
    document.querySelector('.works-modal .project-description').innerHTML = modalData.project_description;
    document.querySelector('.works-modal .see-live').href = modalData.live_version;
    document.querySelector('.works-modal .see-source').href = modalData.source_code;

    modalCounterImg.forEach((infoImg) => {
      infoImg.src = modalData.counter_image;
      infoImg.alt = modalData.project_title;
    });
    infoItems.forEach((infoItem, idx) => {
      infoItem.innerHTML = modalData.project_info_text[idx];
    });
    modalTags.forEach((tag, idx) => {
      tag.innerHTML = modalData.tags[idx];
    });

    // Handle modal buttons
    document.querySelector('.works-modal .see-live').onclick = () => {
      window.location.href = modalData.live_version;
    };
    document.querySelector('.works-modal .see-source').onclick = () => {
      window.location.href = modalData.source_code;
    };
  });
});

// Handle modal close button click
closeModalBtn.addEventListener('click', () => {
  modal.style.display = 'none';
  body.style.overflow = 'auto';
});
