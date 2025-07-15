from rest_framework import serializers
from .models import Item

class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = '__all__'
        read_only_fields = ['created_at', 'updated_at']

    def validate(self, data):
        name = data.get('name', getattr(self.instance, 'name', None))
        group = data.get('group', getattr(self.instance, 'group', None))

        qs = Item.objects.filter(name=name, group=group)
        if self.instance:
            qs = qs.exclude(pk=self.instance.pk)

        if qs.exists():
            raise serializers.ValidationError({
                'name': 'This name already exists in the same group.'
            })

        return data
