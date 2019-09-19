from rest_framework import routers
from .api import ListingViewSet

router = routers.DefaultRouter()
router.register('api/listings', ListingViewSet, 'listings')

urlpatterns = router.urls