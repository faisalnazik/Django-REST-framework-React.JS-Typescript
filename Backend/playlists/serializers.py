from rest_framework import serializers

from .models import Playlist, MovieProxy, TVShowProxy, TVShowSeasonProxy, PlaylistItem, PlaylistRelated


class PlaylistSerializer(serializers.ModelSerializer):
    # categories = TaggedItemSerializer(many=True)

    class Meta:
        model = Playlist
        fields = ['id',
        'title',
        'slug'
        ]


class PlaylistItemSerializer(serializers.ModelSerializer):
    # categories = TaggedItemSerializer(many=True)

    class Meta:
        model = PlaylistItem
        fields = ['id',
                'playlist',
                'video'
        ]
class PlaylistRelatedSerializer(serializers.ModelSerializer):
    # categories = TaggedItemSerializer(many=True)

    class Meta:
        model = PlaylistRelated
        fields = ['id',
                'playlist',
                'related'
        ]