from django.core.management.base import BaseCommand
import requests, json, time
from datetime import datetime, timezone

from listings.models import Listing

#SortBy: (1, Best Match), (2, Newest First ), (3, Lowest Price), (4, Highest Price), (5, Number of Likes)
#ItemCondition: (Blank, Any), (1, New), (2, Like New), (3, Good), (4, Fair), (5, Poor)
#ItemStatus: (Blank, Any), (1, For Sale), (2, Sold)
#ShippingPayerID: (Blank, Any), (2, Free Shipping)
class MercariRequester:

    base_url = "https://www.mercari.com/v1/api"

    headers = {
        'Content-Type': "application/json",
        'User-Agent': "Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:47.0) Gecko/20100101 Firefox/47.0",
        'Accept': "*/*",
        'Cache-Control': "no-cache",
        'Host': "www.mercari.com",
        'Accept-Encoding': "gzip, deflate",
        'cache-control': "no-cache"
        }

    # def __init__():
    #     pass

    def search(self, query = "", sortBy = 0, minPrice = None, maxPrice = None, itemConditions = [], categoryID = None, ItemStatus = None, length = 30, offset = 0):
        payload = {}
        payload['operationName'] = "searchQuery"
        payload['variables'] = {}
        payload['variables']['criteria'] = {}
        payload['variables']['criteria']['offset'] = offset
        payload['variables']['criteria']['sortBy'] = sortBy
        payload['variables']['criteria']['length'] = length
        payload['variables']['criteria']['query'] = query
        payload['variables']['criteria']['itemConditions'] = itemConditions
        payload['variables']['criteria']['shippingPayerIds'] = []
        payload['variables']['criteria']['sizeGroupIds'] = []
        payload['variables']['criteria']['sizeIds'] = []
        payload['variables']['criteria']['itemStatuses'] = []
        payload['variables']['criteria']['customFacets'] = []
        payload['variables']['criteria']['facets'] = [2]
        payload['variables']['criteria']['minPrice'] = minPrice
        payload['variables']['criteria']['maxPrice'] = maxPrice
        payload['variables']['categoryID'] = 0
        payload['query'] = "query searchQuery($criteria: SearchInput!) { search(criteria: $criteria) { itemsList { id name status description created originalPrice shippingPayer { id name __typename } photos { thumbnail __typename } seller { sellerId: id photo ratings { sellerRatingCount: count sellerRatingAverage: average __typename } __typename } price itemDecoration { id imageUrl __typename } brand { id name __typename } itemSize { id name __typename } itemCondition { id name __typename } itemCategory { id name __typename } customFacetsList { facetName value __typename } __typename } page { offset __typename } count facetsList { criteria { brandIdsList __typename } __typename } searchId __typename } } "

        response = requests.request("POST", self.base_url, json=payload, headers=self.headers)
        query = json.loads(response.text)

        for i in query["data"]["search"]["itemsList"]:
            i["url"] = "https://www.mercari.com/us/item/" + i["id"] +"/"
            i["checkoutUrl"] = "https://www.mercari.com/transaction/buy/" + i["id"] + "/"
        return query["data"]["search"]

    def productQuery(self, item_id):
        pass

class Command(BaseCommand):
    help = "Descriptive string for your management command"
    def handle(self, **options):
        api = MercariRequester()

        search = api.search(query="nintendo", sortBy=2)

        
        for entry in search["itemsList"]:

            obj, created = Listing.objects.update_or_create(
                item_id = entry["id"],
                title = entry["name"],
                description = entry["description"],
                item_checkout_url = entry["checkoutUrl"],
                price = entry["price"],
                category = entry["itemCategory"]["name"],
                condition = entry["itemCondition"]["id"],
                image_url = entry["photos"][0]["thumbnail"],
                created_time = datetime.fromtimestamp(entry["created"], timezone.utc)
            )




# item.title = search[]