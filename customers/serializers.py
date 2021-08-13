from rest_framework import serializers
from .models import Customers

class CustomersSerializer(serializers.ModelSerializer):

    class Meta:
        model = Customers 
        fields = ('pk', 'first_name', 'last_name', 'email', 'child_first_name', 'child_last_name', 'allergies')

