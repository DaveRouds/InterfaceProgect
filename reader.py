import csv
from bs4 import BeautifulSoup

# Читаем данные из файла CSV и сохраняем их в переменную csv_data
with open('ordersearch.csv', newline='') as csvfile:
    csv_data = list(csv.reader(csvfile,delimiter=';'))
with open('MAINPAGES/ButtonTest.html', 'r', encoding='UTF-8') as htmlfile:
    html_template = htmlfile.read()
# Создаем таблицу HTML


# Парсим шаблон таблицы с помощью BeautifulSoup
soup = BeautifulSoup(html_template, 'html.parser')

# Ищем элемент <tbody> в таблице
table_body = soup.find('tbody', id='data')

# Добавляем данные из csv_data в таблицу
for row in csv_data:
    table_row = soup.new_tag('tr')
    for column in row:
        table_cell = soup.new_tag('td')
        table_cell.string = column
        table_row.append(table_cell)
    table_body.append(table_row)

# Записываем обновленный HTML обратно в файл
with open('table.html', 'w',encoding='UTF-8') as htmlfile:
    htmlfile.write(str(soup))