#!/bin/bash

# Check if pip is available
if ! command -v pip &> /dev/null
then
    echo "pip could not be found. Please ensure it's installed."
    exit 1
fi

# Install dependencies
pip install -r requirements.txt || { echo 'Installing dependencies failed'; exit 1; }

# Collect static files
python manage.py collectstatic --noinput || { echo 'Collecting static files failed'; exit 1; }

# Create staticfiles_build directory if it doesn't exist
mkdir -p staticfiles_build

# Copy static files to the staticfiles_build directory
cp -r static/* staticfiles_build/ || echo 'No static files found to copy'

echo "Build completed successfully."
