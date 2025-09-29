#!/bin/bash

#cron &

poetry run python3.12 backend/manage.py migrate

poetry run python3.12 backend/manage.py runserver 0.0.0.0:8080
#django-admin startproject backend .
#python src/backend/manage.py runserver