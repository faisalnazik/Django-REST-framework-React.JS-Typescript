from rest_framework import serializers
from .models import Movie
from rest_framework.reverse import reverse


class MovieSerializer(serializers.ModelSerializer):
    # categories = TaggedItemSerializer(many=True)
    
    class Meta:
        model = Movie
        fields = ['id',
                'title',
                'slug',
                'author',
                'cover_img_url',
                'body',
                'link',
                'imdb_rating',
                'publish',
                'views',
                'hearts',
                
            ]
  