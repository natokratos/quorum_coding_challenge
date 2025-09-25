INSTALLED_APPS += ['corsheaders', 'rest_framework', 'api']
MIDDLEWARE = ['corsheaders.middleware.CorsMiddleware'] + MIDDLEWARE
CORS_ALLOW_ALL_ORIGINS = True  # For dev only!