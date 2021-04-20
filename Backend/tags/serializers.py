
from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from .models import TaggedItem

class TaggedItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = TaggedItem
        fields = ['tag', 'content_type', 'object_id', 'content_object']