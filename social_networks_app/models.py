from django.db import models


class SocialNetworksModel(models.Model):
    social_title = models.CharField(max_length=250, verbose_name='')
    social_url = models.URLField(verbose_name='')

    class Meta:
        verbose_name = 'Социальная сеть'
        verbose_name_plural = 'Социальные сети'
        ordering = ('social_title',)

    def __str__(self):
        return f'{self.social_title}'

