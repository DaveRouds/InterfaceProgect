
function toggleSidebar(event) {
  const sidebar = document.querySelector('.sidebar');
  const workshopContainers = document.querySelectorAll('.workshop-map-container');
  const sidebarTexts = sidebar.querySelectorAll(".sidebar-text");
  const circles = sidebar.querySelectorAll(".circle-2");

  if (event.target.classList.contains('sidebar')) {
    if (sidebar.style.width === "250px") {
      sidebar.style.width = "80px";
      workshopContainers.forEach(container => {
        container.style.marginLeft = "100px";
        container.style.width = "calc(80% - 100px)";
        container.style.height = "calc(80% + 20px)";
      });
    } else {
      sidebar.style.width = "250px";
      workshopContainers.forEach(container => {
        container.style.marginLeft = "280px";
        container.style.width = "80%";
        container.style.height = "80%";
      });
    }
  }

  sidebarTexts.forEach((text) => {
    text.style.opacity = (sidebar.style.width === "250px") ? "1" : "0";
  });

  circles.forEach((circle) => {
    circle.style.opacity = (sidebar.style.width === "250px") ? "1" : "0";
  });
}
function toggleContainer(containerId, event) {
  const container = document.getElementById(containerId);
  container.classList.toggle('open');

}

 // Получаем ссылку на сайдбар
  const sidebar = document.querySelector('.sidebar');


  // Вызываем функцию через 2 секунды после загрузки страницы
 setTimeout(() => {
      toggleSidebar({ target: sidebar }); // Передаем в функцию событие с нажатым элементом sidebar
    }, 2000);

  setTimeout(() => {
      toggleSidebar({ target: sidebar }); // Передаем в функцию событие с нажатым элементом sidebar
    }, 25000);

window.addEventListener('DOMContentLoaded', () => {
  // Ждем 3 секунды и вызываем функцию для открытия контейнера
  setTimeout(() => {
    toggleContainer('workshop-map-container');
  }, 17000);
    setTimeout(() => {
    toggleContainer('workshop-map-container');
  }, 22000);

  setTimeout(() => {
    toggleContainer('Project-map-container');
  }, 11000);
    setTimeout(() => {
    toggleContainer('Project-map-container');
  }, 16000);

  setTimeout(() => {
    toggleContainer('Task-map-container');
  }, 3000);
    setTimeout(() => {
    toggleContainer('Task-map-container');
  }, 10000);

});
// const circle2 = document.querySelector('.circle-2');
// const circle = document.querySelector('.circle');

const containerElements = document.querySelectorAll('.icon-container'); // Получаем все контейнеры

const colors = ['#ccc', 'red']; // Массив с цветами
let currentIndex = 1; // Индекс текущего элемента

function changeColors() {
  const currentContainer = containerElements[currentIndex];
  const prevContainer = containerElements[(currentIndex - 1 + containerElements.length) % containerElements.length];

  const circle2 = currentContainer.querySelector('.circle-2'); // Находим .circle-2 в текущем контейнере
  const circle = currentContainer.querySelector('.circle'); // Находим .circle в текущем контейнере

  // Меняем цветы для элементов circle2 и circle по текущему индексу
  circle2.style.backgroundColor = colors[1];
  circle.style.backgroundColor = colors[1];

  // Возвращаем предыдущему элементу серый цвет
  const prevCircle2 = prevContainer.querySelector('.circle-2');
  const prevCircle = prevContainer.querySelector('.circle');
  prevCircle2.style.backgroundColor = colors[0];
  prevCircle.style.backgroundColor = colors[0];

  // Увеличиваем индекс текущего элемента
  currentIndex = (currentIndex + 1) % containerElements.length;
}

// Запускаем функцию changeColors через 2 секунды и повторяем каждые 2 секунды
// setTimeout(() => {
//   changeColors(); // Сначала меняем цветы
//   setInterval(changeColors, 10000); // Затем повторяем с интервалом
// }, 3000);

setTimeout(() => {
    changeColors(); // Сначала меняем цветы // Затем повторяем с интервалом
  }, 3000);
  setTimeout(() => {
    changeColors(); // Сначала меняем цветы // Затем повторяем с интервалом
  }, 11000);
  setTimeout(() => {
    changeColors(); // Сначала меняем цветы // Затем повторяем с интервалом
  }, 17000);
// setTimeout(() => {
//   circle2.style.backgroundColor = 'red'; // Здесь можно указать нужный цвет
//   circle2.style.opacity = 1; // Устанавливаем полную прозрачность
//    circle.style.backgroundColor = 'red'; // Здесь можно указать нужный цвет
//   circle.style.opacity = 1; // Устанавливаем полную прозрачность
// }, 2000);

setTimeout(() => {
  const workshopElement = document.querySelector('.workshop-green');
  workshopElement.classList.remove('workshop-green');
  workshopElement.classList.add('workshop-gray');
}, 21000);

function redirectToRent() {
  window.location.href = 'kartaTsekhov.html';
}

// Вызываем функцию автоматического перехода через 3 секунды после загрузки страницы
setTimeout(redirectToRent, 24000);