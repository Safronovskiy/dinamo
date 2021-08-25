from django import forms
from . models import *



class ParkingForm(forms.Form):

    CHOICES = [
        ('outdoor', 'outdoor'),
        ('indoor', 'indoor')
    ]

    type_of_parking = forms.CharField(widget=forms.RadioSelect(choices=CHOICES, attrs={'price_': 100}))
    quantity = forms.IntegerField()
    price = forms.DecimalField()
    calendar = forms.DateField(widget=forms.DateInput(attrs={'type':'date', }))
    outdoor_price = forms.CharField()
    indoor_price = forms.CharField()

    class Meta:
        fields = ('outdoor', 'indoor', 'quantity', 'price')











































