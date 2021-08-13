from django.urls import path
from . import views

app__name = 'TOForms'
urlpatterns = [
  path('', views.index, name='index')
]