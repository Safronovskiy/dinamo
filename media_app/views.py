from django.shortcuts import render




def photo_gallery_view(request):
    return render(request, 'photogallery.html', {})


def video_gallery_view(request):
    return render(request, 'videoalbum.html', {})


def video_details_view(request):
    return render(request, 'videogallery.html', {})


def photo_detail(request):
    return render(request, 'gallery.html', {})
