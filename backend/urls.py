from django.contrib import admin
from django.urls import include, path
from core.views import MemberViewSet
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'members', MemberViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(router.urls)),
    path('api-auth/',
         include('rest_framework.urls', namespace='rest_framework'))
]
