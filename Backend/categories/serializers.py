from pathlib import Path
from django.contrib.auth import get_user_model
from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from tags.serializers import TaggedItemSerializer
from .models import Category
from tags.models import TaggedItem



User = get_user_model()


class CategorySerializer(serializers.ModelSerializer):
    # categories = TaggedItemSerializer(many=True)

    class Meta:
        model = Category
        fields = ['id',
                'title',
                'slug',
                # 'active',
                # 'timestamp',
                # 'updated',
                # 'tags'
            ]