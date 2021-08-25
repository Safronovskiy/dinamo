from django.shortcuts import render



def about_view(request):

    return render(request, 'about_stadium.html', {})


def about_contacts_view(request):
    return render(request, 'dinamo_contacts.html', {})


def howtoget_view(request):
    return render(request, 'howtoget.html', {})


def detail_employees_view(request):
    return render(request, 'dinamo_employee_details.html', {})


def management_view(request):
    return render(request, 'managment.html', {})

def history_view(request):
    return render(request, 'history.html', {})












