# Carsharing

## DB setup
    'ENGINE': 'django.db.backends.postgresql',
    'NAME': 'CarSharing',
    'USER': 'postgres',
    'PASSWORD': 'Sk123456',
    'HOST': '127.0.0.1',
    'PORT': '5432',

### In case of hosting problems this may be helpful
- Adding postgress to Path variable
- `initdb`
- `netstat -aon | findstr 5432`
    `taskkill /pid <task_pid> /f`
- `pg_ctl -D <path> start`
## Django
- `pip install virtualenv`
- `pip install django`
- `pip install mysql`
- `pip install psycopg2`
- `python manage.py runserver`

## Angular
Node 18.x required 
- `node install npm`
- `npm install -g @angular/cli`
- `Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned `
- `npm install`
- `ng serve`