from django.urls import path
from . views import *


app_name='cart'

urlpatterns = [
    path('', order_creation_view, name='order_creation'),
    path('order_empty/', empty_cart_view, name='empty_cart'),
    path('order_contacts/', order_contacts_view, name='order_contacts'),
    path('order_noprice/', order_noprice_view, name='order_noprice'),
    path('order_payment_ok/', order_payment_ok_view, name='order_payment_ok'),
]