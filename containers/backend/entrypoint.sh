#!/bin/bash

#cron &

#echo "createsuperuser"
#poetry run python3.12 manage.py createsuperuser

echo "makemigrations"
poetry run python3.12 manage.py makemigrations

echo "migrate"
poetry run python3.12 manage.py migrate

echo "runserver"
poetry run python3.12 manage.py runserver 0.0.0.0:8080
#django-admin startproject backend .
#python src/backend/manage.py runserver