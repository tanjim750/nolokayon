from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.views import View

from app import models
from app import serializers

import time

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