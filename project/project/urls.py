from django.contrib import admin
from django.urls import include, path, re_path
from customers import views
from recipes import rviews 
from django.conf.urls import url

urlpatterns = [
    path('admin/', admin.site.urls),
    re_path(r'^api/customers/$', views.customers_list),
    re_path(r'^api/recipes-list/$', rviews.recipe_list),
    re_path(r'^api/customers/([0-9])$', views.customers_detail),
]