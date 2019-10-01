from django.db import models

from django.contrib.auth.models import User


# # Query model
# class Query(models.Model):
#     keyword = models.TextField(max_length=50)
#     category = models.TextField(default="")
#     min_price = models.PositiveIntegerField(default=0)
#     max_price = models.PositiveIntegerField(default=0)
#     condition = models.IntegerField(default=0)
#     owner = models.ForeignKey(
#         User, related_name="queries", 
#         on_delete=models.CASCADE, null=True)


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
    created_time = models.DateTimeField()
    # query = models.ForeignKey(Query,related_name="listing",on_delete=models.CASCADE)


