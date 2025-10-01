from django.urls import path
from .views.upload_view import CSVUploadView

urlpatterns = [
    path('upload-csv/', CSVUploadView.as_view(), name='upload-csv'),
]
