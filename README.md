# Религиоведение

Учебный веб-проект по религиоведению на Django. Содержит страницы с материалами о религиоведении, тест, кроссворд, термины и источники.

## Запуск локально

Требуется Python 3.12 или новее.

```powershell
py -m venv .venv
.\.venv\Scripts\Activate.ps1
python -m pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

Откройте <http://127.0.0.1:8000/>.

Для production задайте собственный `DJANGO_SECRET_KEY` через переменные окружения и настройте `DEBUG` и `ALLOWED_HOSTS` для своего хостинга.
