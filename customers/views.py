from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from .models import Customers

from .serializers import *
from django.http import JsonResponse
import json

# grabbing all customers in database
@api_view(['GET', 'POST'])
def customers_list(request):
    if request.method == 'GET':
        data = Customers.objects.all()

        serializer = CustomersSerializer(data, context={'request': request}, many=True)

        return Response(serializer.data)
# checking if customer data is valid and if so they will be saved to the database
    elif request.method == 'POST':
        serializer = CustomersSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)
            
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# additional apis for additional features
@api_view(['PUT', 'DELETE'])
def customers_detail(request, pk):
    try:
        customer = Customers.objects.get(pk=pk)
    except Customers.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'PUT':
        serializer = CustomersSerializer(customer, data=request.data,context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        customer.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

