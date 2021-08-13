from django.db import models
# models.Model - this class will inherit all methods from this parameter
class TForm(models.Model):
  first_name = models.CharField(max_length=200)
  last_name = models.CharField(max_length=200)
  email = models.CharField(max_length=200)
  child_first_name = models.CharField(max_length=200)
  child_last_name = models.CharField(max_length=200)
  pub_date = models.DateTimeField('date published')
  allergies = models.CharField(max_length=200)


  def __str__(self):
    return self.first_name