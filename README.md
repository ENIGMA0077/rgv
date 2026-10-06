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

## Развертывание на Render

В репозитории есть `render.yaml` с командой запуска Django-приложения, установкой production-зависимостей и сборкой статических файлов. `Procfile` также задает правильную WSGI-команду для запуска. Создайте Web Service из этого GitHub-репозитория на Render и используйте Blueprint, чтобы применить настройки из файла. Render сгенерирует `DJANGO_SECRET_KEY` и установит production-режим.

Если сервис уже создан вручную, проверьте в Render Dashboard поле **Start Command**: рекомендуется `gunicorn religion_site.wsgi:application`. Настройки существующего сервиса могут переопределять `render.yaml` и `Procfile`. Для совместимости с уже настроенной командой `gunicorn app:app` в корне проекта есть `app.py`.
