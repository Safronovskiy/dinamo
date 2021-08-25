from django.shortcuts import render



def order_creation_view(request):
    return render(request, 'order_create.html', {})


def empty_cart_view(request):
    return render(request, 'order_empty.html', {})


def order_contacts_view(request):
    if request.method == 'POST':
        pass

    return render(request, 'order_contacts.html', {})


def order_noprice_view(request):
    return render(request, 'order_noprice.html', {})


def order_payment_ok_view(request):
    return render(request, 'order_payment_ok.html', {})

















