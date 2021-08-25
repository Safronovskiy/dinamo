from django.urls import path
from .views import *

app_name='services'

urlpatterns = [
    path('', services_view, name='services'),
    path('service_added', service_added_view),

]


















