from django.urls import path
from .views import  *


app_name = 'news'

urlpatterns = [

    path('', news_view, name='news'),
    path('news_details/1/', news_details_view, name='details'),

]








