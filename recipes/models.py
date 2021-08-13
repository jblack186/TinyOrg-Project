from django.db import models

class Recipes(models.Model):
    recipes = models.JSONField()

    def __str__(self):
        return self.recipes