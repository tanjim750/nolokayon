from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.views import View
from django.utils import timezone

from app import models
from app import serializers

import time, json
from datetime import datetime

class Home(View):
    def __init__(self):
        self.context = {

        }

    def get(self, request, *args, **kwargs):
        try:
            header = models.Header.objects.first()
            hero = models.Hero.objects.first()
            banners = models.Banner.objects.all()
            contact = models.Contact.objects.first()
            products = models.Product.objects.all().order_by("-created_at")


            self.context["header"] = serializers.HeaderSerializer(header).data if header else None
            self.context["banners"] = serializers.BannerSerializer(banners, many=True).data if banners else None
            self.context["hero"] = serializers.HeroSerializer(hero).data if hero else None
            self.context["contact"] = serializers.ContactSerializer(contact).data if contact else None
            self.context["products"] = serializers.ProductSerializer(products, many=True).data if products else None

            return JsonResponse(self.context, status=200)
        except:
            self.context["ok"] = False
            self.context["message"] = "An error occurred. Please try again"
            return JsonResponse(self.context, status= 501)

class AboutView(View):
    def __init__(self):
        self.context = {

        }

    def get(self, request, *args, **kwargs):
        try:
            header = models.Header.objects.first()
            about = models.About.objects.first()

            self.context["header"] = serializers.HeaderSerializer(header).data if header else None
            self.context["about"] = serializers.AboutSerializer(about).data if about else None
            
            return JsonResponse(self.context, status= 200)
        except:
            self.context["ok"] = False
            self.context["message"] = "An error occurred. Please try again"
            return JsonResponse(self.context, status= 501)
        
class ContactView(View):
    def __init__(self):
        self.context = {

        }

    def get(self, request, *args, **kwargs):
        try:
            header = models.Header.objects.first()
            contact = models.Contact.objects.first()

            self.context["header"] = serializers.HeaderSerializer(header).data if header else None
            self.context["contact"] = serializers.ContactSerializer(contact).data if contact else None

            return JsonResponse(self.context, status= 200)
        except:
            self.context["ok"] = False
            self.context["message"] = "An error occurred. Please try again"
            return JsonResponse(self.context, status= 501)

class FooterView(View):
    def __init__(self):
        self.context = {

        }

    def get(self, request, *args, **kwargs):
        try:
            products = models.Product.objects.all().order_by("-created_at")
            contact = models.Contact.objects.first()

            self.context["footer"] = serializers.ContactSerializer(contact).data if contact else None
            self.context["products"] = serializers.ProductSerializer(products, many=True).data if products else None
            
            return JsonResponse(self.context, status= 200)
        except:
            self.context["ok"] = False
            self.context["message"] = "An error occurred. Please try again"
            return JsonResponse(self.context, status= 501)

class DiscountView(View):
    def __init__(self, **kwargs):
        self.context = {}

    def get(self,request):
        try:
            coupons = models.Coupon.objects.all()
            self.context["coupons"] = serializers.CouponSerializer(coupons,many=True).data

            return JsonResponse(self.context, status= 200)
        except:
            self.context["ok"] = False
            self.context["message"] = "An error occurred. Please try again"
            return JsonResponse(self.context, status= 501)
    
    def post(self,request):
        data = json.loads(request.body)
        code = data.get("coupon",None)
        product_id = data.get("product_id",None)

        if not code and not product_id:
            self.context["ok"] = False
            self.context["message"] = "Missing required parameters."
            return JsonResponse(self.context, status= 400)
        
        coupon = models.Coupon.objects.filter(code=code).first()
        product = models.Product.objects.filter(id=product_id).first()

        if not coupon:
            self.context["ok"] = False
            self.context["message"] = "Invalid coupon code."
            return JsonResponse(self.context, status= 404)
        
        if not product:
            return JsonResponse({
                "ok": False,
                "message": "Invalid product."
            }, status=404)

        # Check if the coupon is active and within the validity period
        now = timezone.now()
        if not coupon.is_active or not (coupon.valid_from <= now <= coupon.valid_until):
            return JsonResponse({
                "ok": False,
                "message": "This coupon is expired or inactive."
            }, status=400)

        # Check if the coupon applies to the product's category or all products
        if coupon.category and product.category != coupon.category:
            return JsonResponse({
                "ok": False,
                "message": "This coupon does not apply to the selected product."
            }, status=400)

        # If all checks pass, return success response 
        product_price = product.discount_price if product.discount_price else product.price
        return JsonResponse({
            "ok": True,
            "message": "Congratulations you got "+str(coupon.discount_percentage)+"% off.",
            "discount_percentage": coupon.discount_percentage,
            "off_price": product_price - (product_price*(coupon.discount_percentage/100))
        }, status=200)

class ProductDetails(View):
    def __init__(self):
        self.context = {}

    def get(self, request, id):
        try:
            product = models.Product.objects.filter(id=id).first()
            
            if not product:
                self.context["ok"] = False
                self.context["message"] = "Product not found. Try with valid product"
                return JsonResponse(self.context, status= 404)
            
            product.hits += 1
            product.save()

            self.context["ok"] = True
            self.context["product"] = serializers.ProductSerializer(product).data

            return JsonResponse(self.context, status=200)
        except:
            self.context["ok"] = False
            self.context["message"] = "An error occurred. Please try again"
            return JsonResponse(self.context, status= 501)