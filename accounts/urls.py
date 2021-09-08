from django.contrib.auth.views import LoginView, LogoutView
from django.urls import path
from .views import DinamoUserLoginView, DinamoUserLogoutView, DinamoUserRegistrationView


app_name = 'accounts'

urlpatterns = [

    path('registration/', DinamoUserRegistrationView.as_view()),
    path('log_in/', DinamoUserLoginView.as_view(), name='login'),
    path('log_out/', DinamoUserLogoutView.as_view(), name='logout'),

]































