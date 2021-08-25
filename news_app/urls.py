from django.urls import path
from .views import  *


app_name = 'news'

urlpatterns = [

    path('', news_view, name='news'),

]








