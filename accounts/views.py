from django.contrib.auth.models import User
from django.contrib.auth.views import LoginView, LogoutView
from django.urls import reverse_lazy
from django.views.generic import CreateView
from django.contrib.auth.forms import UserCreationForm





class DinamoUserRegistrationView(CreateView):

    model = User
    form_class = UserCreationForm
    template_name = 'user_registration.html'
    success_url = reverse_lazy('accounts:login')


class DinamoUserLoginView(LoginView):

    template_name = 'user_login.html'



class DinamoUserLogoutView(LogoutView):

    template_name = 'user_loggedout.html'



















