from flask import Flask, render_template_string,render_template,send_file

app = Flask(__name__)

# Здесь вы можете изменить список страниц на свой список файлов
pages = ['gog.html', 'buttonTest.html']


@app.route('/')
def index():
    return render_template('forTest3.html', pages_list=pages)
@app.route('/<filename>')
def page(filename):
    if filename in pages:
        return send_file(filename)
    else:
        return "Страница не найдена", 404
if __name__ == '__main__':
    app.run(debug=True)