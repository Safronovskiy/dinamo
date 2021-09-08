from django.shortcuts import render




def photo_gallery_view(request):
    return render(request, 'photogallery.html', {})


def video_gallery_view(request):
    return render(request, 'video_gallery.html', {})


def video_album_view(request):
    return render(request, 'video_album.html', {})


def photo_album(request):
    return render(request, 'gallery_photo.html', {})
