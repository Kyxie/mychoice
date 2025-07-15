from django.urls import path
from .views import ItemViewSet

# For all
item_list = ItemViewSet.as_view({
    'get': 'list',
    'post': 'create'
})

# For specific id
item_detail = ItemViewSet.as_view({
    'get': 'retrieve',
    'patch': 'partial_update',
    'delete': 'destroy'
})

urlpatterns = [
    path('items/', item_list, name='item-list'),
    path('items/<int:pk>/', item_detail, name='item-detail'),
]