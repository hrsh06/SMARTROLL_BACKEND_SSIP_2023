"""
Django settings for SMARTROLL project.

Generated by 'django-admin startproject' using Django 4.2.4.

For more information on this file, see
https://docs.djangoproject.com/en/4.2/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/4.2/ref/settings/
"""

from pathlib import Path
from datetime import timedelta
import os
from dotenv import load_dotenv

load_dotenv()
# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent

SSL_CERTIFICATE_PATH = os.path.join(BASE_DIR, "localhost.crt")
SSL_KEY_PATH = os.path.join(BASE_DIR, "localhost.key")

TIME_ZONE =  'Asia/Kolkata'
USE_TZ = True

# from django.utils import timezone
import pytz

# timezone.activate(pytz.timezone("Asia/Kolkata"))
# timezone.localtime(timezone.now())
# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/4.2/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = os.environ.get('SECRET')

DER_BASE64_ENCODED_PRIVATE_KEY_FILE_PATH = os.path.join(BASE_DIR, "private_key.txt")
DER_BASE64_ENCODED_PUBLIC_KEY_FILE_PATH = os.path.join(BASE_DIR,"public_key.txt")
                                                       
VAPID_PRIVATE_KEY = open(DER_BASE64_ENCODED_PRIVATE_KEY_FILE_PATH, "r+").readline().strip("\n")
VAPID_PUBLIC_KEY = open(DER_BASE64_ENCODED_PUBLIC_KEY_FILE_PATH, "r+").read().strip("\n")
VAPID_CLAIMS = {
    "sub": "mailto:manavshah1011.ms@gmail.com"
}

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True
ALLOWED_HOSTS = ['smartroll.ldce.mnv-dev.live','localhost','192.168.29.18','192.168.115.106','192.168.157.106']

CSRF_COOKIE_SECURE = False
CSRF_USE_SESSIONS = False
CSRF_TRUSTED_ORIGINS = ["http://192.168.157.106:8000",'http://192.168.157.106:8000']


# Application definition

INSTALLED_APPS = [
    "daphne",
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'sslserver',
    'rest_framework',
    'rest_framework_simplejwt',
    'rest_framework_simplejwt.token_blacklist',    
    'corsheaders',
    'django_extensions',
    'django_crontab',
    'drf_yasg',
    'Profile',
    'StakeHolders',    
    'Manage',    
    'Session',    
]
SSL_CERTIFICATE = SSL_CERTIFICATE_PATH
SSL_KEY = SSL_KEY_PATH

REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'rest_framework_simplejwt.authentication.JWTAuthentication',
    ),
}


CRONJOBS = [
    ('0 12 * * 0', 'Session.cron.create_weekly_sessions'),
    ('30 10 * * *','Manage.NotificationCron.NotifyTeachers10_30'),
    ('30 11 * * *','Manage.NotificationCron.NotifyTeachers11_30'),
    ('00 13 * * *','Manage.NotificationCron.NotifyTeachers13_00'),
    ('00 14 * * *','Manage.NotificationCron.NotifyTeachers14_00'),
    ('15 15 * * *','Manage.NotificationCron.NotifyTeachers15_15'),
    ('15 16 * * *','Manage.NotificationCron.NotifyTeachers16_15'),

]

SIMPLE_JWT = {
    "ACCESS_TOKEN_LIFETIME": timedelta(days=1),
    "REFRESH_TOKEN_LIFETIME": timedelta(days=90),
    "ROTATE_REFRESH_TOKENS": True,
    "BLACKLIST_AFTER_ROTATION": True,
    "UPDATE_LAST_LOGIN": False,
    "AUTH_HEADER_TYPES": ("Bearer",),
    "AUTH_HEADER_NAME": "HTTP_AUTHORIZATION",
}


MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    # 'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    # 'debug_toolbar.middleware.DebugToolbarMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    'corsheaders.middleware.CorsMiddleware',
    'SMARTROLL.requestMiddleware.globalRequestMiddleWare',
]
CORS_ALLOW_ALL_ORIGINS = True
CORS_ALLOW_HEADERS = [
    'Access-Control-Allow-Headers',
    'Access-Control-Allow-Origin',
    'ngrok-skip-browser-warning',  # Add your custom header here
    'Content-Type',
    'Accept',
    'Authorization',    
]
CORS_ALLOW_CREDENTIALS=True

ROOT_URLCONF = 'SMARTROLL.urls'


TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [BASE_DIR / 'templates'],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'SMARTROLL.wsgi.application' 
ASGI_APPLICATION = "SMARTROLL.asgi.application"

# Database
# https://docs.djangoproject.com/en/4.2/ref/settings/#databases



if DEBUG:
    DATABASE_DIR = os.path.join(BASE_DIR, 'db.sqlite3')
    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.sqlite3',
            'NAME': DATABASE_DIR,
        }
    }
else:
    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.postgresql',
            'NAME': os.environ.get('DB_NAME'),
            'USER': os.environ.get('DB_USER'),
            'PASSWORD': os.environ.get('DB_PASS'),
            'HOST': os.environ.get('DB_HOST'),
            'PORT': os.environ.get('DB_PORT')
        }
    }

# https://docs.djangoproject.com/en/4.2/ref/settings/#auth-password-validators


if DEBUG:
    CHANNEL_LAYERS = {
    "default": {
        "BACKEND": "channels.layers.InMemoryChannelLayer"
        }
    }
else:
    CHANNEL_LAYERS = {
        'default': {
            'BACKEND': 'channels_redis.core.RedisChannelLayer',
            'CONFIG': {
                # Assuming Redis is running on localhost
                'hosts': [(os.environ.get('REDIS_HOST'), 6379)]            
            },
        },
    }
    CACHES = {
    'default': {
        'BACKEND': 'django.core.cache.backends.redis.RedisCache',
        'LOCATION': f"redis://{os.environ.get('REDIS_HOST', 'localhost')}:6379/1",  # Assuming Redis database 1
    },
}
AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/4.2/topics/i18n/

LANGUAGE_CODE = 'en-us'

USE_I18N = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/4.2/howto/static-files/
if not DEBUG:
    LOGGING = {                                                                                                                 
        'version': 1,
        'disable_existing_loggers': False,
        'handlers': {
        'file': {            
                'class': 'logging.handlers.RotatingFileHandler',
                'filename': os.path.join(BASE_DIR, 'server.log'),
                'backupCount': 10, # keep at most 10 log files
                'maxBytes': 5242880, # 5*1024*1024 bytes (5MB)
            },
        },
        'loggers': {
            'django': {
                'handlers': ['file'],
            },
            'daphne': {
                'handlers': ['file'],
                'level': 'DEBUG',  # Set the desired logging level
                'propagate': True,
            },
        },
    }

STATIC_URL = 'static/'
STATICFILES_DIRS = [
    os.path.join(BASE_DIR, 'static'),
]
STATIC_ROOT = BASE_DIR / "staticfiles"
INTERNAL_IPS = [  
    '127.0.0.1',
    '127.0.0.10', 
    '192.168.180.106'       
]
MEDIA_URL = '/media/'
EMAIL_BACKEND ='django.core.mail.backends.smtp.EmailBackend'
EMAIL_HOST='smtp.gmail.com'
EMAIL_USE_TLS=True
EMAIL_PORT=587
EMAIL_HOST_USER=os.environ.get('EMAIL_HOST_USER')
EMAIL_HOST_PASSWORD=os.environ.get('EMAIL_HOST_PASSWORD')

# Path where media is stored'
MEDIA_ROOT = BASE_DIR / 'media'

AUTH_USER_MODEL = 'Profile.Profile'
# Default primary key field type
# https://docs.djangoproject.com/en/4.2/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'
