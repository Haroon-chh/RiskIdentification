@echo off

:: Ensure pip is installed
python -m ensurepip --upgrade

:: Install dependencies
pip install -r requirements.txt

:: Collect static files
python manage.py collectstatic --noinput

:: Move collected static files to the directory Vercel will use
if not exist staticfiles_build (
    mkdir staticfiles_build
)
xcopy static staticfiles_build /s /e /y

echo "Build completed."
