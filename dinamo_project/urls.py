from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include




urlpatterns = [

    path('about_stadium/', include('about_stadium_app.urls')),
    path('advertising/', include('advertising_app.urls')),
    path('', include('main_app.urls')),
    path('media/', include('media_app.urls')),
    path('news/', include('news_app.urls')),
    path('services/', include('services_app.urls')),
    path('cart/', include('cart_app.urls')),
    path('events/', include('events_app.urls')),


    path('admin/', admin.site.urls),

]

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)




