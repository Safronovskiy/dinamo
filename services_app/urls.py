from django.urls import path
from .views import *

app_name='services'

urlpatterns = [
    path('', services_view, name='services'),
    path('details/', service_details_view, name='details'),
    path('service_added', service_added_view),

]


















