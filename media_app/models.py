from django.db import models
from django.urls import reverse




class VideoAlbumModel(models.Model):
    video_album_title = models.CharField(max_length=50, unique=True, db_index=True, verbose_name='Название видеоальбома')
    video_album_title_image = models.ImageField(upload_to='video_album_title_images', verbose_name='Изображение-обложка видеоальбома')
    video_album_creation_date = models.DateField(auto_now_add=True, verbose_name='Дата создания видеоальбома')

    class Meta:
        verbose_name = 'Видеоальбом'
        verbose_name_plural = 'Видеоальбомы'
        ordering = ('video_album_title',)

    def __str__(self):
        return f'{self.video_album_title}'


class VideoModel(models.Model):
    video_name = models.CharField(max_length=50, verbose_name='Название видео')
    video_album = models.ForeignKey('VideoAlbumModel', on_delete=models.CASCADE, verbose_name='Альбом видео')
    video_publication_date = models.DateField(auto_now_add=True, verbose_name='Дата создания')
    is_bright_moment = models.BooleanField(default=False, verbose_name='Яркие моменты(видео)')

    class Meta:
        verbose_name = 'Видео'
        verbose_name_plural = 'Видео'
        ordering = ('video_name',)

    def __str__(self):
        return f'{self.video_name}'

    def get_absolute_url(self):
        return reverse('show_details', kwargs={'video_id': self.pk, })


class PhotoAlbumModel(models.Model):
    photo_album_title = models.CharField(max_length=50, verbose_name='Название фотоальбома')
    photo_album_title_image = models.ImageField(upload_to='photo_album_title_images', verbose_name='Изображение-обложка фотоальбома')
    date_album_video = models.DateField(auto_now_add=True, verbose_name='Дата создания фотоальбома')

    class Meta:
        verbose_name = 'Фотоальбом'
        verbose_name_plural = 'Фотоальбомы'
        ordering = ('photo_album_title',)

    def __str__(self):
        return f'{self.photo_album_title}'


class PhotoModel(models.Model):
    photo_name = models.CharField(max_length=50, verbose_name='Название фото')
    photo_album = models.ForeignKey('PhotoAlbumModel', on_delete=models.CASCADE, verbose_name='Альбом фото')
    photo_publication_date = models.DateField(auto_now_add=True, verbose_name='Дата создания фото')
    is_bright_moment = models.BooleanField(default=False, verbose_name='Яркие моменты фото')

    class Meta:
        verbose_name = 'Фото'
        verbose_name_plural = 'Фото'
        ordering = ('photo_name',)

    def __str__(self):
        return f'{self.photo_name}'

    def get_absolute_url(self):
        return reverse('show_details', kwargs={'photo_id': self.pk, })











