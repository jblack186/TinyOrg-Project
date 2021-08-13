from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from .models import Recipes
from .serializers import *

from django.http import JsonResponse
import json


@api_view(['GET', 'POST'])
def recipe_list(request):
    if request.method == 'GET':
        data = Recipes.objects.all()

        recipe_serializer = RecipeSerializer(data, context={'request': request}, many=True)

        return Response(recipe_serializer.data)

    elif request.method == 'POST':
        recipe_serializer = RecipeSerializer(data=request.data)
        if recipe_serializer.is_valid():
            recipe_serializer.save()
            return Response(status=status.HTTP_201_CREATED)
                
        return Response(recipe_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

