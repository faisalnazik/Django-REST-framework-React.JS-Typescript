from dj_rest_auth.registration.views import RegisterView
from django.conf import settings
from django.contrib.auth import get_user_model
from rest_framework.generics import ListAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.viewsets import GenericViewSet
from rest_framework.viewsets import ReadOnlyModelViewSet
from rest_framework import generics
from rest_framework import mixins
from .permissions import ReadOnly
from .serializers import MovieSerializer
from .models import Movie


class MovieViewSet(mixins.RetrieveModelMixin, GenericViewSet,):
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer
    permission_classes = [ReadOnly]
    

    def list(self, request):
        
        queryset = self.get_queryset()
        serializer = MovieSerializer(queryset, many=True)
        return Response(serializer.data)

