from django.db import models
from django.urls import reverse




class NewsModel(models.Model):
    news_title = models.CharField(max_length=250, db_index=True, verbose_name='Новостной заголовок')
    news_content = models.TextField(verbose_name='Новостной контент')
    news_publication_date = models.DateTimeField(auto_now_add=True, verbose_name='Дата публикации новости')
    news_source = models.CharField(max_length=250, null=True, verbose_name='Источник')
    news_title_photo = models.ForeignKey('NewsPhotosModel', on_delete=models.SET_NULL, null=True, related_name='title_photo', verbose_name='Главное фото новости')
    news_photos = models.ManyToManyField('NewsPhotosModel', related_name='photos', verbose_name='Новостные фото')
    news_videos = models.ManyToManyField('NewsVideosModel', blank=True, verbose_name='Новостные видео')
    news_author = models.CharField(max_length=250, blank=True, null=True, verbose_name='Автор')
    news_time_of_reading = models.CharField(max_length=250, default='5 минут', verbose_name='Время чтения')

    class Meta:
        verbose_name = 'Новость'
        verbose_name_plural = 'Новости'
        ordering = ('news_publication_date',)

    def __str__(self):
        return f'{self.news_title}'

    def get_absolute_url(self):
        return reverse('detail_news_info', kwargs={'news_pk': self.pk})



class NewsPhotosModel(models.Model):
    photo_title = models.CharField(max_length=250, db_index=True, verbose_name='Название фото')
    photo_image = models.ImageField(upload_to='news_photos/%Y/%m/%d')
    photo_publication_date = models.DateTimeField(auto_now_add=True)
    photo_author = models.CharField(max_length=250, blank=True, default='ФК "Динамо-Минск"', verbose_name='Автор')

    class Meta:
        verbose_name = 'Новостное фото'
        verbose_name_plural = 'Новостные фото'
        ordering = ('photo_publication_date',)

    def __str__(self):
        return f'{self.photo_title}'



class NewsVideosModel(models.Model):
    video_title = models.CharField(max_length=250, db_index=True, verbose_name='Название видео')
    video_url = models.URLField(max_length=250, verbose_name='Ссылка на видео на youtube')
    video_publication_date = models.DateTimeField(auto_now_add=True, verbose_name='Дата публикации')
    video_author = models.CharField(max_length=250, verbose_name='Автор')

    class Meta:
        verbose_name = 'Новостное видео(youtube)'
        verbose_name_plural = 'Новостные видео(youtube)'
        ordering = ('video_publication_date',)

    def __str__(self):
        return f'{self.video_title}'

