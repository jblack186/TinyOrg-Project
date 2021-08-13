from django.contrib import admin
admin.site.site_header = "Tiny Organics"
admin.site.site_title = "Tiny Organics Admin Area"
admin.site.index_title = "Welcome to the Tiny Organics admin area"


from .models import TForm

admin.site.register(TForm)

# Register your models here.
