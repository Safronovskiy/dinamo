from django.db import models
from django.urls import reverse



class ManagersModel(models.Model):
    position = models.CharField(max_length=250, verbose_name='Занимаемая должность')
    name = models.CharField(max_length=250, verbose_name='ФИО')
    photo = models.ImageField(upload_to='managers_photos', verbose_name='Фотография')
    private_info = models.TextField(verbose_name='Личное дело / биография')
    phone_number = models.CharField(max_length=250, verbose_name='Номер телефона')
    email = models.EmailField(verbose_name='E-mail')
    email_for_appeals = models.EmailField(verbose_name='E-mail для обращений граждан')
    reception = models.CharField(max_length=250, verbose_name='Прием по личным вопросам')

    class Meta:
        verbose_name = 'Руководство'
        verbose_name_plural = 'Руководство'
        ordering = ['position', ]

    def __str__(self):
        return self.name


class OurEmployeesModel(models.Model):
    empl_name = models.CharField(max_length=250, verbose_name='ФИО сотрудника')
    empl_title = models.CharField(max_length=250, verbose_name='Заголовок')
    empl_publication_date = models.DateTimeField(auto_now_add=True, verbose_name='Дата публикации')
    empl_biography = models.TextField(verbose_name='Биография сотрудника')

    class Meta:
        verbose_name = 'Наш сотрудник'
        verbose_name_plural = 'Наши сотрудники'
        ordering = ['empl_title', ]

    def __str__(self):
        return self.empl_title

    def get_absolute_url(self):
        return reverse('', kwargs={'empl_pk': self.pk})


class EmployeePhotoModel(models.Model):
    photo_title = models.CharField(max_length=250, db_index=True, verbose_name='Название фото')
    employee_photo = models.ForeignKey(OurEmployeesModel, on_delete=models.SET_NULL, null=True,
                                       verbose_name='')
    photo_image = models.ImageField(upload_to='employees_photos')
    photo_publication_date = models.DateTimeField(auto_now_add=True)
    is_title_image = models.BooleanField(default=False, verbose_name='Фото для заголовка')
    photo_author = models.CharField(max_length=250, default='ФК "Динамо-Минск"',
                                    verbose_name='Автор')

    class Meta:
        verbose_name = 'Фотография сотрудников'
        verbose_name_plural = 'Фотографии сотрудников'


    def __str__(self):
        return self.photo_title


class VacanciesModel(models.Model):
    vacancy_title = models.CharField(max_length=250, verbose_name='Заголовок вакансии')
    salary = models.CharField(max_length=100, verbose_name='Заработная плата')
    work_experience = models.CharField(max_length=250, verbose_name='Опыт работы')
    full_employment = models.CharField(max_length=250, verbose_name='Полная занятость')
    requirements = models.ManyToManyField('RequirementModel')
    duties = models.ManyToManyField('DutytModel')
    welcomed = models.ManyToManyField('WelcomedModel')
    working_conditions = models.ManyToManyField('WorkingConditionModel')
    publication_date = models.DateTimeField(auto_now_add=True, verbose_name='Дата создания')

    class Meta:
        verbose_name = 'Вакансия'
        verbose_name_plural = 'Вакансии'


    def __str__(self):
        return self.vacancy_title


class RequirementModel(models.Model):
    requirement_title = models.TextField(max_length=1000, verbose_name='Требование')

    class Meta:
        ordering = ['requirement_title', ]

    def __str__(self):
        return self.requirement_title


class DutytModel(models.Model):
    duty_title = models.TextField(max_length=1000, verbose_name='Обязанность')

    class Meta:
        ordering = ['duty_title', ]

    def __str__(self):
        return self.duty_title


class WelcomedModel(models.Model):
    welcomed_title = models.TextField(max_length=1000, verbose_name='Приветствуется')

    class Meta:
        ordering = ['welcomed_title', ]

    def __str__(self):
        return self.welcomed_title


class WorkingConditionModel(models.Model):
    condition_title = models.TextField(max_length=1000, verbose_name='Условие работы')

    class Meta:
        ordering = ['condition_title', ]

    def __str__(self):
        return self.condition_title







