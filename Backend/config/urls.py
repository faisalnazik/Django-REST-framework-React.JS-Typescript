"""config URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from django.conf import settings
from django.conf.urls.static import static
from rest_framework.documentation import include_docs_urls
from rest_framework.schemas import get_schema_view
from accounts.api import (
    UserViewSet,
    AvatarViewSet,
    AuthSetup,
)

from categories.api import CategoryList
from playlists.api import PlaylistViewSet, PlaylistItemViewSet,\
     PlaylistRelatedViewSet

from videos.api import VideoViewSet

router = routers.DefaultRouter()
router.register(r"avatars", AvatarViewSet)
router.register(r"users", UserViewSet)
router.register(r"categories", CategoryList)
router.register(r"playlists", PlaylistViewSet)
router.register(r"videos", VideoViewSet)
router.register(r"playlist-items", PlaylistItemViewSet)
router.register(r"related", PlaylistRelatedViewSet)


schema_view = get_schema_view(title='Rest API')

urlpatterns = [
    path('admin/', admin.site.urls),
    path("api/", include(router.urls)),
    path("api-auth/", include("rest_framework.urls")),
    path("auth/", include("dj_rest_auth.urls")),
    path("auth/registration/", include("dj_rest_auth.registration.urls")),
    path("auth/setup/", AuthSetup.as_view(), name="auth-setup"),
    path('docs/', include_docs_urls(title='Rest API')),
    path('schema/', schema_view),
    # path('categories/', include('categories.urls')),
    # path('api/', include('accounts.urls')),
    
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

if settings.DEBUG:
    try:
        import debug_toolbar

        urlpatterns = [path("__debug__/", include(debug_toolbar.urls))] + urlpatterns
    except ModuleNotFoundError:
        pass
