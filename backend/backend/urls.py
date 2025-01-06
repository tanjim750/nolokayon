"""
URL configuration for backend project.

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

from django.conf import settings
from django.conf.urls.static import static

from app import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('home', views.Home.as_view(), name='home'),
    path('product-details/<id>', views.ProductDetails.as_view()),
    path('products', views.ProductView.as_view()),
    path('contact', views.ContactView.as_view()),
    path('about',views.AboutView.as_view()),
    path('footer', views.FooterView.as_view()),
    path('discount-coupon', views.DiscountView.as_view()),
    path('visitor/<visitor_id>', views.VisitorView.as_view()),
    path('checkout', views.CheckoutView.as_view()),
    path('order-details/<order_id>', views.OrderDetailsView.as_view()),
] + static(settings.MEDIA_URL,
                          document_root=settings.MEDIA_ROOT)
