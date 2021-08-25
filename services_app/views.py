from django.shortcuts import render
from .forms import *


def services_view(request):
    return render(request, 'dinamo_catalog.html')

def service_added_view(request):
    pass