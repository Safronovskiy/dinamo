from django.urls import path
from .views import *

app_name = 'about'

urlpatterns = [

    path('', about_view, name='about'),
    path('contacts/', about_contacts_view, name='contacts'),
    path('how_to_get/', howtoget_view, name='howtoget'),
    path('employee/', employee_view, name='employee'),
    path('page_employee/1/', detail_employees_view, name='page_employee'),
    path('management/', management_view, name='managment'),
    path('history/', history_view, name='history'),
    path('documents/', documents_view, name='documents'),
    path('vacancy/', vacancy_view, name='vacancy'),

]
