from django.urls import path
from .views import *


app_name = 'media'

urlpatterns = [
    path('photo_gallery/', photo_gallery_view, name='photo_gallery'),
    path('photo_detail/1/', photo_detail, name='photo_detail'),

    path('video_gallery/', video_gallery_view, name='video_gallery'),
    path('video_details/1/', video_details_view, name='video_details'),
]
