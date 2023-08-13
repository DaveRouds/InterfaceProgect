
//     // Скрипт для отображения таблицы при клике на кнопку в виджете "Задания"

//       function showTable(tableID) {
//       var tableContainer = document.getElementById('tableContainer');
//       tableContainer.classList.toggle('visible');
//          var widgetHeader = document.querySelector('.widget-header[id="workshop"]');
//     // Восстанавливаем прежний цвет из переменной previousColor
//           widgetHeader.style.color = previousColor;
//           var widgetHeader = document.querySelector('.widget-header[id="' + tableID + '"]');
//           widgetHeader.style.color = 'red';

//     }


//     // Скрипт для открытия/закрытия контейнера с квадратами по нажатию на "Цех"
//     function toggleWorkshops(widgetId) {
//       var workshopContainer = document.getElementById('workshopContainer');
//       workshopContainer.classList.toggle('visible');
//        var widgetHeader = document.querySelector('.widget-header[id="' + widgetId + '"]');
//       previousColor = widgetHeader.style.color;
//     // Меняем цвет текста на красный
//       widgetHeader.style.color = 'red';

//     }



//     // Открываем виджет "Цех" через 2 секунды после загрузки страницы
//         setTimeout(function() {
//     toggleWorkshops('workshop');
//   }, 2000);

//      setTimeout(toggleWorkshops, 5000);
//              setTimeout(function() {
//     showTable('tasks');
//   }, 7000);

//      setTimeout(showTable, 10000);
// // Функция для автоматического перехода по ссылке через 3 секунды
    function redirectToRent() {
      window.location.href = 'Authorization.html';
    }

    // Вызываем функцию автоматического перехода через 3 секунды после загрузки страницы
    setTimeout(redirectToRent, 23000);

