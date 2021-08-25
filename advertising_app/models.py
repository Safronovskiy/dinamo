from django.db import models



class AdvertisingModel(models.Model):
    adv_title = models.CharField(max_length=250, verbose_name='Наименование услуги')
    adv_unit = models.CharField(max_length=100, verbose_name='Единица измерения')
    adv_tariff_wo_vat = models.DecimalField(max_digits=6, decimal_places=2, verbose_name='Тариф без НДС')
    adv_tariff_w_vat = models.DecimalField(max_digits=8, decimal_places=2, verbose_name='Тариф c НДС')


class DocumentsToDownloadModel(models.Model):
    document_title = models.CharField(max_length=250, verbose_name='Название документа')
    document_file = models.FileField(upload_to='documents_to_download', verbose_name='Файл документа')



























