from django.urls import path
from .views import *

urlpatterns = [
    path('add-product/', AddProduct.as_view())
]