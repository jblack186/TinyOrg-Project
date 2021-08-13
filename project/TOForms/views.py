from django.shortcuts import render
from django.urls import reverse
from django.shortcuts import get_object_or_404, render
from .models import TForm



def index(request):
  return render(request, 'forms/index.html')
# Create your views here.


# Vote for a question choice
