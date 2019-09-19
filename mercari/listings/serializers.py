from rest_framework import serializers
from listings.models import Listing

# Listing Serializer

class ListingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Listing
        fields = '__all__'