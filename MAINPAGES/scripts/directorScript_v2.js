// const widget = document.getElementById('draggable-widget');
// const header = widget.querySelector('.widget-header');
// const closeButton = widget.querySelector('.close-button');

// let isDragging = false;
// let offsetX, offsetY;

// header.addEventListener('mousedown', (e) => {
//   isDragging = true;
//   offsetX = e.clientX - widget.getBoundingClientRect().left;
//   offsetY = e.clientY - widget.getBoundingClientRect().top;
// });

// document.addEventListener('mousemove', (e) => {
//   if (!isDragging) return;

//   const newX = e.clientX - offsetX;
//   const newY = e.clientY - offsetY;

//   widget.style.left = `${newX}px`;
//   widget.style.top = `${newY}px`;
// });

// document.addEventListener('mouseup', () => {
//   isDragging = false;
// });

// closeButton.addEventListener('click', () => {
//   widget.style.display = 'none';
// });

// const resizer = document.getElementById('resizable-widget');
// const resizeIcons = resizer.querySelectorAll('.resize-icon');

// resizer.addEventListener('mouseenter', () => {
//   resizeIcons.forEach(icon => {
//     icon.style.opacity = 1;
//   });
// });

// resizer.addEventListener('mouseleave', () => {
//   resizeIcons.forEach(icon => {
//     icon.style.opacity = 0;
//   });
// });

function setupWidget(widgetId) {
    const widget = document.getElementById(widgetId);
    const resizeHandle = widget.querySelector('.resize-handle');
    const widgetHeader = widget.querySelector('.widget-header');
    const closeButton = widget.querySelector('.close-button');
  
    let isResizing = false;
    let originalWidth, originalHeight;
    let isDragging = false;
    let initialX, initialY; // Added variables for initial cursor position
  
    resizeHandle.addEventListener('mousedown', (e) => {
      isResizing = true;
      originalWidth = widget.offsetWidth;
      originalHeight = widget.offsetHeight;
      e.preventDefault(); // Prevent text selection during resize
    });
  
    widgetHeader.addEventListener('mousedown', (e) => {
      isDragging = true;
      initialX = e.clientX - parseFloat(getComputedStyle(widget).left); // Store initial cursor position
      initialY = e.clientY - parseFloat(getComputedStyle(widget).top); // Store initial cursor position
      e.preventDefault(); // Prevent text selection during dragging
    });
  
    document.addEventListener('mousemove', (e) => {
      if (isResizing) {
        const newWidth = originalWidth + (e.clientX - resizeHandle.getBoundingClientRect().left);
        const newHeight = originalHeight + (e.clientY - resizeHandle.getBoundingClientRect().top);
        widget.style.width = `${newWidth}px`;
        widget.style.height = `${newHeight}px`;
      } else if (isDragging) {
        const newX = e.clientX - initialX;
        const newY = e.clientY - initialY;
        widget.style.left = `${newX}px`;
        widget.style.top = `${newY}px`;
      }
    });
  
    document.addEventListener('mouseup', () => {
      isResizing = false;
      isDragging = false;
    });
  
    closeButton.addEventListener('click', () => {
      widget.style.display = 'none';
    });
  }
  
  const widgetIds = ['widget1', 'widget2', 'widget3'];
  
  widgetIds.forEach(widgetId => {
    setupWidget(widgetId);
  });
// Панель виджетов
  const widgetIcons = document.querySelectorAll('.func');
const widgets = document.querySelectorAll('.resizable-widget');

widgetIcons.forEach(icon => {
  const widgetId = icon.getAttribute('data-widget');
  const widget = document.getElementById(widgetId);

  icon.addEventListener('click', () => {
    if (widget.style.display === 'none') {
      widget.style.display = 'block';
    } else {
      widget.style.display = 'none';
    }
  });
});


const widgetButtons = document.querySelectorAll('.widget-header button');

widgetButtons.forEach(button => {
  button.addEventListener('click', () => {
    const widgetContainer = button.closest('.widget-container');
    const widgets = widgetContainer.querySelectorAll('.resizable-widget');

    widgets.forEach(widget => {
      widget.classList.remove('active-widget');
    });

    const widget = button.closest('.resizable-widget');
    widget.classList.add('active-widget');
  });
});


const vidgetLine = document.querySelector('.vidgetLine');
const vidgetContext = document.querySelector('.vidgetContext')

vidgetLine.addEventListener("click", function(event){
    for (var i = vidgetLine.children.length - 1; i >= 0; i--) {
        vidgetLine.children[i].classList.remove('activeButton');
    }

    for (var i = vidgetContext.children.length - 1; i >= 0; i--) {
        vidgetContext.children[i].classList.remove('activeBlock');
    }

    if (event.target.closest('button')){
        event.target.closest('button').classList.add('activeButton');

        document.getElementById(event.target.closest('button').getAttribute('data-target')).classList.add('activeBlock');
    }
})


// Скрипты файлов проектанту

document.addEventListener("DOMContentLoaded", function() {
        const columns = document.querySelectorAll(".kanban-column");

        columns.forEach(column => {
            const taskList = column.querySelector(".task-list");
            const taskCountElement = column.querySelector(".task-count");

            taskCountElement.textContent = taskList.children.length;
        });
    });

// Скрипты Открытия задач

document.addEventListener("DOMContentLoaded", function() {
    const taskItems = document.querySelectorAll(".task-item");
    const taskInfo = document.querySelector(".task-info");
    const taskInfoTitle = taskInfo.querySelector("h4");

    taskItems.forEach(item => {
        item.addEventListener("click", function() {
            taskItems.forEach(task => {
                task.classList.remove("active");
            });

            const taskTitle = this.textContent.trim();
            taskInfoTitle.textContent = taskTitle;
            taskInfo.classList.add("active");
            this.classList.add("active");
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const taskInfo = document.querySelector(".task-info");
    const taskInfoTitle = taskInfo.querySelector("h4");

    // Создание экземпляров Sortable для каждого списка задач
    new Sortable(document.getElementById("todo-list"), {
        group: "kanban",
        onEnd: function(evt) {
            updateTaskCount();
        }
    });

    new Sortable(document.getElementById("inprogress-list"), {
        group: "kanban",
        onEnd: function(evt) {
            updateTaskCount();
        }
    });

    new Sortable(document.getElementById("done-list"), {
        group: "kanban",
        onEnd: function(evt) {
            updateTaskCount();
        }
    });

    // Обновление счетчика задач в каждом столбце
    function updateTaskCount() {
        const todoCount = document.querySelectorAll("#todo-list .task-item").length;
        const inProgressCount = document.querySelectorAll("#inprogress-list .task-item").length;
        const doneCount = document.querySelectorAll("#done-list .task-item").length;

        document.querySelector(".column-title:nth-child(1) .task-count").textContent = todoCount;
        document.querySelector(".column-title:nth-child(2) .task-count").textContent = inProgressCount;
        document.querySelector(".column-title:nth-child(3) .task-count").textContent = doneCount;
    }

    // Обработчик клика на задачу
    const taskItems = document.querySelectorAll(".task-item");
    taskItems.forEach(item => {
        item.addEventListener("click", function() {
            taskItems.forEach(task => {
                task.classList.remove("active");
            });

            const taskTitle = this.textContent.trim();
            taskInfoTitle.textContent = taskTitle;
            taskInfo.classList.add("active");
            this.classList.add("active");

            if (taskInfo.classList.contains("active")) {
                taskInfo.classList.remove("active");
            } else {
                taskInfo.classList.add("active");
            }
        });
    });
});