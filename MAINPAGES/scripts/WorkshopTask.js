window.addEventListener('load', () => {
  setTimeout(() => {

      const projects = document.querySelector('.projects1');
      projects.classList.add('active');
  
  }, 4000);
});

// const projects = document.querySelectorAll('.project1');

// projects.forEach((project) => {
//   const name = project.querySelector('.projects_name_list');
//   const subProjects = project.querySelector('.sub-projects1');

//   name.addEventListener('click', () => {
//     subProjects.classList.toggle('active');
//   });
// });

window.addEventListener('load', () => {
  setTimeout(() => {

      const projects = document.querySelector('.sub-projects1');
      projects.classList.add('active');
  
  }, 5000);
});






const subprojects = document.querySelectorAll('.sub-project1');

subprojects.forEach((subproject) => {
  const name2 = subproject.querySelector('.tasks_name_list');
  const subTaskProjects = subproject.querySelector('.sub-task-projects1');

  name2.addEventListener('click', () => {
    subTaskProjects.classList.toggle('active');
  });
});



window.addEventListener('load', () => {
  setTimeout(() => {

      const projects = document.querySelector('.sub-task-projects1');
      projects.classList.add('active');
  
  }, 6000);
});

const tasksinfo = document.querySelectorAll('.sub-task-project1');
const infoDiv = document.querySelector('.TaskInfoDiv');

tasksinfo.forEach((taskinfo) => {
  const name3 = taskinfo.querySelector('.info_name_list');
  const info = taskinfo.querySelector('.tasks-info');

  name3.addEventListener('click', () => {
    info.classList.toggle('active');
    infoDiv.classList.toggle('active');
  });
});



window.addEventListener('load', () => {
  setTimeout(() => {

      const projects = document.querySelector('.tasks-info');
      projects.classList.add('active');
  
  }, 7000);
});
// var dropdowns = document.getElementsByClassName("dropdown1");

// for (var i = 0; i < dropdowns.length; i++) {
//   dropdowns[i].getElementsByClassName("dropbtn1")[0].addEventListener("click", function() {
//     this.nextElementSibling.classList.toggle("show");
//   });

//   var links = dropdowns[i].getElementsByClassName("dropdown-content1")[0].getElementsByTagName("a");
//   for (var j = 0; j < links.length; j++) {
//     links[j].addEventListener("click", function() {
//       var selectedText = this.innerText;
//       this.parentNode.parentNode.getElementsByClassName("dropbtn1")[0].innerText = selectedText;
//     });
//   }
// }

// window.addEventListener("click", function(event) {
//   if (!event.target.matches('.dropbtn1')) {
//     var dropdowns = document.getElementsByClassName("dropdown-content1");
//     for (var i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains('show')) {
//         openDropdown.classList.remove('show');
//       }
//     }
//   }
// });

// window.addEventListener('load', () => {
//   setTimeout(() => {
//     const dropdownButton = document.querySelector('.dropbtn1');
//     const clickEvent = new MouseEvent('click', {
//       bubbles: true,
//       cancelable: true,
//       view: window
//     });
//     dropdownButton.dispatchEvent(clickEvent);
//   }, 2000);
// });
window.addEventListener('load', () => {
  setTimeout(() => {
    const taskInfoDiv = document.querySelector('.TaskInfoDiv');
    taskInfoDiv.style.display = 'block';
  }, 8000);
});