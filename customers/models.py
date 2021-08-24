from django.db import models

class Customers(models.Model):
    first_name = models.CharField("First Name", max_length=240)
    last_name = models.CharField("Last Name", max_length=240)
    email = models.EmailField()
    child_first_name = models.CharField("Child's First Name", max_length=240)
    child_last_name = models.CharField("Child's Last Name", max_length=240)
    allergies = models.CharField("Allergies", max_length=240)


    def __str__(self):
        return self.first_name

class Products(models.Model):
    customer = models.ForeignKey(Customers, verbose_name="products", default=1, on_delete=models.SET_DEFAULT)
    name = models.CharField(max_length=300)
    product_id = models.CharField(max_length=20)
    sodium_level = models.CharField(max_length=20)
    sugar_level = models.CharField(max_length=20)
    date_added = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name