from django.db import models


class ServiceCategoryModel(models.Model):
    service_category_name = models.CharField(max_length=250, unique=True, db_index=True, verbose_name='')
    service_category_description = models.TextField(blank=True, null=True, verbose_name='')

    def __str__(self):
        return f'{self.service_category_name}'


class ServiceDescriptionModel(models.Model):
    service_name = models.CharField(max_length=250, verbose_name='Название услуги')
    service_image = models.ImageField(upload_to='service_title_images', verbose_name='Изображение-обложка услуги')
    service_category = models.ForeignKey('ServiceCategoryModel', on_delete=models.SET_NULL, null=True, verbose_name='Категория услуги')    #on_delete какой нужен?
    service_description = models.TextField(blank=True, null=True, verbose_name='Описание услуги')
    service_price = models.CharField(max_length=100, verbose_name='Цена услуги')













