import uuid

import shortuuid
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
from .serializers import VideoSerializer
from .models import Video


User = get_user_model()

class VideoViewSet(mixins.RetrieveModelMixin, GenericViewSet,):
    queryset = Video.objects.all()
    serializer_class = VideoSerializer
    permission_classes = [ReadOnly]

    def list(self, request):
        # Note the use of `get_queryset()` instead of `self.queryset`
        queryset = self.get_queryset()
        serializer = VideoSerializer(queryset, many=True)
        return Response(serializer.data)