from listings.models import Listing
from rest_framework import viewsets, permissions
from .serializers import ListingSerializer
import django_rq
import redis
from mercari_backend.get_items import Fetch_Items
# Listing Viewset

class ListingViewSet(viewsets.ModelViewSet):


    # low_queue = django_rq.get('low', connection=redis_cursor)

    permission_classes = [
        permissions.AllowAny
    ]

    def get_queryset(self):
        redis_cursor = redis.StrictRedis(host='localhost', port='6379', db='0', password='')

        default_queue = django_rq.queues.get_queue('default', connection=redis_cursor)
        default_queue.enqueue(Fetch_Items)
        queryset = Listing.objects.all()
        return queryset


    serializer_class = ListingSerializer

