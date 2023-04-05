"""
URL configuration for shop project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
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
from django.urls import path
from django.views import ProductList, ProductDetail, CategoryList, CategoryDetail, CategoryProductList

urlpatterns = [
    path('products/', ProductList.as_view(), name='product_list'),
    path('products/<int:id>/', ProductDetail.as_view(), name='product_detail'),
    path('categories/', CategoryList.as_view(), name='category_list'),
    path('categories/<int:id>/', CategoryDetail.as_view(), name='category_detail'),
    path('categories/<int:id>/products/', CategoryProductList.as_view(), name='category_product_list'),
    path('api/', include('api.urls')),
]

