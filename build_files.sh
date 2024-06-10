#!/bin/bash

# Install dependencies
pip install -r requirements.txt

# Collect static files
python manage.py collectstatic --noinput

# Ensure static files are in the correct directory
mkdir -p staticfiles_build
cp -r static/* staticfiles_build/
