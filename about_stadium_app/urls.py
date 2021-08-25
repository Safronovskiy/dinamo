from django.urls import path
from .views import *

app_name = 'about'

urlpatterns = [

    path('', about_view, name='about'),
    path('contacts/', about_contacts_view, name='contacts'),
    path('how_to_get/', howtoget_view, name='howtoget'),
    path('our_employees/1/', detail_employees_view, name='brytkov'),
    path('management/', management_view, name='management'),
    path('history/', history_view, name='history'),
]
