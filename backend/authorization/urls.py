from django.conf import settings
from django.conf.urls.static import static
from django.urls import path
from .views import *

urlpatterns = [
    path('registration/', Registration.as_view()),
    path('login/', Login.as_view()),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
