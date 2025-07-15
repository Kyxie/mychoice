from rest_framework import viewsets
from rest_framework.exceptions import NotFound
from django.shortcuts import get_object_or_404
from .models import Item
from .serializers import ItemSerializer
from .utils.response import success, error
from drf_yasg.utils import swagger_auto_schema

class ItemViewSet(viewsets.ViewSet):
    def list(self, request):
        queryset = Item.objects.all()
        serializer = ItemSerializer(queryset, many=True)
        return success(serializer.data)

    def retrieve(self, request, pk=None):
        item = get_object_or_404(Item, pk=pk)
        serializer = ItemSerializer(item)
        return success(serializer.data)

    @swagger_auto_schema(request_body=ItemSerializer)
    def create(self, request):
        serializer = ItemSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return success(serializer.data, message="Item created")
        return error(message="Invalid data", status=400, errors=serializer.errors)

    def partial_update(self, request, pk=None):
        item = get_object_or_404(Item, pk=pk)
        serializer = ItemSerializer(item, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return success(serializer.data, message="Item updated")
        return error(message="Invalid data", status=400, errors=serializer.errors)

    def destroy(self, request, pk=None):
        try:
            item = Item.objects.get(pk=pk)
        except Item.DoesNotExist:
            raise NotFound("Item not found.")
        item.delete()
        return success(data=None, message="Item deleted")