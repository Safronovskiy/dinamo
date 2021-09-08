from django.shortcuts import render



def about_view(request):

    return render(request, 'about_stadium.html', {})


def about_contacts_view(request):
    return render(request, 'dinamo_contacts.html', {})


def howtoget_view(request):
    return render(request, 'how_to_get.html', {})


def employee_view(request):
    return render(request, 'employee.html', {})


def detail_employees_view(request):
    return render(request, 'page_employee.html', {})


def management_view(request):
    return render(request, 'managment.html', {})

def history_view(request):
    return render(request, 'history.html', {})

def documents_view(request):
    return render(request, 'documents.html', {})


def vacancy_view(request):
    return render(request, 'vacancy.html', {})







