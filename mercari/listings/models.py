from django.db import models

# Create your models here.
class Listing(models.Model):
    item_id = models.TextField(max_length=50, unique=True)
    title = models.CharField(max_length=50)
    description = models.TextField(max_length=1000)
    item_checkout_url = models.URLField()
    category = models.TextField(max_length=20)
    condition = models.IntegerField()
    image_url = models.URLField()
    price = models.PositiveIntegerField()
    created_time = models.DateField()