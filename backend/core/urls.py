from django.urls import path
from .views import *
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path("allProducts/", AllProducts.as_view()),
    path("allCategories/", AllCategories.as_view()),
    path("allProductsByCategories/", AllProductsByCategories.as_view()),
    path("OneProduct/<str:name>/", OneProduct.as_view()),
    path("allProductsInCategory/<str:category_name>/products", AllProductsInCategory.as_view()),
    path("addProduct/", AddProduct.as_view()),
]

