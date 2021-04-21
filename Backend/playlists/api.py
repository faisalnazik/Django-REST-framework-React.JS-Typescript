import uuid

import shortuuid
from dj_rest_auth.registration.views import RegisterView
from django.conf import settings
from django.contrib.auth import get_user_model
from rest_framework import filters
from rest_framework import mixins
from rest_framework.decorators import action
from rest_framework.exceptions import PermissionDenied
from rest_framework.generics import ListAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.status import HTTP_400_BAD_REQUEST
from rest_framework.views import APIView
from rest_framework.viewsets import GenericViewSet
from rest_framework.viewsets import ReadOnlyModelViewSet

from .permissions import ReadOnly

from .models import Playlist, PlaylistItem, PlaylistRelated
from .serializers import PlaylistSerializer, PlaylistItemSerializer,\
         PlaylistRelatedSerializer


class PlaylistViewSet(mixins.RetrieveModelMixin, GenericViewSet,):
    queryset = Playlist.objects.all()
    serializer_class = PlaylistSerializer
    permission_classes = [ReadOnly]

    def list(self, request):
        # Note the use of `get_queryset()` instead of `self.queryset`
        queryset = self.get_queryset()
        serializer = PlaylistSerializer(queryset, many=True)
        return Response(serializer.data)



class PlaylistItemViewSet(mixins.RetrieveModelMixin, GenericViewSet,):
    queryset = PlaylistItem.objects.all()
    serializer_class = PlaylistItemSerializer
    permission_classes = [ReadOnly]

    def list(self, request):
        # Note the use of `get_queryset()` instead of `self.queryset`
        queryset = self.get_queryset()
        serializer = PlaylistItemSerializer(queryset, many=True)
        return Response(serializer.data)

class PlaylistRelatedViewSet(mixins.RetrieveModelMixin, GenericViewSet,):
    queryset = PlaylistRelated.objects.all()
    serializer_class = PlaylistRelatedSerializer
    permission_classes = [ReadOnly]

    def list(self, request):
        # Note the use of `get_queryset()` instead of `self.queryset`
        queryset = self.get_queryset()
        serializer = PlaylistRelatedSerializer(queryset, many=True)
        return Response(serializer.data)
