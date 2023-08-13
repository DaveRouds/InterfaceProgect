const projects = document.querySelectorAll('.project');

projects.forEach((project) => {
  const subProjects = project.querySelector('.sub-projects');

  project.addEventListener('click', () => {
    subProjects.classList.toggle('active');
  });
});

const workshops = document.querySelectorAll('.workshop');

workshops.forEach((workshop) => {
  const title = workshop.querySelector('.workshop-title');
  const projects = workshop.querySelector('.projects');

  title.addEventListener('click', () => {
    projects.classList.toggle('active');
  });
});