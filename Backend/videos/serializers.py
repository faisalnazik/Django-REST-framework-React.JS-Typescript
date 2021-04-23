from pathlib import Path
from django.contrib.auth import get_user_model
from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from tags.serializers import TaggedItemSerializer
from .models import Video




User = get_user_model()


class VideoSerializer(serializers.ModelSerializer):
    # categories = TaggedItemSerializer(many=True)

    class Meta:
        model = Video
        fields = ['id',
                'title',
                'description',
                'video_id'
                # 'timestamp',
                # 'updated',
                # 'tags'
            ]