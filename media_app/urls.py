from django.urls import path
from .views import *


app_name = 'media'

urlpatterns = [

    path('photo_gallery/', photo_gallery_view, name='photo_gallery'),
    path('photo_album/1/', photo_album, name='photo_album'),
    path('video_gallery/', video_gallery_view, name='video_gallery'),
    path('video_album/1/', video_album_view, name='video_album'),
]


