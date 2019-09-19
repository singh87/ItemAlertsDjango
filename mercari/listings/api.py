from listings.models import Listing
from rest_framework import viewsets, permissions
from .serializers import ListingSerializer

# Listing Viewset

class ListingViewSet(viewsets.ModelViewSet):
    queryset = Listing.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = ListingSerializer